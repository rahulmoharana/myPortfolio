# Rahul Moharana - Minimal Portfolio

A minimalist, high-performance portfolio based on the design principles of prashantsani.com. Built with React (Vite), Tailwind CSS, and Framer Motion.

## Features

- **Minimal Design**: Focused on typography and whitespace.
- **Micro-Animations**: Staggered reveals, hover effects, and smooth scrolling.
- **3D Elements**: Subtle, lazy-loaded 3D hero background using `react-three-fiber`.
- **Accessibility**: Support for `prefers-reduced-motion` and keyboard navigation.
- **Custom Cursor**: A subtle follower cursor (disabled on touch devices).

## Setup & Running

1. **Install Dependencies**:
   ```bash
   npm install framer-motion lucide-react clsx @react-three/fiber @react-three/drei three
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

### Content
Edit `data.ts` to update your personal information. Placeholders like `{{NAME}}` are currently filled with data extracted from the provided PDF, but you can modify the `CONTENT` object directly.

### Animations
Animation variants are centralized in `utils/animations.ts`.
- `TRANSITION`: Controls global timing/easing.
- `staggerContainer`: Controls how list items appear.

### Performance
- Heavy assets (like the 3D sphere) are lazy-loaded using `React.lazy` and `Suspense`.
- The marquee uses CSS animations for the best thread performance.
- The scroll listener is handled via Framer Motion's `useScroll` which is optimized internally.

### GSAP Option
If you prefer GSAP for more complex timeline-based scrolling (like pinning sections):
1. Uninstall Framer Motion.
2. Install `gsap`.
3. Use `useLayoutEffect` to initialize `ScrollTrigger`.
4. Replace `variants` props with GSAP `.from()` or `.to()` calls.

## Deployment
This project is a static site (SPA). You can deploy it to Vercel, Netlify, or GitHub Pages easily.
