# ContribAI Landing Page

A modern, minimalist landing page for ContribAI — a decentralized education token built on Solana. This project features an AI-inspired, futuristic design with Web3/cryptocurrency vibes.

## 🎨 Design Features

- **Dark Theme**: Deep blues and teals with orange accents
- **AI-Inspired**: Geometric shapes, animated network nodes, and subtle glow effects
- **Responsive**: Mobile-friendly design that works on all devices
- **Modern UI**: Clean typography with gradient text effects and smooth transitions
- **Web3 Aesthetics**: Blockchain-inspired visual elements and cryptocurrency styling

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contribai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── BackgroundAnimation.js  # Floating geometric shapes
│   ├── Hero.js                 # Main hero section
│   ├── About.js                # About section
│   ├── HowItWorks.js           # Three-step process
│   ├── Tokenomics.js           # Token details and distribution
│   └── Footer.js               # Footer with links and contact
├── App.js                      # Main app component
├── index.js                    # React entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🎯 Page Sections

### 1. Hero Section
- Logo placeholder with gradient background
- Main headline: "Empowering Global Education with Blockchain & AI"
- Tagline and call-to-action button
- Animated scroll indicator

### 2. About Section
- Introduction to ContribAI
- Three feature highlights (Decentralized, AI-Powered, Global Community)
- Glassmorphism design with backdrop blur

### 3. How It Works
- Three illustrated steps with icons
- Connection lines between steps
- Call-to-action for getting started

### 4. Tokenomics
- Token details (Supply, Decimals, Mint Address)
- Supply distribution chart (placeholder)
- Solana blockchain benefits

### 5. Footer
- Contact information
- Social media placeholders (disabled)
- Quick navigation links
- Copyright information

## 🛠️ Customization

### Colors
The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  'ai-blue': '#0ea5e9',
  'ai-teal': '#14b8a6',
  'ai-orange': '#f97316',
  'ai-dark': '#0f172a',
  'ai-darker': '#020617',
  'ai-light': '#e0f2fe',
  'ai-glow': '#38bdf8',
}
```

### Content Updates
- **Logo**: Replace the placeholder "C" in Hero.js and Footer.js with your actual logo
- **Contact Email**: Update the email address in Footer.js
- **Social Media**: Enable and update social media links in Footer.js
- **Token Details**: Update token information in Tokenomics.js
- **Images**: Add actual images to replace placeholder graphics

### Animations
Custom animations are defined in `tailwind.config.js`:
- `float`: Floating animation for background elements
- `glow`: Pulsing glow effect
- `pulse-slow`: Slow pulse animation

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

## 🎨 Design System

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Gradient Text**: Applied to main headlines

### Components
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Gradient Borders**: Subtle colored borders with opacity
- **Hover Effects**: Scale transforms and color transitions
- **Glow Effects**: Box shadows with brand colors

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 📝 Future Enhancements

### Recommended Updates
1. **Real Logo**: Replace placeholder with actual ContribAI logo
2. **Actual Images**: Add real screenshots and graphics
3. **Interactive Chart**: Implement a real pie chart for tokenomics
4. **Social Media**: Enable and connect actual social media accounts
5. **Analytics**: Add Google Analytics or similar tracking
6. **SEO**: Optimize meta tags and structured data
7. **Performance**: Implement lazy loading and image optimization

### Technical Improvements
1. **TypeScript**: Convert to TypeScript for better type safety
2. **Testing**: Add unit tests with Jest and React Testing Library
3. **Accessibility**: Improve ARIA labels and keyboard navigation
4. **PWA**: Add service worker for offline functionality
5. **Internationalization**: Add multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, contact: info@contribai.com

---

**Note**: This is a placeholder landing page. Replace all placeholder content with actual ContribAI information before going live. 