import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjectsPanel extends StatelessWidget {
  const ProjectsPanel({super.key});

  Future<void> _openPath(String path) async {
    final uri = Uri.parse(path);
    await launchUrl(uri, webOnlyWindowName: '_self');
  }

  static const _minCardHeight = 260.0;
  static const _cardSpacing = 20.0;
  static const _padding = 24.0;
  // Minimum height before switching to scrollable layout
  static const _scrollThreshold = _minCardHeight * 3 + _cardSpacing * 2 + _padding * 2;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final useScroll = constraints.maxHeight < _scrollThreshold;

        Widget wrapCard(Widget card) => useScroll ? SizedBox(height: _minCardHeight, child: card) : Expanded(child: card);

        final cards = Column(
          children: [
            wrapCard(
              _ProjectCard(
                title: 'Get the future you want',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, nibh ac volutpat dapibus, sem justo aliquet nibh, non vulputate augue justo sit amet nisl.',
                buttonLabel: 'Open Get the future you want',
                backgroundAssetPath: 'assets/Network.png',
                backgroundOpacity: 0.44,
                imageColorFilter: const ColorFilter.mode(Color(0x88B8C3CE), BlendMode.srcATop),
                overlayGradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xC92B2C30), Color(0xD1232428)],
                ),
                onPressed: () => _openPath('/app_gtfyw_internal/'),
              ),
            ),
            const SizedBox(height: _cardSpacing),
            wrapCard(
              _ProjectCard(
                title: 'Noise Labyrinth',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, nibh ac volutpat dapibus, sem justo aliquet nibh, non vulputate augue justo sit amet nisl.',
                buttonLabel: 'Open Noise Labyrinth',
                backgroundAssetPath: 'assets/music-waves.jpg',
                backgroundOpacity: 0.43,
                imageColorFilter: const ColorFilter.mode(Color(0x8F000000), BlendMode.darken),
                overlayGradient: const LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xC7202024), Color(0xDE202024)],
                ),
                onPressed: () => _openPath('/app_noiselabyrinth/'),
              ),
            ),
            const SizedBox(height: _cardSpacing),
            wrapCard(
              _ProjectCard(
                title: 'ADHD Tools',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, nibh ac volutpat dapibus, sem justo aliquet nibh, non vulputate augue justo sit amet nisl.',
                buttonLabel: 'Open ADHD Tools',
                backgroundAssetPath: 'assets/ADHD.jpg',
                backgroundOpacity: 0.43,
                imageColorFilter: const ColorFilter.mode(Color(0x8F88AA88), BlendMode.srcATop),
                overlayGradient: const LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xC7202024), Color(0xDE202024)],
                ),
                onPressed: () => _openPath('/app_adhd_tools/'),
              ),
            ),
          ],
        );

        final inner = Center(
          child: ConstrainedBox(constraints: const BoxConstraints(maxWidth: 980), child: cards),
        );

        return Padding(
          padding: const EdgeInsets.all(_padding),
          child: useScroll ? SingleChildScrollView(child: inner) : inner,
        );
      },
    );
  }
}

class _ProjectCard extends StatelessWidget {
  const _ProjectCard({
    required this.title,
    required this.description,
    required this.buttonLabel,
    required this.backgroundAssetPath,
    required this.backgroundOpacity,
    required this.overlayGradient,
    required this.onPressed,
    this.imageColorFilter,
  });

  final String title;
  final String description;
  final String buttonLabel;
  final String backgroundAssetPath;
  final double backgroundOpacity;
  final LinearGradient overlayGradient;
  final ColorFilter? imageColorFilter;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return ClipRRect(
      borderRadius: BorderRadius.circular(18),
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: const Color(0xFF3E3E42)),
          gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF2C2C31), Color(0xFF232327)]),
        ),
        child: Stack(
          fit: StackFit.expand,
          children: [
            Opacity(
              opacity: backgroundOpacity,
              child: imageColorFilter == null
                  ? Image.asset(backgroundAssetPath, fit: BoxFit.cover)
                  : ColorFiltered(
                      colorFilter: imageColorFilter!,
                      child: Image.asset(backgroundAssetPath, fit: BoxFit.cover),
                    ),
            ),
            Container(decoration: BoxDecoration(gradient: overlayGradient)),
            Padding(
              padding: const EdgeInsets.all(28),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: textTheme.headlineSmall?.copyWith(color: Colors.white, fontWeight: FontWeight.w700),
                      ),
                      const SizedBox(height: 12),
                      Text(description, style: textTheme.bodyLarge?.copyWith(color: Colors.white70, height: 1.35)),
                    ],
                  ),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(999),
                        gradient: const LinearGradient(colors: [Color(0xFF78E3FF), Color(0xFF59B9FF)]),
                        boxShadow: const [BoxShadow(color: Color(0x662A9FFF), blurRadius: 16, offset: Offset(0, 6))],
                      ),
                      child: ElevatedButton(
                        onPressed: onPressed,
                        style: ElevatedButton.styleFrom(
                          foregroundColor: const Color(0xFF0C1117),
                          backgroundColor: Colors.transparent,
                          elevation: 0,
                          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
                          shape: const StadiumBorder(),
                        ),
                        child: Text(buttonLabel, style: const TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
