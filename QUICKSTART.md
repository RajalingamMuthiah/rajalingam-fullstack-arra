# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ Node.js (v18 or higher) - [Download](https://nodejs.org/)
- ✅ npm (comes with Node.js)
- ✅ Git (optional) - [Download](https://git-scm.com/)
- ✅ Code editor (VSCode recommended) - [Download](https://code.visualstudio.com/)

## 🚀 Installation Steps

### 1. Navigate to Project Directory

```bash
cd "c:\Program Files\.vscode\Portfolio"
```

### 2. Install Dependencies

```bash
npm install
```

⏱️ This will take 1-2 minutes

### 3. Create Environment File

```bash
# Copy the example file
copy .env.example .env
```

### 4. Start Development Server

```bash
npm run dev
```

🎉 Your portfolio should now be running at **http://localhost:3000**

## 🔧 Initial Configuration (5 minutes)

### Step 1: Update Personal Info

Open `src/components/home/Hero.jsx` and update:

- Line 44: Your name
- Lines 66-68: Location, expertise, email
- Lines 75-77: Social media URLs

### Step 2: Setup EmailJS (Optional - for contact form)

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create free account
3. Add email service
4. Create template
5. Copy credentials to `.env` file

**Can skip this for now** - form will still work locally without errors.

### Step 3: Replace Profile Image

- Add your photo to `public/images/profile.jpg`
- Update path in `src/components/home/Hero.jsx` (Lines 115-125)

## 🎨 Quick Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
neon: {
  blue: '#00d9ff',    // Your primary color
  purple: '#a855f7',  // Your secondary color
  pink: '#ec4899',    // Your accent color
}
```

### Update Projects

Edit `src/pages/Projects.jsx` - Add your actual projects

### Update Skills

Edit `src/components/home/Skills.jsx` - Modify your skills

## 📱 View Your Portfolio

Open your browser and visit:

- **Local:** http://localhost:3000
- **Network:** http://192.168.x.x:3000 (shown in terminal)

Test on mobile by visiting the network URL from your phone!

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated your name everywhere
- [ ] Added your profile image
- [ ] Updated social media links
- [ ] Added your projects
- [ ] Updated skills section
- [ ] Tested contact form
- [ ] Checked mobile responsiveness
- [ ] Verified all links work

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Easiest - Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

✨ Live in 2 minutes!

### Option 2: Netlify

1. Build project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag & drop `dist` folder
4. Done!

### Option 3: GitHub Pages

```bash
# Add these to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Then run:
npm install --save-dev gh-pages
npm run deploy
```

## 📚 What's Next?

1. **Customize Everything**
   - Read [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed guide
   - Update all placeholder content with your info
   - Add your actual projects and images

2. **Setup EmailJS**
   - Follow [SETUP.md](SETUP.md) for detailed EmailJS setup
   - Test the contact form

3. **Deploy**
   - Choose deployment platform
   - Connect custom domain (optional)
   - Share your portfolio!

4. **Optimize**
   - Add analytics
   - Update SEO meta tags
   - Add more content

## 🆘 Common Issues

### Port 3000 in use

```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies not installing

```bash
# Clean install:
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Build errors

```bash
# Clear cache and rebuild:
npm run build
```

### Contact form not working

- Don't worry! It needs EmailJS setup
- Works without backend for testing
- Follow SETUP.md for EmailJS configuration

## 💡 Pro Tips

1. **Development**
   - Use `npm run dev` for hot reload
   - Changes reflect instantly!
   - Chrome DevTools is your friend

2. **Before Deploying**
   - Run `npm run build` to test
   - Check for errors in terminal
   - Test production build with `npm run preview`

3. **Performance**
   - Optimize images before adding
   - Keep bundle size small
   - Test on slow connections

## 📖 Documentation

- **README.md** - Project overview
- **SETUP.md** - Detailed setup instructions
- **CUSTOMIZATION.md** - How to customize everything
- **COMMANDS.md** - Developer command reference
- **FEATURES.md** - Complete features list

## 🎯 Your Journey

```
✅ Install dependencies        (You are here!)
→ Customize content           (Next: Edit Hero.jsx)
→ Add your projects          (Update Projects.jsx)
→ Setup EmailJS              (Follow SETUP.md)
→ Test everything            (Check all pages)
→ Deploy                     (Choose platform)
→ Share with world!          (Get feedback)
```

## 🎉 Success!

Your portfolio is now running! Here's what you should see:

- ✨ Animated particle background
- 🎨 Modern dark theme with neon accents
- 📱 Responsive design
- ⚡ Smooth animations
- 🚀 All pages working

## Need Help?

- Check the error in terminal
- Read the documentation
- Search for error messages
- Check browser console (F12)

## 🔗 Useful Commands

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run preview  # Preview production build
```

---

**Ready to make it yours?** Start by editing `src/components/home/Hero.jsx`!

**Questions?** Check out the documentation files in the project root.

**Happy coding!** 🚀✨

---

Made with ❤️ using React, Vite, Tailwind CSS, and Framer Motion
