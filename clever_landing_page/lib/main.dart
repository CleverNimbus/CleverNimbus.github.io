import 'package:flutter/material.dart';
import 'panels/home_panel.dart';
import 'panels/projects_panel.dart';

void main() {
  runApp(const MyApp());
}

enum NavSection { home, projects }

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CleverNimbus',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF1C1C1E),
        colorScheme: ColorScheme.dark(
          surface: const Color(0xFF2C2C2E),
          primary: const Color(0xFF64D2FF),
        ),
      ),
      home: const LandingPage(),
    );
  }
}

class LandingPage extends StatefulWidget {
  const LandingPage({super.key});

  @override
  State<LandingPage> createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {
  NavSection _selected = NavSection.home;

  static const _panels = <NavSection, Widget>{
    NavSection.home: HomePanel(),
    NavSection.projects: ProjectsPanel(),
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/main_back.png'),
            fit: BoxFit.cover,
            opacity: 0.4,
          ),
        ),
        child: Column(
          children: [
            _Header(
              selected: _selected,
              onSelect: (s) => setState(() => _selected = s),
            ),
            Expanded(child: _panels[_selected]!),
            const _Footer(),
          ],
        ),
      ),
    );
  }
}

class _Header extends StatelessWidget {
  const _Header({required this.selected, required this.onSelect});

  final NavSection selected;
  final ValueChanged<NavSection> onSelect;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      color: const Color(0xFF111113),
      padding: const EdgeInsets.symmetric(horizontal: 32),
      child: Row(
        children: [
          Text(
            'CleverNimbus',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.2,
            ),
          ),
          const Spacer(),
          _NavItem(
            label: 'Home',
            active: selected == NavSection.home,
            onTap: () => onSelect(NavSection.home),
          ),
          const SizedBox(width: 24),
          _NavItem(
            label: 'Projects',
            active: selected == NavSection.projects,
            onTap: () => onSelect(NavSection.projects),
          ),
        ],
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  const _NavItem({
    required this.label,
    required this.active,
    required this.onTap,
  });

  final String label;
  final bool active;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final color = active ? const Color(0xFF64D2FF) : Colors.white60;
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(4),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        child: Text(
          label,
          style: TextStyle(
            color: color,
            fontWeight: active ? FontWeight.bold : FontWeight.normal,
            fontSize: 15,
          ),
        ),
      ),
    );
  }
}

class _Footer extends StatelessWidget {
  const _Footer();

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 48,
      color: const Color(0xFF111113),
      alignment: Alignment.center,
      child: Text(
        'Clevernimbus 2026',
        style: Theme.of(context).textTheme.bodySmall?.copyWith(
          color: Colors.white38,
          letterSpacing: 1.1,
        ),
      ),
    );
  }
}
