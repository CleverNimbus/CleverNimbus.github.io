#!/usr/bin/env bash

set -euo pipefail

ROOT_TARGET_DIR="/home/sefe/sources/CleverNimbus.github.io/gh-pages"
TARGET_BRANCH="gh-pages"
ORPHAN_BRANCH="clean"
DEPLOY_MODE=""
COMMIT_MESSAGE="${1:-Fresh deployment}"
REQUIRED_FLUTTER_VERSION="3.41.9"
FLUTTER_BIN="${FLUTTER_BIN:-flutter}"

SOURCE_DIR=""
COPY_TARGET_DIR=""
BASE_HREF=""
USE_WASM="false"

usage() {
	echo "Usage: $0 [commit_message]"
	echo "Interactive mode options:"
	echo "  L: Deploy clever_landing_page to gh-pages root"
	echo "  N: Deploy noiselabyrinth_gui to app_noiselabyrinth"
	echo "  G: Deploy gtfyw_internal_debugger to app_gtfyw_internal"
}

select_mode_interactive() {
	local selected_mode=""

	echo "Select deployment mode:"
	echo "  [L] clever_landing_page -> gh-pages root"
	echo "  [N] noiselabyrinth_gui -> app_noiselabyrinth"
	echo "  [G] gtfyw_internal_debugger -> app_gtfyw_internal"

	while true; do
		read -r -p "Enter option (L/N/G): " selected_mode
		selected_mode="${selected_mode^^}"

		case "$selected_mode" in
		L|N|G)
			DEPLOY_MODE="$selected_mode"
			break
			;;
		*)
			echo "Invalid option: '$selected_mode'. Please enter L, N, or G."
			;;
		esac
	done
}

ensure_flutter_version() {
	local installed_version
	installed_version="$("$FLUTTER_BIN" --version 2>/dev/null | head -n 1 | awk '{print $2}')"

	if [[ -z "$installed_version" ]]; then
		echo "Unable to detect Flutter version using '$FLUTTER_BIN'."
		exit 1
	fi

	if [[ "$installed_version" != "$REQUIRED_FLUTTER_VERSION" ]]; then
		echo "This script requires Flutter $REQUIRED_FLUTTER_VERSION, but found $installed_version."
		echo "Set FLUTTER_BIN to a Flutter 3.41.9 binary, for example via FVM."
		exit 1
	fi
}

configure_mode() {
	case "$DEPLOY_MODE" in
	L)
		SOURCE_DIR="/home/sefe/sources/CleverNimbus.github.io/main/clever_landing_page"
		COPY_TARGET_DIR="$ROOT_TARGET_DIR"
		BASE_HREF="/"
		USE_WASM="true"
		;;
	N)
		SOURCE_DIR="/home/sefe/sources/NoiseLabyrinth/noiselabyrinth_gui"
		COPY_TARGET_DIR="$ROOT_TARGET_DIR/app_noiselabyrinth"
		BASE_HREF="/app_noiselabyrinth/"
		USE_WASM="false"
		;;
	G)
		SOURCE_DIR="/home/sefe/sources/Get-The-Future-You-Want/gtfyw_internal_debugger"
		COPY_TARGET_DIR="$ROOT_TARGET_DIR/app_gtfyw_internal"
		BASE_HREF="/app_gtfyw_internal/"
		USE_WASM="false"
		;;
	*)
		usage
		exit 1
		;;
	esac
}

ensure_dirs() {
	if [[ ! -d "$ROOT_TARGET_DIR" ]]; then
		echo "Root target directory does not exist. Creating: $ROOT_TARGET_DIR"
		mkdir -p "$ROOT_TARGET_DIR"
	fi

	if [[ ! -d "$COPY_TARGET_DIR" ]]; then
		echo "Copy target directory does not exist. Creating: $COPY_TARGET_DIR"
		mkdir -p "$COPY_TARGET_DIR"
	fi

	# Verify directories were created successfully
	if [[ ! -d "$ROOT_TARGET_DIR" ]]; then
		echo "Error: Failed to create root target directory: $ROOT_TARGET_DIR"
		exit 1
	fi

	if [[ ! -d "$COPY_TARGET_DIR" ]]; then
		echo "Error: Failed to create copy target directory: $COPY_TARGET_DIR"
		exit 1
	fi

	# Verify write permissions
	if [[ ! -w "$ROOT_TARGET_DIR" ]]; then
		echo "Error: Root target directory is not writable: $ROOT_TARGET_DIR"
		exit 1
	fi

	if [[ ! -w "$COPY_TARGET_DIR" ]]; then
		echo "Error: Copy target directory is not writable: $COPY_TARGET_DIR"
		exit 1
	fi

	echo "Directories verified: $ROOT_TARGET_DIR and $COPY_TARGET_DIR"
}

build_release() {
	echo "[1/4] Building Flutter web release for mode '$DEPLOY_MODE'..."

	local build_cmd=(
		"$FLUTTER_BIN" build web
		--release
		--base-href "$BASE_HREF"
	)

	if [[ "$USE_WASM" == "true" ]]; then
		echo "Note: Enabling WebAssembly build (--wasm), which uses skwasm with JavaScript fallback."
		build_cmd+=(--wasm)
	fi

	(
		cd "$SOURCE_DIR"
		"${build_cmd[@]}"
	)
}

clean_gh_pages_root() {
	if [[ "$DEPLOY_MODE" == "L" ]]; then
		echo "[2/4] Cleaning gh-pages root (keeping .git and root dirs named app_*)..."
		find "$ROOT_TARGET_DIR" \
			-mindepth 1 \
			-maxdepth 1 \
			! -name '.git' \
			! \( -type d -name 'app_*' \) \
			-exec rm -rf {} +
	else
		echo "[2/4] Skipping root cleanup for mode '$DEPLOY_MODE'; only target app directory will be cleaned."
	fi
}

sync_build_output() {
	echo "[3/4] Syncing build output to: $COPY_TARGET_DIR"

	# Verify target directory exists before syncing
	if [[ ! -d "$COPY_TARGET_DIR" ]]; then
		echo "Error: Target directory does not exist: $COPY_TARGET_DIR"
		exit 1
	fi

	if [[ "$COPY_TARGET_DIR" == "$ROOT_TARGET_DIR" ]]; then
		find "$COPY_TARGET_DIR" \
			-mindepth 1 \
			-maxdepth 1 \
			! -name '.git' \
			! \( -type d -name 'app_*' \) \
			-exec rm -rf {} +
	else
		find "$COPY_TARGET_DIR" \
			-mindepth 1 \
			-maxdepth 1 \
			! -name '.git' \
			-exec rm -rf {} +
	fi
	cp -a "$SOURCE_DIR/build/web/." "$COPY_TARGET_DIR/"
}

compact_and_push() {
	echo "[4/4] Rewriting history and force-pushing '$TARGET_BRANCH'..."
	git -C "$ROOT_TARGET_DIR" checkout --orphan "$ORPHAN_BRANCH"
	git -C "$ROOT_TARGET_DIR" add -A
	git -C "$ROOT_TARGET_DIR" commit -m "$COMMIT_MESSAGE"

	if git -C "$ROOT_TARGET_DIR" show-ref --verify --quiet "refs/heads/$TARGET_BRANCH"; then
		git -C "$ROOT_TARGET_DIR" branch -D "$TARGET_BRANCH"
	fi

	git -C "$ROOT_TARGET_DIR" branch -m "$TARGET_BRANCH"
	git -C "$ROOT_TARGET_DIR" push -f --set-upstream origin "$TARGET_BRANCH"
}

select_mode_interactive
configure_mode
ensure_flutter_version
ensure_dirs
build_release
clean_gh_pages_root
sync_build_output
compact_and_push

echo "Done. Mode '$DEPLOY_MODE' deployed and force-pushed to '$TARGET_BRANCH'."
