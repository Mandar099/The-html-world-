// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const exploreBtn = document.getElementById('exploreBtn');
const filterButtons = document.querySelectorAll('.control-btn');
const cards = document.querySelectorAll('.card-3d');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.querySelector('.close-modal');
const currentYear = document.getElementById('currentYear');
const contactForm = document.querySelector('.contact-form');

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// Explore Button - Scroll to Gallery
exploreBtn.addEventListener('click', () => {
    document.getElementById('gallery').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Gallery Filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || filter === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Card Click for Modal
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open modal if card is flipping
        if (card.querySelector('.card-inner').style.transform === 'rotateY(180deg)') {
            return;
        }
        
        const imgSrc = card.querySelector('img').src;
        const title = card.querySelector('.card-overlay h3').textContent;
        const desc = card.querySelector('.card-overlay p').textContent;
        
        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDesc.textContent = desc + ' - Click and hover for 3D effect!';
        
        modal.style.display = 'flex';
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (!email || !message) {
        alert('Please fill in all fields!');
        return;
    }
    
    // In a real app, you would send this to a server
    alert(`Thank you for your message! We'll get back to you soon.`);
    contactForm.reset();
});

// 3D Hover Effect Enhancement
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        card.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            card.style.transition = '';
        }, 500);
    });
});

// Floating Cube Interaction
const floatingCube = document.getElementById('floatingCube');
floatingCube.addEventListener('mouseenter', () => {
    floatingCube.style.animationPlayState = 'paused';
});

floatingCube.addEventListener('mouseleave', () => {
    floatingCube.style.animationPlayState = 'running';
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
    
    // T for theme toggle
    if (e.key === 't' || e.key === 'T') {
        themeToggle.click();
    }
});