# 🎨 3D Image Gallery - HTML/CSS/JS Project

An immersive 3D gallery built with pure HTML, CSS, and JavaScript featuring interactive 3D effects, animations, and a stunning visual experience.

![3D Gallery Preview](https://img.shields.io/badge/3D-Gallery-6c63ff) ![Responsive](https://img.shields.io/badge/Responsive-Yes-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Live Demo
[https://mandar999xxx.github.io/The-html-world-/](#) 

## 📸 Preview
![Gallery Screenshot](https://via.placeholder.com/800x450/6c63ff/ffffff?text=3D+Gallery+Screenshot)

## 🚀 Features

### 🎭 Interactive 3D Elements
- **3D Flipping Cards** - Hover to see 3D flip effect
- **Floating 3D Cube** - Animated rotating cube with CSS 3D transforms
- **3D Pyramid** - Pure CSS pyramid with animation
- **Depth Perception** - Parallax and perspective effects

### 🎨 Visual Design
- **Dark/Light Theme** - Toggle between themes
- **Modern Gradient UI** - Beautiful color gradients
- **Smooth Animations** - CSS transitions and keyframes
- **Responsive Layout** - Works on all device sizes

### ⚡ Interactive Features
- **Image Filtering** - Filter by category (Nature, Space, Abstract, Tech)
- **Modal Popups** - Click images for enlarged view
- **Hover Effects** - Interactive 3D hover transformations
- **Keyboard Shortcuts** - Quick theme toggle and navigation

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - 3D transforms, animations, flexbox, grid
- **JavaScript (ES6)** - Interactive functionality
- **Font Awesome** - Icons
- **Unsplash API** - High-quality images

## 📁 Project Structure
                the-html-world/
            ├── index.html # Main HTML file
            ├── style.css # All styles and 3D effects
            ├── script.js # Interactive JavaScript
            ├── README.md # This documentation
            └── .git/ # Git configuration

---

## 🎯 Key Code Features

### CSS 3D Transforms
```css
/* 3D Card Flip */
.card-inner {
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Floating Cube */
.floating-cube {
    animation: rotateCube 20s infinite linear;
}

// 3D Hover Effect
card.addEventListener('mousemove', (e) => {
    const rotateY = (x - centerX) / 25;
    const rotateX = (centerY - y) / 25;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
            🚀 Getting Started
            Prerequisites
            Modern web browser (Chrome, Firefox, Safari, Edge)

            Code editor (VS Code recommended)

            Basic understanding of HTML/CSS/JS

        Installation
        Clone the repository

        git clone https://github.com/mandar999xxx/The-html-world-.git
        cd The-html-world-



        Open in browser

        Simply open index.html in your browser

        Or use VS Code Live Server extension

        Edit and customize

        Modify style.css for different colors/effects

        Update script.js for new interactions

        Change images in index.html

        🎮 How to Use
        Explore Gallery: Hover over cards to see 3D flip effect

        Filter Images: Click category buttons (Nature, Space, etc.)

        View Details: Click any image for enlarged view

        Toggle Theme: Click moon/sun icon or press 'T' key

        Interact: Move mouse over 3D elements for dynamic effects

        📱 Responsive Design
        Desktop: Full 3D experience with hover effects

        Tablet: Optimized layout, reduced animations

        Mobile: Touch-friendly, simplified interactions

        Accessibility: Keyboard navigation support

        🔧 Customization
        Change Colors
        Edit CSS variables in style.css:

                📚 Learning Resources
        CSS 3D Concepts Used:
        transform-style: preserve-3d

        perspective property

        rotateX(), rotateY(), translateZ()

        backface-visibility

        CSS Grid and Flexbox

        JavaScript Features:
        Event listeners (click, hover, keyboard)

        DOM manipulation

        CSS transforms via JavaScript

        Modal implementation

        🤝 Contributing
        Contributions are welcome! Here's how:

        Fork the repository

        Create a feature branch (git checkout -b feature/AmazingFeature)

        Commit changes (git commit -m 'Add AmazingFeature')

        Push to branch (git push origin feature/AmazingFeature)

        Open a Pull Request

        📄 License
        This project is licensed under the MIT License - see the LICENSE file for details.

        👨‍💻 Author
        Mandar

        GitHub: @mandar999xxx

        Project: The HTML World

        🙏 Acknowledgments
        Images from Unsplash

        Icons from Font Awesome

        Inspiration from modern CSS 3D designs

        Color palette from Coolors

        🌟 Show Your Support
        Give a ⭐️ if you like this project!

        📈 Project Status
        Active Development - Adding more 3D features and optimizations

        🔮 Upcoming Features
        VR/AR compatibility

        3D model integration

        Image upload functionality

        Social sharing features

        Advanced filtering options

        Happy Coding! 🚀 Experience the third dimension on the web!
