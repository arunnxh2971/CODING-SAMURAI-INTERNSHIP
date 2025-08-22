// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Header background change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Active navigation highlight
    const sections2 = document.querySelectorAll('section');
    const navLinks2 = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections2.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks2.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
        });
    });
    
    // Welcome message
    console.log('🎉 Welcome to my portfolio! Thanks for visiting.');
    
    // Contact form validation (if you add a contact form later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle entrance animation
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }, 100);
});
