# Developer Commands Reference

## Development

### Start Development Server
```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

## Installation

### Install Dependencies
```bash
npm install
```

### Clean Install (if issues occur)
```bash
rm -rf node_modules package-lock.json
npm install
```

## Git Commands

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Your commit message"
git push
```

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## Testing

### Check for Issues
```bash
npm run build
```
If build succeeds without errors, your code is ready!

### Test EmailJS
1. Start dev server: `npm run dev`
2. Navigate to Contact page
3. Fill and submit form
4. Check your email

## Troubleshooting

### Clear Cache
```bash
rm -rf node_modules .vite dist
npm install
```

### Fix Dependencies
```bash
npm audit fix
```

### Update Dependencies
```bash
npm update
```

## File Structure Commands

### Create New Component
```bash
# Create file
touch src/components/ComponentName.jsx

# Or use this template
cat > src/components/ComponentName.jsx << 'EOF'
import React from 'react';
import { motion } from 'framer-motion';

const ComponentName = () => {
  return (
    <div>
      {/* Your component */}
    </div>
  );
};

export default ComponentName;
EOF
```

### Create New Page
```bash
# Create file
touch src/pages/PageName.jsx

# Add to App.jsx routing
# Import: import PageName from './pages/PageName';
# Route: <Route path="/pagename" element={<PageName />} />
```

## Performance

### Analyze Bundle Size
```bash
npm run build
# Check dist folder size
du -sh dist
```

### Lighthouse Audit
1. Build and serve: `npm run build && npm run preview`
2. Open Chrome DevTools
3. Run Lighthouse audit

## Useful npm Scripts

### Add to package.json for convenience
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf node_modules dist .vite",
    "fresh": "npm run clean && npm install",
    "deploy:vercel": "vercel --prod",
    "deploy:netlify": "npm run build && netlify deploy --prod"
  }
}
```

## Environment Variables

### Set Environment Variables
```bash
# Create .env file
cp .env.example .env

# Edit with your values
nano .env  # or use any text editor
```

## Tips

### Quick Setup
```bash
# Clone and setup
git clone your-repo-url
cd portfolio
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

### Before Deploying
```bash
# Checklist
npm run build  # Make sure it builds successfully
# Test contact form
# Check all pages load
# Verify all images load
# Test responsive design
```

### Maintenance
```bash
# Weekly/Monthly
npm update  # Update dependencies
npm audit  # Check for vulnerabilities
npm audit fix  # Fix security issues
```

## VSCode Extensions (Recommended)

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- GitLens

## Quick Fixes

### "Module not found"
```bash
npm install
```

### "Port 3000 already in use"
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### "Build failed"
```bash
# Check for errors
npm run build

# Clear and rebuild
npm run clean
npm install
npm run build
```

### Contact Form Not Working
1. Check .env file exists and has correct values
2. Verify EmailJS service is active
3. Check browser console for errors
4. Test EmailJS credentials on their website

## Resources

- React Docs: https://react.dev/
- Vite Docs: https://vitejs.dev/
- Tailwind Docs: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/
- EmailJS Docs: https://www.emailjs.com/docs/

---

Keep this file handy for quick reference! 🚀
