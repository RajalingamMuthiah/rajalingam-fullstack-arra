# Setup Guide for AI/ML Portfolio

This guide will help you set up and customize your portfolio website.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS

#### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

#### Step 2: Add Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Note down your Service ID

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up your template:

**Template Name:** Portfolio Contact Form

**Subject:** New message from {{from_name}} - {{subject}}

**Content:**
```
You have a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save and note down your Template ID

#### Step 4: Get Public Key
1. Go to "Account" tab
2. Find your Public Key
3. Copy it

#### Step 5: Update Environment Variables
Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Customize Content

#### Personal Information

**File: `src/components/home/Hero.jsx`**
- Line 44: Update your name
- Line 66: Update location, expertise, email
- Line 75-77: Update social media links
- Line 115-125: Replace emoji with your profile picture

**File: `src/pages/About.jsx`**
- Update your bio and description
- Modify stats (years of experience, projects, etc.)
- Update interests and values

**File: `src/pages/Resume.jsx`**
- Add your work experience
- Update education details
- Modify skills section

#### Projects

**File: `src/pages/Projects.jsx`**
Replace the sample projects with your actual projects:

```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Short description',
  fullDescription: 'Detailed description',
  image: 'path/to/image.jpg',
  tags: ['Tech1', 'Tech2'],
  category: 'ai' or 'web',
  github: 'https://github.com/yourusername/project',
  demo: 'https://project-demo.com',
  featured: true,
}
```

#### Skills

**File: `src/components/home/Skills.jsx`**
Update skill categories and proficiency levels.

#### Certificates

**File: `src/pages/Certificates.jsx`**
Add your actual certificates with images and credential URLs.

#### Images

Replace placeholder images:
1. Add your photos to `public/images/`
2. Update image paths throughout components
3. Recommended images:
   - Profile photo: 400x400px
   - Project screenshots: 800x600px
   - Certificate images: 800x600px

### 4. Colors and Branding

**File: `tailwind.config.js`**

Update brand colors:
```javascript
colors: {
  neon: {
    blue: '#00d9ff',    // Change to your primary color
    purple: '#a855f7',  // Change to your secondary color
    pink: '#ec4899',    // Change to your accent color
  }
}
```

**File: `src/components/layout/Navbar.jsx`**
- Line 63-66: Update logo initials (e.g., "YN" to your initials)

### 5. SEO Optimization

**File: `index.html`**
Update meta tags:
- Title
- Description
- Keywords
- Author name
- Open Graph tags

### 6. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables in project settings
5. Deploy

### Option 2: Netlify

1. Build project: `npm run build`
2. Go to https://netlify.com
3. Drag and drop `dist` folder
4. Add environment variables in site settings

### Option 3: GitHub Pages

See README.md for detailed instructions.

## Common Issues

### EmailJS Not Working
- Check environment variables are set correctly
- Verify EmailJS service is active
- Check browser console for errors
- Ensure template variables match

### Images Not Loading
- Use absolute paths from `public/` folder
- Check image file names and extensions
- Ensure images are in correct directory

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build --force`
- Check for missing dependencies

## Production Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Add real projects
- [ ] Configure EmailJS
- [ ] Test contact form
- [ ] Update social media links
- [ ] Add resume PDF to public folder
- [ ] Update SEO meta tags
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up analytics (optional)

## Performance Tips

1. Optimize images:
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. Lazy load components:
   ```javascript
   const Component = lazy(() => import('./Component'));
   ```

3. Minimize bundle size:
   - Remove unused dependencies
   - Use production build

## Support

If you encounter issues:
1. Check the README.md
2. Review this setup guide
3. Check browser console for errors
4. Verify all dependencies are installed

## Next Steps

1. Customize the design to match your brand
2. Add more sections if needed
3. Integrate Google Analytics
4. Set up custom domain
5. Share your portfolio!

---

Good luck with your portfolio! 🚀
