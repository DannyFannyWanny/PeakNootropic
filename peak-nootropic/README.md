# Peak Nootropic Website

A modern, responsive website for Peak Nootropic - a cognitive enhancement supplement company. This website showcases their products and provides an engaging user experience with smooth animations and interactive elements.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and smooth animations
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Contact form with validation
  - Product card hover effects
  - Notification system
- **Performance Optimized**: Fast loading times with optimized CSS and JavaScript
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Project Structure

```
peak-nootropic/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── images/         # Product and website images
│   ├── fonts/          # Custom fonts (if any)
│   └── icons/          # Website icons and favicon
├── README.md           # Project documentation
├── .gitignore          # Git ignore file
└── robots.txt          # Search engine crawling instructions
```

## Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Installation

1. Clone or download this repository
2. Navigate to the `peak-nootropic` directory
3. Open `index.html` in your web browser

### Local Development Server

For the best development experience, you can run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors and Styling

The website uses a modern color scheme with gradients. You can customize the colors by modifying the CSS variables in `css/styles.css`:

- Primary gradient: `#667eea` to `#764ba2`
- Accent color: `#ffd700` (gold)
- Text colors: `#333` (dark) and `#666` (medium gray)

### Content

- Update product information in `index.html`
- Modify the hero section content
- Add or remove sections as needed
- Update contact information

### Images

Place your product images in the `assets/images/` directory and update the image paths in `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some limitations)

## Features in Detail

### Navigation
- Fixed header with smooth background transition on scroll
- Mobile-responsive hamburger menu
- Smooth scrolling to sections

### Hero Section
- Full-screen gradient background
- Call-to-action button
- Parallax scrolling effect

### Products Section
- Responsive grid layout
- Hover animations
- Product cards with images and descriptions

### Contact Form
- Form validation
- Success/error notifications
- Responsive design

### Animations
- Intersection Observer for scroll-triggered animations
- Smooth transitions and hover effects
- Loading animations

## Performance

The website is optimized for performance with:
- Minimal JavaScript
- Efficient CSS
- Optimized images (when added)
- Fast loading times

## SEO

The website includes:
- Proper meta tags
- Semantic HTML structure
- Descriptive alt text for images
- robots.txt file for search engine crawling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.

---

**Note**: This is a static website template. For production use, you may want to integrate with a backend system for form handling, e-commerce functionality, and content management. 