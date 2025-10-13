# Youssef Essam - Portfolio Website

A modern, responsive, and animated portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Contact Form**: Interactive contact form with validation
- **Loading Screen**: Animated splash screen with initials
- **Modern UI/UX**: Clean design with hover effects and transitions

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Router DOM** - Client-side routing
- **React Helmet Async** - SEO management
- **EmailJS** - Contact form integration

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact form and info
│   ├── Events.jsx         # Events and conferences
│   ├── Footer.jsx         # Footer with social links
│   ├── Hero.jsx           # Hero section
│   ├── Navbar.jsx         # Navigation bar
│   ├── Portfolio.jsx      # Main portfolio component
│   ├── Projects.jsx       # Projects showcase
│   ├── Skills.jsx         # Skills and technologies
│   ├── SplashScreen.jsx   # Loading screen
│   └── Training.jsx       # Training and certifications
├── contexts/
│   └── ThemeContext.jsx   # Dark/light mode context
├── App.jsx                # Main app component
├── index.css              # Global styles and Tailwind
└── main.tsx               # Entry point
```

## 🎨 Design System

- **Primary Color**: #3B82F6 (blue-500)
- **Fonts**: Poppins, Inter
- **Background (Light)**: #F9FAFB
- **Background (Dark)**: #0F172A
- **Text (Light)**: #111827
- **Text (Dark)**: #F1F5F9

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd videcoding-portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Sections

1. **Splash Screen** - Animated loading screen with initials
2. **Navigation** - Sticky navbar with smooth scrolling
3. **Hero** - Full-screen introduction with call-to-action buttons
4. **About** - Personal information and background
5. **Skills** - Technical skills organized by categories
6. **Projects** - Portfolio projects with links and descriptions
7. **Training** - Educational background and certifications
8. **Events** - Conferences and events attended
9. **Contact** - Contact form and social media links
10. **Footer** - Additional links and information

## 🔧 Customization

### Adding Your Information

1. **Personal Info**: Update the content in each component file
2. **Projects**: Modify the `projects` array in `Projects.jsx`
3. **Skills**: Update the `skillCategories` in `Skills.jsx`
4. **Contact**: Change contact information in `Contact.jsx` and `Footer.jsx`
5. **Images**: Add your profile image and project screenshots

### Styling

- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for global styles
- Component-specific styles use Tailwind classes

### Email Configuration

To enable the contact form:

1. Sign up for EmailJS service
2. Create an email template
3. Update the EmailJS configuration in `Contact.jsx`
4. Add your service ID, template ID, and public key

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Youssef Essam**
- Email: essamy688@gmail.com
- LinkedIn: [linkedin.com/in/YoussefAboElkhir](https://linkedin.com/in/YoussefAboElkhir)
- GitHub: [github.com/Youssefaboelkhir19](https://github.com/Youssefaboelkhir19)

---

Made with ❤️ by Youssef Essam