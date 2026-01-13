/* ==========================================
   RAJESH KUMAR PANDA - PORTFOLIO SCRIPTS
   Tech Stack: Pure HTML, CSS, JavaScript
   ========================================== */

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initNavigation();
    initParticles();
    initSkillsTabs();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
});

/* ==========================================
   NAVIGATION
   ========================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
    });
    
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(8, 12, 20, 0.95)';
        } else {
            navbar.style.background = 'rgba(13, 19, 32, 0.6)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = '#00d4ff';
                } else {
                    navLink.style.color = '';
                }
            }
        });
    });
}

/* ==========================================
   PARTICLES ANIMATION
   ========================================== */
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    container.appendChild(particle);
}

/* ==========================================
   SKILLS TABS
   ========================================== */
function initSkillsTabs() {
    const tabs = document.querySelectorAll('.skill-tab');
    const panels = document.querySelectorAll('.skill-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetId) {
                    panel.classList.add('active');
                    // Re-animate skill bars
                    animateSkillBars(panel);
                }
            });
        });
    });
    
    // Initial animation for visible panel
    const activePanel = document.querySelector('.skill-panel.active');
    if (activePanel) {
        animateSkillBars(activePanel);
    }
}

function animateSkillBars(panel) {
    const fills = panel.querySelectorAll('.fill');
    fills.forEach(fill => {
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = fill.style.getPropertyValue('--width');
        }, 100);
    });
}

/* ==========================================
   CONTACT FORM
   ========================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
        const mailtoLink = `mailto:rajeshkumarpanda857@gmail.com?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        
        // Show success feedback
        showToast('Opening email client...');
        
        // Reset form
        form.reset();
    });
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #00d4ff, #0099cc);
        color: #080c14;
        padding: 16px 32px;
        border-radius: 12px;
        font-weight: 500;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll(
        '.section-header, .about-content, .highlight-card, .timeline-item, ' +
        '.project-card, .pub-stat, .publication-card, .cert-card, .award-card, ' +
        '.contact-item, .contact-form'
    );
    
    revealElements.forEach(el => el.classList.add('reveal'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================
   TYPING EFFECT (OPTIONAL ENHANCEMENT)
   ========================================== */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ==========================================
   PROJECT CARD TILT EFFECT
   ========================================== */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

/* ==========================================
   CONSOLE EASTER EGG
   ========================================== */
console.log('%c👋 Hello, Recruiter!', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #f1f5f9;');
console.log('%c📧 rajeshkumarpanda857@gmail.com', 'font-size: 12px; color: #94a3b8;');
console.log('%c🔗 linkedin.com/in/rajeshkumarpanda', 'font-size: 12px; color: #94a3b8;');
