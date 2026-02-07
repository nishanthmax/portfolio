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
document.addEventListener('DOMContentLoaded', function() {
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
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

    // ============ PROJECTS SECTION SCROLL ANIMATIONS ============
    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe project items (fade from bottom with staggered delays)
    document.querySelectorAll('.project-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        projectObserver.observe(element);
    });

    // ============ ACHIEVEMENTS SECTION SCROLL ANIMATIONS ============
    const achievementObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe achievement items (fade from left with staggered delays)
    document.querySelectorAll('.achievement-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-30px)';
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        achievementObserver.observe(element);
    });

    // ============ GENERIC SCROLL REVEAL (HERO, CERTIFICATES, CONTACT, HEADINGS) ============
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });
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
    const awardItems = document.querySelectorAll('.award-item[data-award-image], .award-item[data-award-images]');
    const experienceItems = document.querySelectorAll('.experience-item[data-experience-image]');
    const awardModal = document.getElementById('awardModal');
    const awardModalImage = document.getElementById('awardModalImage');
    const closeBtn = document.getElementById('closeAwardModal');
    
    let currentImages = [];
    let currentImageIndex = 0;

    // Open modal when award item is clicked
    awardItems.forEach(item => {
        item.addEventListener('click', function() {
            // Check if it's a single image or multiple images
            const singleImage = this.getAttribute('data-award-image');
            const multipleImages = this.getAttribute('data-award-images');
            
            if (multipleImages) {
                // Parse the JSON array of images
                currentImages = JSON.parse(multipleImages);
                currentImageIndex = 0;
            } else if (singleImage) {
                currentImages = [singleImage];
                currentImageIndex = 0;
            }
            
            // Display the first image
            if (currentImages.length > 0) {
                awardModalImage.src = currentImages[currentImageIndex];
                awardModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Add navigation controls if multiple images
                updateNavigationControls();
            }
        });
    });
    
    // Open modal when experience item is clicked
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-experience-image');
            if (imageUrl) {
                currentImages = [imageUrl];
                currentImageIndex = 0;
                awardModalImage.src = imageUrl;
                awardModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                updateNavigationControls();
            }
        });
    });
    
    // Update navigation controls visibility
    function updateNavigationControls() {
        const modalContent = document.querySelector('.award-modal-content');
        
        // Remove existing controls
        const existingPrev = modalContent.querySelector('.award-nav-prev');
        const existingNext = modalContent.querySelector('.award-nav-next');
        const existingCounter = modalContent.querySelector('.award-counter');
        
        if (existingPrev) existingPrev.remove();
        if (existingNext) existingNext.remove();
        if (existingCounter) existingCounter.remove();
        
        if (currentImages.length > 1) {
            // Add previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'award-nav-prev';
            prevBtn.innerHTML = '❮';
            prevBtn.onclick = () => navigateImage(-1);
            modalContent.appendChild(prevBtn);
            
            // Add next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'award-nav-next';
            nextBtn.innerHTML = '❯';
            nextBtn.onclick = () => navigateImage(1);
            modalContent.appendChild(nextBtn);
            
            // Add counter
            const counter = document.createElement('div');
            counter.className = 'award-counter';
            counter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
            modalContent.appendChild(counter);
        }
    }
    
    // Navigate between images
    function navigateImage(direction) {
        currentImageIndex += direction;
        
        // Loop around
        if (currentImageIndex < 0) {
            currentImageIndex = currentImages.length - 1;
        } else if (currentImageIndex >= currentImages.length) {
            currentImageIndex = 0;
        }
        
        awardModalImage.src = currentImages[currentImageIndex];
        
        // Update counter
        const counter = document.querySelector('.award-counter');
        if (counter) {
            counter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
        }
    }

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

    // Close modal with Escape key, navigate with arrow keys
    document.addEventListener('keydown', function(e) {
        if (awardModal && awardModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                awardModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else if (e.key === 'ArrowLeft' && currentImages.length > 1) {
                navigateImage(-1);
            } else if (e.key === 'ArrowRight' && currentImages.length > 1) {
                navigateImage(1);
            }
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
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button to prevent multiple submissions
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span><span>⏳</span>';
        
        // Prepare form data
        const formData = new FormData(contactForm);
        
        // Send to Formspree
        fetch('https://formspree.io/f/mpqlwyna', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                successMessage.classList.remove('hidden');
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Submitting via standard form.');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            // Fallback to native form submit (improves mobile compatibility)
            contactForm.submit();
        });
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
    // ============ CONTACT SECTION SCROLL ANIMATIONS ============
    const contactObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe contact items (fade from bottom with staggered delays)
    document.querySelectorAll('.contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        contactObserver.observe(element);
    });

    // ============ SMOOTH SCROLL TO SECTION (NAV LINKS) ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || !document.querySelector(href)) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

});
