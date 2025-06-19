// Peak Nootropic - Main JavaScript

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Countdown Timer
function initCountdown() {
    const launchDate = new Date(PEAK_CONFIG.launchDate).getTime();
    
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const updateCountdown = function() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        if (distance < 0) {
            // Launch date has passed
            countdownElement.innerHTML = 'Now Available!';
            countdownElement.classList.add('text-green-600', 'font-bold');
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Format the countdown display
        let countdownText = '';
        if (days > 0) {
            countdownText = `${days}d ${hours}h until launch`;
        } else if (hours > 0) {
            countdownText = `${hours}h ${minutes}m until launch`;
        } else if (minutes > 0) {
            countdownText = `${minutes}m ${seconds}s until launch`;
        } else {
            countdownText = `${seconds}s until launch`;
        }
        
        countdownElement.innerHTML = countdownText;
    };
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Add loading state
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Processing...';
    button.classList.add('loading');
    button.disabled = true;
    
    // Submit to Formspree (or your backend)
    fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showSuccessMessage('Thank you! You\'ve been added to the waitlist. We\'ll notify you when Peak is available.');
            event.target.reset();
            trackEvent('Form', 'submit', 'waitlist-success');
        } else {
            throw new Error('Submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showErrorMessage('Something went wrong. Please try again or contact us directly.');
        trackEvent('Form', 'error', 'waitlist-error');
    })
    .finally(() => {
        // Reset button
        button.textContent = originalText;
        button.classList.remove('loading');
        button.disabled = false;
    });
}

// Show Success Message
function showSuccessMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'success-message';
    messageElement.textContent = message;
    
    // Find the form and append message
    const form = document.querySelector('form');
    form.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Show Error Message
function showErrorMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'error-message';
    messageElement.textContent = message;
    
    // Find the form and append message
    const form = document.querySelector('form');
    form.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer
    initCountdown();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.getElementById('mobileMenu').classList.add('hidden');
            }
        });
    });
    
    // Navigation scroll effects
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            nav.classList.add('shadow-sm');
        } else {
            nav.classList.remove('shadow-sm');
        }
        
        // Hide/show nav on scroll (optional - comment out if you prefer always visible)
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Analytics Events (placeholder for Google Analytics)
function trackEvent(category, action, label) {
    // Google Analytics 4 implementation
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Console log for development
    console.log('Event tracked:', { category, action, label });
}

// CTA Click Tracking
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('[data-cta]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'click', this.dataset.cta);
        });
    });
    
    // WhatsApp button click tracking
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        // Set WhatsApp URL from configuration
        whatsappButton.href = getWhatsAppURL();
        
        whatsappButton.addEventListener('click', function() {
            trackEvent('Support', 'click', 'whatsapp');
            
            // Optional: Add a small delay to ensure tracking fires before navigation
            setTimeout(() => {
                // The link will navigate naturally
            }, 100);
        });
    }
});

// Escape key to close mobile menu
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('mobileMenu').classList.add('hidden');
    }
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                if (this.value && !validateEmail(this.value)) {
                    this.setCustomValidity('Please enter a valid email address');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
    });
});

// Lazy loading for images (when you add them)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 300px 0px'
    };
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);
    
    images.forEach(img => imageObserver.observe(img));
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
    
    // Track if it's a slow load
    if (loadTime > 3000) {
        trackEvent('Performance', 'slow_load', loadTime);
    }
});

// Handle offline/online status
window.addEventListener('online', function() {
    console.log('Back online');
});

window.addEventListener('offline', function() {
    console.log('Gone offline');
    alert('You appear to be offline. Some features may not work correctly.');
});