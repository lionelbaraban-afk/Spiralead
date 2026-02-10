// ===================================
// Spiralead - Interactive Features
// ===================================

// Navigation scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active navigation link
    updateActiveLink();
    
    // Show/hide scroll to top button
    updateScrollTopButton();
    
    // Fade in elements on scroll
    animateOnScroll();
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update active navigation link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Expandable offering details
const expandButtons = document.querySelectorAll('.btn-expand');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const detailsSection = document.getElementById(targetId);
        
        if (detailsSection) {
            detailsSection.classList.toggle('active');
            
            // Update button text
            if (detailsSection.classList.contains('active')) {
                button.textContent = 'Show Less';
            } else {
                button.textContent = 'Learn More';
            }
            
            // Scroll to the card if expanding
            if (detailsSection.classList.contains('active')) {
                setTimeout(() => {
                    const card = button.closest('.offering-card');
                    const cardTop = card.offsetTop - 100;
                    window.scrollTo({
                        top: cardTop,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        organization: document.getElementById('organization').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! Batsheva will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function updateScrollTopButton() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
}

// Fade in animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.offering-card, .benefit-card, .about-grid');
    
    elements.forEach(element => {
        if (!element.classList.contains('fade-in-up')) {
            element.classList.add('fade-in-up');
        }
        
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initial checks on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLink();
    updateScrollTopButton();
    animateOnScroll();
    
    // Add entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});


// Enhanced form validation
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#d87a68';
        } else {
            input.style.borderColor = '';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});

// Email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value) && emailInput.value.trim() !== '') {
            emailInput.style.borderColor = '#d87a68';
        }
    });
}

// Add subtle animation to logo on hover
const logo = document.querySelector('.nav-logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        const logoImg = logo.querySelector('.logo-img');
        if (logoImg) {
            logoImg.style.transition = 'transform 0.5s ease';
            logoImg.style.transform = 'rotate(360deg)';
        }
    });
    
    logo.addEventListener('mouseleave', () => {
        const logoImg = logo.querySelector('.logo-img');
        if (logoImg) {
            logoImg.style.transform = 'rotate(0deg)';
        }
    });
}