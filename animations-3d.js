// 3D Animations and Interactive Effects for KR Mangalam StudentFreelance

class Animation3D {
    constructor() {
        this.init();
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.isAnimating = true;
    }

    init() {
        this.createParticles();
        this.setupMouseTracking();
        this.setupScrollAnimations();
        this.setupButtonEffects();
        this.setupCardEffects();
        this.setupModalEffects();
        this.setupBackgroundEffects();
        this.setupLoadingEffects();
        this.startAnimationLoop();
    }

    // Create floating particles
    createParticles() {
        const particleCount = 50;
        const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                z-index: -1;
            `;
            
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(particle);
            this.particles.push({
                element: particle,
                x: parseFloat(particle.style.left),
                y: parseFloat(particle.style.top),
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: parseFloat(particle.style.width)
            });
        }
    }

    // Mouse tracking for 3D effects
    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.updateParallax();
            this.update3DElements(e);
        });

        document.addEventListener('mouseleave', () => {
            this.resetElements();
        });
    }

    // Parallax effect
    updateParallax() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (this.mouseX - centerX) / centerX;
        const moveY = (this.mouseY - centerY) / centerY;

        this.particles.forEach(particle => {
            const translateX = moveX * particle.size * 2;
            const translateY = moveY * particle.size * 2;
            particle.element.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(${particle.size}px)`;
        });
    }

    // Update 3D elements based on mouse position
    update3DElements(e) {
        const cards = document.querySelectorAll('.service-card, .stat, .hero-placeholder');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const angleX = (e.clientY - cardCenterY) * 0.01;
            const angleY = (e.clientX - cardCenterX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`;
        });
    }

    // Reset elements when mouse leaves
    resetElements() {
        const cards = document.querySelectorAll('.service-card, .stat, .hero-placeholder');
        cards.forEach(card => {
            card.style.transform = '';
        });
    }

    // Scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animateable elements
        document.querySelectorAll('.service-card, .stat, .hero-content, .section-header').forEach(el => {
            observer.observe(el);
        });
    }

    // Animate individual element
    animateElement(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) translateZ(-50px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateZ(0)';
        }, 100);
    }

    // Enhanced button effects
    setupButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.createButtonRipple(e, button);
                this.addGlowEffect(button);
            });

            button.addEventListener('mouseleave', () => {
                this.removeGlowEffect(button);
            });

            button.addEventListener('click', (e) => {
                this.createClickEffect(e, button);
            });
        });
    }

    // Create ripple effect on buttons
    createButtonRipple(e, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add glow effect
    addGlowEffect(element) {
        element.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.8), 0 0 60px rgba(79, 172, 254, 0.4)';
        element.style.transform = 'translateZ(25px) scale(1.05)';
    }

    // Remove glow effect
    removeGlowEffect(element) {
        element.style.boxShadow = '';
        element.style.transform = '';
    }

    // Create click effect
    createClickEffect(e, button) {
        const particles = 8;
        const colors = ['#667eea', '#f093fb', '#4facfe'];

        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / particles;
            const velocity = 5 + Math.random() * 5;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
            `;

            document.body.appendChild(particle);

            const animation = particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${Math.cos(angle) * velocity * 20}px, ${Math.sin(angle) * velocity * 20}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0, 0.9, 0.57, 1)'
            });

            animation.onfinish = () => particle.remove();
        }
    }

    // Enhanced card effects
    setupCardEffects() {
        const cards = document.querySelectorAll('.service-card, .stat, .modal-content');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addCard3DEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeCard3DEffect(card);
            });

            card.addEventListener('click', () => {
                this.addCardClickEffect(card);
            });
        });
    }

    // Add 3D effect to cards
    addCard3DEffect(card) {
        card.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(10deg) translateZ(30px)';
        card.style.boxShadow = '0 25px 50px rgba(79, 172, 254, 0.4)';
    }

    // Remove 3D effect from cards
    removeCard3DEffect(card) {
        card.style.transform = '';
        card.style.boxShadow = '';
    }

    // Add click effect to cards
    addCardClickEffect(card) {
        card.style.animation = 'cardClick 0.6s ease';
        setTimeout(() => {
            card.style.animation = '';
        }, 600);
    }

    // Modal effects
    setupModalEffects() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModalWithEffect(modal);
                }
            });
        });
    }

    // Close modal with effect
    closeModalWithEffect(modal) {
        modal.style.animation = 'modalClose 0.3s ease';
        setTimeout(() => {
            modal.classList.remove('active');
            modal.style.animation = '';
        }, 300);
    }

    // Background effects
    setupBackgroundEffects() {
        this.createGradientAnimation();
        this.createFloatingShapes();
    }

    // Create animated gradient background
    createGradientAnimation() {
        const gradient = document.createElement('div');
        gradient.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #667eea, #f093fb, #4facfe, #43e97b);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            opacity: 0.1;
            z-index: -2;
            pointer-events: none;
        `;

        document.body.appendChild(gradient);
    }

    // Create floating shapes
    createFloatingShapes() {
        const shapes = ['circle', 'square', 'triangle'];
        const colors = ['#667eea', '#f093fb', '#4facfe'];

        for (let i = 0; i < 10; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 100 + 50;

            shape.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                opacity: 0.05;
                pointer-events: none;
                z-index: -1;
                animation: floatShape ${Math.random() * 20 + 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;

            if (shapeType === 'circle') {
                shape.style.borderRadius = '50%';
            } else if (shapeType === 'triangle') {
                shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            }

            shape.style.left = Math.random() * window.innerWidth + 'px';
            shape.style.top = Math.random() * window.innerHeight + 'px';

            document.body.appendChild(shape);
        }
    }

    // Loading effects
    setupLoadingEffects() {
        // Add loading spinner styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            @keyframes cardClick {
                0% { transform: scale(1); }
                50% { transform: scale(0.95); }
                100% { transform: scale(1); }
            }

            @keyframes modalClose {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0.8); }
            }

            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            @keyframes floatShape {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                33% { transform: translateY(-30px) rotate(120deg); }
                66% { transform: translateY(30px) rotate(240deg); }
            }

            @keyframes particleFloat {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 0.8; }
                90% { opacity: 0.8; }
                100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Animation loop
    startAnimationLoop() {
        const animate = () => {
            if (this.isAnimating) {
                this.updateParticles();
                this.updateFloatingElements();
                requestAnimationFrame(animate);
            }
        };
        animate();
    }

    // Update particle positions
    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off walls
            if (particle.x <= 0 || particle.x >= window.innerWidth) {
                particle.vx *= -1;
            }
            if (particle.y <= 0 || particle.y >= window.innerHeight) {
                particle.vy *= -1;
            }

            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
    }

    // Update floating elements
    updateFloatingElements() {
        const elements = document.querySelectorAll('.hero-placeholder, .service-icon');
        elements.forEach((element, index) => {
            const time = Date.now() * 0.001;
            const floatY = Math.sin(time + index) * 10;
            const floatX = Math.cos(time + index) * 5;
            const rotate = Math.sin(time + index) * 5;
            
            element.style.transform = `translateY(${floatY}px) translateX(${floatX}px) rotate(${rotate}deg) translateZ(20px)`;
        });
    }

    // Add CSS animations dynamically
    addCSSAnimations() {
        const animations = `
            .hero-title {
                animation: titleFloat 3s ease-in-out infinite;
            }

            .service-icon {
                animation: iconBounce 2s ease-in-out infinite;
            }

            .stat-number {
                animation: numberPop 2s ease-in-out infinite;
            }

            @keyframes titleFloat {
                0%, 100% { transform: translateZ(50px) translateY(0); }
                50% { transform: translateZ(60px) translateY(-10px); }
            }

            @keyframes iconBounce {
                0%, 100% { transform: translateZ(20px) translateY(0); }
                50% { transform: translateZ(30px) translateY(-10px); }
            }

            @keyframes numberPop {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;

        const style = document.createElement('style');
        style.textContent = animations;
        document.head.appendChild(style);
    }

    // Initialize everything
    start() {
        this.addCSSAnimations();
        console.log('🎨 3D Animations initialized!');
    }

    // Stop animations
    stop() {
        this.isAnimating = false;
        this.particles.forEach(particle => particle.element.remove());
        console.log('⏹️ Animations stopped');
    }
}

// Notification system with 3D effects
class Notification3D {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 15px;
            color: white;
            font-weight: 600;
            z-index: 3000;
            transform: translateZ(30px) translateX(100%);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            animation: notificationSlide 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateZ(30px) translateX(0)';
        }, 100);

        // Remove after duration
        setTimeout(() => {
            notification.style.transform = 'translateZ(30px) translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, duration);
    }
}

// Form validation with 3D effects
class FormValidator3D {
    static validate(form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input);
                isValid = false;
            } else {
                this.showSuccess(input);
            }
        });

        return isValid;
    }

    static showError(input) {
        input.style.borderColor = '#dc2626';
        input.style.boxShadow = '0 0 20px rgba(220, 38, 38, 0.5)';
        input.style.animation = 'shake 0.5s';
        
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }

    static showSuccess(input) {
        input.style.borderColor = '#10b981';
        input.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.5)';
    }

    static reset(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }
}

// Loading spinner with 3D effect
class LoadingSpinner3D {
    static show(container) {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner-3d';
        
        spinner.style.cssText = `
            width: 60px;
            height: 60px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid #4facfe;
            border-radius: 50%;
            animation: spin3D 1s linear infinite;
            transform: translateZ(30px);
            margin: 2rem auto;
        `;

        if (container) {
            container.appendChild(spinner);
        } else {
            document.body.appendChild(spinner);
        }

        return spinner;
    }

    static hide(spinner) {
        if (spinner && spinner.parentNode) {
            spinner.parentNode.removeChild(spinner);
        }
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animations = new Animation3D();
    animations.start();
    
    // Override global notification function
    window.showNotification = Notification3D.show;
    
    // Add form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!FormValidator3D.validate(form)) {
                e.preventDefault();
                Notification3D.show('Please fill in all required fields', 'error');
            }
        });
    });

    console.log('🎨 3D Animations and Effects loaded successfully!');
});

// Add CSS for shake animation
const shakeAnimation = document.createElement('style');
shakeAnimation.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes spin3D {
        0% { transform: translateZ(30px) rotateX(0deg) rotateY(0deg); }
        100% { transform: translateZ(30px) rotateX(360deg) rotateY(360deg); }
    }
    
    @keyframes notificationSlide {
        0% { transform: translateZ(30px) translateX(100%); }
        100% { transform: translateZ(30px) translateX(0); }
    }
`;
document.head.appendChild(shakeAnimation);
