# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is a 3D portfolio website for NMSoft, built with React, Three.js, and Vite. The site features interactive 3D models, smooth animations with GSAP, and a responsive design using Tailwind CSS v4. Content is primarily in Thai language.

## Development Commands

### Essential Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Architecture

### Tech Stack
- **Frontend Framework**: React 19 with JSX
- **Build Tool**: Vite 6.2
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Animations**: GSAP with ScrollTrigger
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Post-Processing**: @react-three/postprocessing

### Project Structure

```
src/
├── App.jsx                    # Main app component with section layout
├── main.jsx                   # React entry point
├── components/                # Reusable UI components
│   ├── AnimatedCounter.jsx    # Number counter animations
│   ├── Button.jsx             # Reusable button component
│   ├── GlowCard.jsx          # Card with glow effects
│   ├── NavBar.jsx            # Navigation bar
│   ├── ThemeToggle.jsx       # Dark/light mode toggle
│   ├── TitleHeader.jsx       # Section title headers
│   ├── HeroModels/           # 3D models for hero section
│   │   ├── HeroExperience.jsx # Main Canvas setup with responsive camera
│   │   ├── HeroLights.jsx    # Three.js lighting setup
│   │   ├── Office.jsx        # Office 3D model component
│   │   ├── Room.jsx          # Room 3D model component
│   │   └── Particles.jsx     # Particle effects
│   └── Models/               # Other 3D model components
│       ├── TechLogos/        # Tech stack 3D icons
│       └── contact/          # Contact section 3D models
├── sections/                 # Page sections
│   ├── Hero.jsx              # Hero section with 3D scene
│   ├── ShowcaseSection.jsx   # Project showcase
│   ├── LogoSection.jsx       # Company logos
│   ├── FeatureCards.jsx      # Service/ability cards
│   ├── TechStack.jsx         # Tech stack with 3D models
│   ├── Testimonials.jsx      # Client testimonials
│   ├── ContactSection.jsx    # Contact form/info
│   └── Footer.jsx            # Footer with social links
├── context/
│   └── ThemeContext.jsx      # Theme state (dark/light mode)
└── constants/
    └── index.js              # All static content data
```

### Key Architectural Patterns

#### 1. Theme System
- Global theme context via `ThemeContext.jsx`
- Toggle between dark/light mode with `ThemeToggle` component
- Theme state accessed via `useTheme()` hook
- CSS classes applied: `.light-mode` and `.dark-mode` on body element
- Components conditionally render styles based on `isDarkMode` boolean

#### 2. 3D Rendering with React Three Fiber
- **Canvas Setup**: Each 3D section uses `<Canvas>` from `@react-three/fiber`
- **Responsive 3D**: Uses `react-responsive` to adjust camera position, FOV, and model scale
  - Mobile: Larger FOV, zoomed out camera
  - Tablet: Medium settings
  - Desktop: Tighter FOV and closer camera
- **Controls**: `<OrbitControls>` with device-specific constraints (zoom disabled on tablets)
- **Models**: GLB/GLTF files loaded from `/public/models/` directory
- **Lighting**: Custom lighting setup in `HeroLights.jsx`

#### 3. Animation System (GSAP)
- Animations use `useGSAP` hook from `@gsap/react`
- Common pattern: fade-in + slide-up on scroll
- ScrollTrigger for scroll-based animations
- Stagger animations for lists/grids
- Example pattern:
  ```javascript
  useGSAP(() => {
    gsap.fromTo(
      ".selector",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: "#section", start: "top 100%" }
      }
    );
  });
  ```

#### 4. Content Management
- All static content lives in `src/constants/index.js`
- Exported as named arrays/objects: `words`, `abilities`, `testimonials`, etc.
- Content includes Thai language text
- Image paths reference `/public/images/`
- 3D model paths reference `/public/models/`

#### 5. Component Composition
- App.jsx orchestrates all sections in order
- Sections are self-contained and export default
- Components use props for customization
- Responsive design handled per-component with Tailwind classes

## Working with 3D Models

### Model Files
- Located in `/public/models/`
- Format: GLB (optimized GLTF)
- Loaded via `useGLTF` hook from `@react-three/drei`
- Models include: office, room, tech logos (React, Python, Go, Three.js, Git)

### Adding New 3D Models
1. Place `.glb` file in `/public/models/`
2. Add entry to appropriate constants array in `src/constants/index.js`
3. Create component in `src/components/Models/` or use existing pattern
4. Configure scale and rotation in constants
5. Ensure responsive camera/scale adjustments

## Styling Conventions

### Tailwind CSS v4
- Uses new `@tailwindcss/vite` plugin
- Custom classes defined in `index.css`
- Responsive breakpoints: `md:`, `lg:`, `xl:`
- Dark mode classes: conditional based on `isDarkMode` state
- Common patterns:
  - `.flex-center`: flex with center alignment
  - `.section-padding`: consistent section spacing
  - `.card-border` / `.card-border-light`: themed borders

### Color Scheme
- Dark mode: Various shades from theme
- Light mode: White/gray backgrounds with dark text
- Conditional styling based on `isDarkMode` variable

## Content & Data

All content is centralized in `src/constants/index.js`:
- `navLinks`: Navigation menu items
- `words`: Hero sliding words with icons
- `counterItems`: Stats counter data
- `abilities`: Service/feature cards (Thai text)
- `techStackIcons`: Tech stack with 3D model paths
- `testimonials`: Client reviews (Thai text)
- `socialImgs`: Social media links
- `expCards`: Experience timeline (currently commented out in App.jsx)

## Common Tasks

### Updating Content
- Edit `src/constants/index.js` to modify text, images, or data
- Images in `/public/images/`, models in `/public/models/`

### Adding a New Section
1. Create component in `src/sections/`
2. Import and add to `App.jsx` in desired order
3. Add navigation link to `navLinks` in constants if needed
4. Include GSAP animations following existing patterns

### Modifying Animations
- Edit GSAP timelines in component's `useGSAP` hook
- Adjust `stagger`, `duration`, `ease`, or `scrollTrigger` settings
- Test on multiple screen sizes

### Responsive Design
- Use Tailwind breakpoints consistently
- For 3D scenes, update camera/scale settings in respective Experience components
- Test with `react-responsive` media queries for device-specific logic
