#!/usr/bin/env bash

set -euo pipefail

ROOT_TARGET_DIR="/home/sefe/sources/CleverNimbus.github.io.gh-pages"
TARGET_BRANCH="gh-pages"
ORPHAN_BRANCH="clean"
DEPLOY_MODE="${1:-L}"
COMMIT_MESSAGE="${2:-Fresh deployment}"

SOURCE_DIR=""
COPY_TARGET_DIR=""
BASE_HREF=""
USE_HTML_RENDERER="false"

usage() {
	echo "Usage: $0 <L|N|G> [commit_message]"
	echo "  L: Deploy clever_landing_page to gh-pages root with html renderer"
	echo "  N: Deploy noiselabyrinth_gui to app_noiselabyrinth"
	echo "  G: Deploy gtfyw_internal_debugger to app_noiselabyrinth"
}

configure_mode() {
	case "$DEPLOY_MODE" in
	L)
		SOURCE_DIR="/home/sefe/sources/CleverNimbus.github.io.main/clever_landing_page"
		COPY_TARGET_DIR="$ROOT_TARGET_DIR"
		BASE_HREF="/"
		USE_HTML_RENDERER="true"
		;;
	N)
		SOURCE_DIR="/home/sefe/sources/NoiseLabyrinth/noiselabyrinth_gui"
		COPY_TARGET_DIR="$ROOT_TARGET_DIR/app_noiselabyrinth"
		BASE_HREF="/app_noiselabyrinth/"
		USE_HTML_RENDERER="false"
		;;
	G)
		SOURCE_DIR="/home/sefe/sources/Get-The-Future-You-Want/gtfyw_internal_debugger"
		COPY_TARGET_DIR="$ROOT_TARGET_DIR/app_gtfyw_internal"
		BASE_HREF="/app_gtfyw_internal/"
		USE_HTML_RENDERER="false"
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
}

build_release() {
	echo "[1/4] Building Flutter web release for mode '$DEPLOY_MODE'..."

	local build_cmd=(
		flutter build web
		--release
		--base-href "$BASE_HREF"
		--project-dir "$SOURCE_DIR"
	)

	if [[ "$USE_HTML_RENDERER" == "true" ]]; then
		build_cmd+=(--web-renderer html)
	fi

	"${build_cmd[@]}"
}

clean_gh_pages_root() {
	echo "[2/4] Cleaning gh-pages root (keeping .git and root dirs named app_*)..."
	find "$ROOT_TARGET_DIR" \
		-mindepth 1 \
		-maxdepth 1 \
		! -name '.git' \
		! \( -type d -name 'app_*' \) \
		-exec rm -rf {} +
}

sync_build_output() {
	echo "[3/4] Syncing build output to: $COPY_TARGET_DIR"
	find "$COPY_TARGET_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
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
	git -C "$ROOT_TARGET_DIR" push -f origin "$TARGET_BRANCH"
}

configure_mode
ensure_dirs
build_release
clean_gh_pages_root
sync_build_output
compact_and_push

echo "Done. Mode '$DEPLOY_MODE' deployed and force-pushed to '$TARGET_BRANCH'."
