# 🚀 AI/ML Developer Portfolio

A premium, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a dark aesthetic with neon blue/purple accents, advanced animations, and glassmorphism effects.

![Portfolio Preview](https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop)

## ✨ Features

- 🎨 **Modern Dark Theme** - Black background with neon blue/purple glow effects
- ✨ **Advanced Animations** - Smooth Framer Motion animations and transitions
- 🎯 **Fully Responsive** - Works perfectly on all devices
- 🔥 **Glassmorphism UI** - Modern glass effect cards and components
- 🌟 **Particle Background** - Interactive particle animation
- 📱 **Mobile Navigation** - Smooth hamburger menu with animations
- 📧 **EmailJS Integration** - Working contact form with validation
- 🎭 **Page Transitions** - Smooth route transitions with AnimatePresence
- 🌓 **Theme Toggle** - Dark/Light mode support
- ⚡ **Optimized Performance** - Code splitting and lazy loading
- 🎬 **Micro-interactions** - Hover effects and UI feedback
- 📊 **Project Showcase** - Modal previews with filtering
- 🎓 **Certificates Section** - Filterable certificate gallery
- 📸 **Gallery with Lightbox** - Image gallery with zoom functionality
- 📝 **Blog Section** - Article cards with featured posts
- 📄 **Resume Page** - Downloadable resume with experience timeline
- 👤 **About Page** - Personal information and stats

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **EmailJS** - Email service integration
- **React Toastify** - Toast notifications
- **React Particles** - Particle background effect
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── PageTransition.jsx
│   │   │   ├── ParticlesBackground.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── ProjectsPreview.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Gallery.jsx
│   │   ├── Certificates.jsx
│   │   ├── Blog.jsx
│   │   ├── Resume.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and set up an email service
   - Create an email template
   - Copy your Service ID, Template ID, and Public Key

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information

1. **Update Hero Section** - `src/components/home/Hero.jsx`
   - Change your name
   - Update profile image
   - Modify skills and info cards
   - Update social links

2. **Update Projects** - `src/pages/Projects.jsx`
   - Add your project details
   - Update images and descriptions
   - Add GitHub and demo links

3. **Update Skills** - `src/components/home/Skills.jsx`
   - Customize skill categories
   - Update proficiency levels
   - Modify tech stack

4. **Update Resume** - `src/pages/Resume.jsx`
   - Add your experience
   - Update education
   - Modify skills section

5. **Update About** - `src/pages/About.jsx`
   - Write your bio
   - Update stats
   - Modify interests

### Styling

All colors and styling are configured in `tailwind.config.js`. Key color variables:

```javascript
colors: {
  neon: {
    blue: '#00d9ff',
    purple: '#a855f7',
    pink: '#ec4899',
  },
  dark: {
    bg: '#0f0f0f',
    card: '#1a1a1a',
    border: '#2a2a2a',
  }
}
```

### Fonts

The project uses **Inter** and **Poppins** fonts from Google Fonts. You can change them in `index.html` and `tailwind.config.js`.

## 📧 EmailJS Setup

### Creating EmailJS Template

1. Go to EmailJS dashboard
2. Create a new email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name

Example template:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}
```

## 🚀 Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Drag and drop `dist` folder to Netlify
3. Configure environment variables

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🎯 Performance Optimization

- ✅ Code splitting with dynamic imports
- ✅ Image lazy loading
- ✅ Optimized animations
- ✅ Minimal bundle size
- ✅ Tree shaking
- ✅ CSS purging with Tailwind

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for images

## 📸 Screenshots

### Home Page
![Home](https://via.placeholder.com/800x400)

### Projects
![Projects](https://via.placeholder.com/800x400)

### Contact
![Contact](https://via.placeholder.com/800x400)

---

⭐ Star this repo if you find it helpful!

Made with ❤️ and React
