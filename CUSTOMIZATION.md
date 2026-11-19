# Customization Guide

## Quick Customization Checklist

### 1. Personal Brand (5 minutes)

#### Update Your Name and Logo
- **File**: `src/components/home/Hero.jsx` (Line 44)
- **File**: `src/components/layout/Navbar.jsx` (Line 63-66)
- Change "Your Name" to your actual name
- Update "YN" logo to your initials

#### Update Contact Information
- **File**: `src/components/home/Hero.jsx` (Lines 66-70)
- **File**: `src/pages/Contact.jsx` (Lines 14-29)
- Update email address
- Update location
- Update phone number

#### Social Media Links
- **File**: `src/components/home/Hero.jsx` (Lines 75-77)
- **File**: `src/components/layout/Footer.jsx` (Lines 11-14)
- Replace with your GitHub, LinkedIn, Instagram URLs

### 2. Visual Identity (10 minutes)

#### Profile Picture
- **File**: `src/components/home/Hero.jsx` (Lines 115-125)
- Replace emoji with your actual photo
- Recommended size: 400x400px
- Place in `public/images/profile.jpg`

```jsx
<img 
  src="/images/profile.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

#### Brand Colors
- **File**: `tailwind.config.js` (Lines 9-18)
- Change neon colors to match your brand

```javascript
neon: {
  blue: '#00d9ff',    // Your primary color
  purple: '#a855f7',  // Your secondary color
  pink: '#ec4899',    // Your accent color
}
```

### 3. Content (30 minutes)

#### Hero Section
- **File**: `src/components/home/Hero.jsx`
- Update typing text (Line 18)
- Update skills badges (Lines 20-27)
- Update info cards (Lines 29-33)

#### About Page
- **File**: `src/pages/About.jsx`
- Write your bio (Lines 50-60)
- Update stats (Lines 15-18)
- Update interests (Lines 37-45)

#### Skills
- **File**: `src/components/home/Skills.jsx`
- Update skill categories (Lines 11-44)
- Update proficiency percentages
- Update tech stack (Lines 47-62)

#### Projects
- **File**: `src/pages/Projects.jsx`
- Replace sample projects (Lines 10-75)
- Add your actual project details
- Update images, links, and descriptions

#### Resume
- **File**: `src/pages/Resume.jsx`
- Update experience (Lines 10-44)
- Update education (Lines 47-61)
- Update skills (Lines 64-69)
- Resume PDF lives at `public/Rajalingam-Muthiah-AI-Engineer-Resume.pdf`; its path is set in `src/data/portfolio.js` (`profile.resume`)

#### Certificates
- **File**: `src/pages/Certificates.jsx`
- Add your certificates (Lines 10-65)
- Update images and credential URLs

### 4. Images (15 minutes)

Create an `images` folder in `public/`:
```
public/
└── images/
    ├── profile.jpg          (400x400px)
    ├── projects/
    │   ├── project1.jpg     (800x600px)
    │   ├── project2.jpg
    │   └── ...
    ├── gallery/
    │   ├── photo1.jpg       (800x600px)
    │   └── ...
    └── certificates/
        ├── cert1.jpg        (800x600px)
        └── ...
```

Update image paths throughout the components.

### 5. SEO & Meta Tags (5 minutes)

#### HTML Meta Tags
- **File**: `index.html` (Lines 5-16)
- Update title, description, keywords
- Update Open Graph tags

```html
<title>Your Name | AI/ML Developer</title>
<meta name="description" content="Your custom description" />
<meta name="author" content="Your Name" />
```

### 6. EmailJS Setup (10 minutes)

Follow SETUP.md for detailed EmailJS configuration.

Quick steps:
1. Create EmailJS account
2. Add email service
3. Create template
4. Copy credentials to `.env`

### 7. Footer (2 minutes)

- **File**: `src/components/layout/Footer.jsx`
- Update copyright name (Line 56)
- Update quick links if needed (Lines 31-34)

## Advanced Customization

### Adding New Sections

1. Create component in `src/components/`
2. Import in page file
3. Add to the page JSX

Example:
```jsx
// src/components/home/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      {/* Your content */}
    </section>
  );
};

export default Testimonials;
```

### Adding New Pages

1. Create page in `src/pages/`
2. Import in `App.jsx`
3. Add route

```jsx
// App.jsx
import NewPage from './pages/NewPage';

// Inside Routes
<Route path="/newpage" element={<NewPage />} />
```

4. Add to navigation in `Navbar.jsx`

### Changing Animations

- **File**: `tailwind.config.js` (Lines 35-70)
- Modify animation timing and keyframes

```javascript
animation: {
  'glow': 'glow 2s ease-in-out infinite alternate',
  'custom': 'customAnimation 3s ease-in-out infinite',
},
keyframes: {
  customAnimation: {
    '0%': { /* start state */ },
    '100%': { /* end state */ },
  }
}
```

### Customizing Particle Background

- **File**: `src/components/common/ParticlesBackground.jsx`
- Adjust particle count (Line 60)
- Change colors (Line 43-45)
- Modify speed (Line 55)

### Adding Blog CMS

To integrate with a headless CMS:

1. Install CMS SDK (Contentful, Sanity, etc.)
2. Create API utility
3. Fetch data in Blog component
4. Map data to existing card structure

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Color Schemes

### Preset 1: Blue & Purple (Current)
```javascript
neon: {
  blue: '#00d9ff',
  purple: '#a855f7',
  pink: '#ec4899',
}
```

### Preset 2: Green & Teal
```javascript
neon: {
  blue: '#00ffc6',
  purple: '#00d9ff',
  pink: '#4ade80',
}
```

### Preset 3: Orange & Red
```javascript
neon: {
  blue: '#f97316',
  purple: '#ef4444',
  pink: '#fb923c',
}
```

## Typography

### Using Different Fonts

1. Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
  display: ['YourDisplayFont', 'sans-serif'],
}
```

## Testing Your Customizations

1. **Visual Testing**
   - Check all pages
   - Test responsive design
   - Verify animations work

2. **Functional Testing**
   - Test contact form
   - Check all links
   - Test navigation

3. **Performance Testing**
   - Run Lighthouse audit
   - Check load times
   - Optimize images

## Tips for Best Results

✅ **Do:**
- Keep it simple and clean
- Use high-quality images
- Maintain consistent spacing
- Test on multiple devices
- Optimize for performance

❌ **Don't:**
- Overuse animations
- Use too many colors
- Add unnecessary features
- Forget mobile optimization
- Skip testing

## Need Help?

- Check README.md for general info
- Review SETUP.md for installation
- Look at component comments
- Check existing code examples

Happy customizing! 🎨
