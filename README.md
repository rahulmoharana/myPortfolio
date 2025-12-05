# Rahul Moharana - Minimal Portfolio

A minimalist, high-performance portfolio based on the design principles of prashantsani.com. Built with React (Vite), Pure CSS, and Framer Motion.

## 🚀 How to Host

### Option 1: Vercel or Netlify (Recommended)
This is the easiest method.
1. Push this code to a **GitHub repository**.
2. Log in to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Click **"Add New Project"** and select your repository.
4. The build settings will be detected automatically (`npm run build`).
5. Click **Deploy**.

### Option 2: GitHub Pages
1. Push this code to a GitHub repository.
2. Go to `Settings` > `Pages`.
3. Under "Build and deployment", select **GitHub Actions**.
4. Configure the static web apps workflow to run `npm install` and `npm run build`.

## 🛠 Setup & Development

1. **Install Dependencies**:
   ```bash
   npm install
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

- **Content**: Edit `data.ts` to update your personal information.
- **Styles**: Edit `index.css` for global styles.
- **Animations**: Check `utils/animations.ts`.

## Tech Stack
- React 18
- Vite
- Pure CSS (No Tailwind)
- Framer Motion
- React Three Fiber
