/* ===============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Interactive Features & Mobile Menu Functionality
   =============================================== */

// ============ MOBILE MENU TOGGLE ============
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(10px, 10px)' : '';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(8px, -8px)' : '';
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            // Reset hamburger icon animation
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });
});

// ============ SMOOTH SCROLL BEHAVIOR ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============ ACTIVE NAV LINK INDICATOR ============
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// ============ FADE IN ANIMATION ON SCROLL ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards, project cards, and other elements
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============ ABOUT SECTION SCROLL ANIMATIONS ============
const aboutObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, delay);
            aboutObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px'
});

// Observe About section text (fade from left)
document.querySelectorAll('.about-text-fade').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-30px)';
    element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    aboutObserver.observe(element);
});

// Observe About section cards (fade from right with staggered delays)
document.querySelectorAll('.about-card-fade').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateX(30px)';
    element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    aboutObserver.observe(element);
});

// ============ SCROLL TO TOP BUTTON ============
// Create scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    display: none;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top on button click
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.6)';
});

scrollToTopBtn.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
});

// ============ INTERACTIVE PROJECT CARDS ============
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Placeholder for project detail page
        console.log('Project link clicked:', this.textContent);
        // You can replace this with actual navigation or modal popup
    });
});

// ============ CONTACT CARD INTERACTIONS ============
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// ============ FORM VALIDATION (if contact form is added) ============
// This is a placeholder for future contact form functionality
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============ PERFORMANCE OPTIMIZATION ============
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Set initial body opacity
document.body.style.opacity = '1';

// ============ AWARD IMAGE MODAL ============
document.addEventListener('DOMContentLoaded', function() {
    const awardItems = document.querySelectorAll('.award-item[data-award-image]');
    const awardModal = document.getElementById('awardModal');
    const awardModalImage = document.getElementById('awardModalImage');
    const closeBtn = document.getElementById('closeAwardModal');

    // Open modal when award item is clicked
    awardItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-award-image');
            awardModalImage.src = imageUrl;
            awardModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            awardModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (awardModal) {
        awardModal.addEventListener('click', function(e) {
            if (e.target === awardModal) {
                awardModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && awardModal.classList.contains('active')) {
            awardModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ============ UTILITY: Log Portfolio Info ============
console.log(
    '%c Welcome to Nishanth\'s Portfolio! ',
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 16px; padding: 10px; border-radius: 5px; font-weight: bold;'
);
console.log('Made with HTML, CSS, and JavaScript');
console.log('Feel free to explore and get in touch!');

// ============ CONTACT FORM HANDLER ============
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate required fields
        if (!fullName || !email || !message) {
            alert('Please fill in all required fields (Name, Email, Message)');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Build email subject and body
        const subject = 'Portfolio Contact - ' + fullName;
        
        const emailBody = `Hello,

I am interested in getting in touch!

Contact Information:
Name: ${fullName}
Email: ${email}

Message:
${message}

---
Sent from Nishanth's Portfolio Website`;
        
        // Create mailto link
        const mailtoLink = `mailto:enishanth29@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Show success message
        alert('Opening your email client to compose the message...');
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const certificateBtn = document.getElementById('certificateBtn');
    const certificateModal = document.getElementById('certificateModal');
    const closeCertificateModal = document.getElementById('closeCertificateModal');
    const slides = document.querySelectorAll('.certificate-slide');
    const certificateDots = document.getElementById('certificateDots');
    const certificateCounter = document.getElementById('certificateCounter');
    const certificateTotal = document.getElementById('certificateTotal');
    const prevBtn = document.getElementById('certPrevBtn');
    const nextBtn = document.getElementById('certNextBtn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    certificateTotal.textContent = totalSlides;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('certificate-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        certificateDots.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.certificate-dot');
    
    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
        });
        
        certificateCounter.textContent = currentSlide + 1;
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlide();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    }
    
    // Open modal
    certificateBtn.addEventListener('click', function() {
        certificateModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        currentSlide = 0;
        updateSlide();
    });
    
    // Close modal
    closeCertificateModal.addEventListener('click', function() {
        certificateModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    certificateModal.addEventListener('click', function(e) {
        if (e.target === certificateModal) {
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!certificateModal.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'Escape') {
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Initialize first slide
    updateSlide();
});
