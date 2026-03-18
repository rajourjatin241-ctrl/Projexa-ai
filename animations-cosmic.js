// Cosmic Theme Animations and Interactive Effects for KR Mangalam StudentFreelance

class CosmicAnimations {
    constructor() {
        this.init();
        this.particles = [];
        this.stars = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.isAnimating = true;
        this.cosmicColors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b'];
    }

    init() {
        this.createCosmicParticles();
        this.createStarField();
        this.setupCosmicMouseTracking();
        this.setupCosmicScrollAnimations();
        this.setupCosmicButtonEffects();
        this.setupCosmicCardEffects();
        this.setupCosmicModalEffects();
        this.setupCosmicBackgroundEffects();
        this.setupCosmicLoadingEffects();
        this.startCosmicAnimationLoop();
    }

    // Create cosmic particles
    createCosmicParticles() {
        const particleCount = 40;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'cosmic-particle';
            const color = this.cosmicColors[Math.floor(Math.random() * this.cosmicColors.length)];
            const size = Math.random() * 8 + 2;
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                opacity: ${Math.random() * 0.6 + 0.4};
                animation: cosmicParticleFloat ${Math.random() * 15 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                z-index: -1;
                filter: blur(${Math.random() * 2}px);
                box-shadow: 0 0 ${size * 2}px ${color};
            `;
            
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(particle);
            this.particles.push({
                element: particle,
                x: parseFloat(particle.style.left),
                y: parseFloat(particle.style.top),
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                size: parseFloat(particle.style.width),
                color: color,
                glow: size * 2
            });
        }
    }

    // Create star field background
    createStarField() {
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 3 + 1;
            const twinkle = Math.random() * 3 + 1;
            
            star.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                opacity: ${Math.random() * 0.8 + 0.2};
                animation: cosmicTwinkle ${twinkle}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
                z-index: -2;
                box-shadow: 0 0 ${size * 3}px white;
            `;
            
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(star);
            this.stars.push({
                element: star,
                x: parseFloat(star.style.left),
                y: parseFloat(star.style.top),
                size: parseFloat(star.style.width),
                twinkle: twinkle
            });
        }
    }

    // Cosmic mouse tracking
    setupCosmicMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.updateCosmicParallax();
            this.updateCosmicElements(e);
            this.createCosmicTrail(e);
        });

        document.addEventListener('mouseleave', () => {
            this.resetCosmicElements();
        });
    }

    // Cosmic parallax effect
    updateCosmicParallax() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (this.mouseX - centerX) / centerX;
        const moveY = (this.mouseY - centerY) / centerY;

        // Update particles with parallax
        this.particles.forEach((particle, index) => {
            const translateX = moveX * particle.size * 3;
            const translateY = moveY * particle.size * 3;
            const rotate = Math.sin(Date.now() * 0.001 + index) * 5;
            
            particle.element.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(${particle.size}px) rotate(${rotate}deg)`;
        });

        // Update stars with parallax
        this.stars.forEach((star, index) => {
            const translateX = moveX * star.size * 2;
            const translateY = moveY * star.size * 2;
            
            star.element.style.transform = `translate(${translateX}px, ${translateY}px) scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.2})`;
        });
    }

    // Update cosmic elements based on mouse position
    updateCosmicElements(e) {
        const cards = document.querySelectorAll('.service-card, .stat, .hero-placeholder');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const angleX = (e.clientY - cardCenterY) * 0.01;
            const angleY = (e.clientX - cardCenterX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(30px)`;
            card.style.filter = `brightness(${1 + Math.abs(angleX + angleY) * 0.2})`;
        });
    }

    // Create cosmic trail effect
    createCosmicTrail(e) {
        if (Math.random() > 0.9) { // Create trail occasionally
            const trail = document.createElement('div');
            const color = this.cosmicColors[Math.floor(Math.random() * this.cosmicColors.length)];
            
            trail.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                opacity: 0.8;
                box-shadow: 0 0 10px ${color};
            `;

            document.body.appendChild(trail);

            const animation = trail.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 0.8
                },
                { 
                    transform: 'translate(0, 20px) scale(0)',
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'ease-out'
            });

            animation.onfinish = () => trail.remove();
        }
    }

    // Reset cosmic elements when mouse leaves
    resetCosmicElements() {
        const cards = document.querySelectorAll('.service-card, .stat, .hero-placeholder');
        cards.forEach(card => {
            card.style.transform = '';
            card.style.filter = '';
        });
    }

    // Cosmic scroll animations
    setupCosmicScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCosmicElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animateable elements
        document.querySelectorAll('.service-card, .stat, .hero-content, .section-header').forEach(el => {
            observer.observe(el);
        });
    }

    // Animate cosmic element
    animateCosmicElement(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) translateZ(-50px) rotateX(15deg)';
        
        setTimeout(() => {
            element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateZ(0) rotateX(0deg)';
            element.style.filter = 'brightness(1.2)';
            
            setTimeout(() => {
                element.style.filter = '';
            }, 500);
        }, 100);
    }

    // Enhanced cosmic button effects
    setupCosmicButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.createCosmicButtonRipple(e, button);
                this.addCosmicGlowEffect(button);
            });

            button.addEventListener('mouseleave', () => {
                this.removeCosmicGlowEffect(button);
            });

            button.addEventListener('click', (e) => {
                this.createCosmicClickEffect(e, button);
            });
        });
    }

    // Create cosmic ripple effect on buttons
    createCosmicButtonRipple(e, button) {
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
            background: radial-gradient(circle, rgba(255, 0, 110, 0.5), transparent);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: cosmicRipple 0.8s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 800);
    }

    // Add cosmic glow effect
    addCosmicGlowEffect(element) {
        element.style.boxShadow = '0 0 40px rgba(255, 0, 110, 0.8), 0 0 80px rgba(255, 0, 110, 0.4)';
        element.style.transform = 'translateZ(25px) scale(1.05)';
        element.style.filter = 'brightness(1.3)';
    }

    // Remove cosmic glow effect
    removeCosmicGlowEffect(element) {
        element.style.boxShadow = '';
        element.style.transform = '';
        element.style.filter = '';
    }

    // Create cosmic click effect
    createCosmicClickEffect(e, button) {
        const particles = 12;
        const colors = this.cosmicColors;

        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / particles;
            const velocity = 8 + Math.random() * 8;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                box-shadow: 0 0 15px ${color};
            `;

            document.body.appendChild(particle);

            const animation = particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translate(${Math.cos(angle) * velocity * 30}px, ${Math.sin(angle) * velocity * 30}px) scale(0) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0, 0.9, 0.57, 1)'
            });

            animation.onfinish = () => particle.remove();
        }
    }

    // Enhanced cosmic card effects
    setupCosmicCardEffects() {
        const cards = document.querySelectorAll('.service-card, .stat, .modal-content');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addCosmicCard3DEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeCosmicCard3DEffect(card);
            });

            card.addEventListener('click', () => {
                this.addCosmicCardClickEffect(card);
            });
        });
    }

    // Add cosmic 3D effect to cards
    addCosmicCard3DEffect(card) {
        card.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(15deg) translateZ(40px)';
        card.style.boxShadow = '0 30px 60px rgba(255, 0, 110, 0.5)';
        card.style.filter = 'brightness(1.2)';
    }

    // Remove cosmic 3D effect from cards
    removeCosmicCard3DEffect(card) {
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.filter = '';
    }

    // Add cosmic click effect to cards
    addCosmicCardClickEffect(card) {
        card.style.animation = 'cosmicCardClick 0.8s ease';
        setTimeout(() => {
            card.style.animation = '';
        }, 800);
    }

    // Cosmic modal effects
    setupCosmicModalEffects() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeCosmicModalWithEffect(modal);
                }
            });
        });
    }

    // Close modal with cosmic effect
    closeCosmicModalWithEffect(modal) {
        modal.style.animation = 'cosmicModalClose 0.4s ease';
        setTimeout(() => {
            modal.classList.remove('active');
            modal.style.animation = '';
        }, 400);
    }

    // Cosmic background effects
    setupCosmicBackgroundEffects() {
        this.createCosmicNebula();
        this.createCosmicShapes();
        this.createCosmicGrid();
    }

    // Create animated cosmic nebula
    createCosmicNebula() {
        const nebula = document.createElement('div');
        nebula.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 80%, rgba(255, 0, 110, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(131, 56, 236, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(58, 134, 255, 0.3) 0%, transparent 50%);
            animation: cosmicNebulaRotate 30s linear infinite;
            opacity: 0.3;
            z-index: -3;
            pointer-events: none;
        `;

        document.body.appendChild(nebula);
    }

    // Create floating cosmic shapes
    createCosmicShapes() {
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        const colors = this.cosmicColors;

        for (let i = 0; i < 12; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 120 + 60;

            shape.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                opacity: 0.05;
                pointer-events: none;
                z-index: -1;
                animation: cosmicShapeFloat ${Math.random() * 25 + 15}s ease-in-out infinite;
                animation-delay: ${Math.random() * 10}s;
                filter: blur(${size / 20}px);
            `;

            if (shapeType === 'circle') {
                shape.style.borderRadius = '50%';
            } else if (shapeType === 'triangle') {
                shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            } else if (shapeType === 'hexagon') {
                shape.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            }

            shape.style.left = Math.random() * window.innerWidth + 'px';
            shape.style.top = Math.random() * window.innerHeight + 'px';

            document.body.appendChild(shape);
        }
    }

    // Create cosmic grid background
    createCosmicGrid() {
        const grid = document.createElement('div');
        grid.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255, 0, 110, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: cosmicGridMove 20s linear infinite;
            opacity: 0.2;
            z-index: -2;
            pointer-events: none;
        `;

        document.body.appendChild(grid);
    }

    // Cosmic loading effects
    setupCosmicLoadingEffects() {
        // Add cosmic loading spinner styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cosmicRipple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            @keyframes cosmicCardClick {
                0% { transform: scale(1); filter: brightness(1); }
                25% { transform: scale(0.95); filter: brightness(1.3); }
                50% { transform: scale(1.05); filter: brightness(1.5); }
                75% { transform: scale(0.98); filter: brightness(1.2); }
                100% { transform: scale(1); filter: brightness(1); }
            }

            @keyframes cosmicModalClose {
                0% { opacity: 1; transform: scale(1); filter: brightness(1); }
                100% { opacity: 0; transform: scale(0.8) rotateX(15deg); filter: brightness(0.5); }
            }

            @keyframes cosmicNebulaRotate {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.1); }
                100% { transform: rotate(360deg) scale(1); }
            }

            @keyframes cosmicShapeFloat {
                0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
                33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
                66% { transform: translateY(30px) rotate(240deg) scale(0.9); }
            }

            @keyframes cosmicGridMove {
                0% { transform: translate(0, 0); }
                100% { transform: translate(50px, 50px); }
            }

            @keyframes cosmicParticleFloat {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 0.8; }
                90% { opacity: 0.8; }
                100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
            }

            @keyframes cosmicTwinkle {
                0%, 100% { opacity: 0.2; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }

    // Cosmic animation loop
    startCosmicAnimationLoop() {
        const animate = () => {
            if (this.isAnimating) {
                this.updateCosmicParticles();
                this.updateCosmicStars();
                this.updateCosmicFloatingElements();
                requestAnimationFrame(animate);
            }
        };
        animate();
    }

    // Update cosmic particle positions
    updateCosmicParticles() {
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

            // Add some randomness
            particle.vx += (Math.random() - 0.5) * 0.1;
            particle.vy += (Math.random() - 0.5) * 0.1;

            // Limit velocity
            particle.vx = Math.max(-3, Math.min(3, particle.vx));
            particle.vy = Math.max(-3, Math.min(3, particle.vy));

            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            particle.element.style.boxShadow = `0 0 ${particle.glow}px ${particle.color}`;
        });
    }

    // Update cosmic stars
    updateCosmicStars() {
        this.stars.forEach((star, index) => {
            const time = Date.now() * 0.001;
            const twinkle = Math.sin(time * star.twinkle + index) * 0.5 + 0.5;
            star.element.style.opacity = twinkle * 0.8 + 0.2;
            star.element.style.transform = `scale(${twinkle * 0.3 + 0.9})`;
        });
    }

    // Update floating elements
    updateCosmicFloatingElements() {
        const elements = document.querySelectorAll('.hero-placeholder, .service-icon, .stat-number');
        elements.forEach((element, index) => {
            const time = Date.now() * 0.001;
            const floatY = Math.sin(time + index) * 15;
            const floatX = Math.cos(time + index) * 8;
            const rotate = Math.sin(time + index) * 8;
            
            element.style.transform = `translateY(${floatY}px) translateX(${floatX}px) rotate(${rotate}deg) translateZ(20px)`;
        });
    }

    // Add cosmic CSS animations dynamically
    addCosmicCSSAnimations() {
        const animations = `
            .hero-title {
                animation: cosmicTitleFloat 4s ease-in-out infinite;
            }

            .service-icon {
                animation: cosmicIconBounce 3s ease-in-out infinite;
            }

            .stat-number {
                animation: cosmicNumberPop 2.5s ease-in-out infinite;
            }

            @keyframes cosmicTitleFloat {
                0%, 100% { transform: translateZ(50px) translateY(0); filter: brightness(1); }
                50% { transform: translateZ(60px) translateY(-15px); filter: brightness(1.3); }
            }

            @keyframes cosmicIconBounce {
                0%, 100% { transform: translateZ(20px) translateY(0) rotate(0deg); }
                50% { transform: translateZ(30px) translateY(-12px) rotate(180deg); }
            }

            @keyframes cosmicNumberPop {
                0%, 100% { transform: scale(1); filter: brightness(1); }
                50% { transform: scale(1.15); filter: brightness(1.4); }
            }
        `;

        const style = document.createElement('style');
        style.textContent = animations;
        document.head.appendChild(style);
    }

    // Initialize everything
    start() {
        this.addCosmicCSSAnimations();
        console.log('🌌 Cosmic Animations initialized!');
    }

    // Stop animations
    stop() {
        this.isAnimating = false;
        this.particles.forEach(particle => particle.element.remove());
        this.stars.forEach(star => star.element.remove());
        console.log('🌌 Cosmic animations stopped');
    }
}

// Cosmic notification system with enhanced effects
class CosmicNotification {
    static show(message, type = 'info', duration = 4000) {
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
            box-shadow: 0 10px 25px rgba(255, 0, 110, 0.3);
            animation: cosmicNotificationSlide 0.4s ease;
            font-family: 'Space Grotesk', sans-serif;
            backdrop-filter: blur(10px);
        `;

        // Set background based on type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #06ffa5 0%, #00b4d8 100%)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #ffbe0b 0%, #fb5607 100%)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #ff006e 0%, #8338ec 100%)';
        }

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
            }, 400);
        }, duration);
    }
}

// Cosmic form validation with enhanced effects
class CosmicFormValidator {
    static validate(form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showCosmicError(input);
                isValid = false;
            } else {
                this.showCosmicSuccess(input);
            }
        });

        return isValid;
    }

    static showCosmicError(input) {
        input.style.borderColor = '#ff006e';
        input.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.8)';
        input.style.animation = 'cosmicShake 0.6s';
        input.style.background = 'rgba(255, 0, 110, 0.1)';
        
        setTimeout(() => {
            input.style.animation = '';
        }, 600);
    }

    static showCosmicSuccess(input) {
        input.style.borderColor = '#06ffa5';
        input.style.boxShadow = '0 0 30px rgba(6, 255, 165, 0.8)';
        input.style.background = 'rgba(6, 255, 165, 0.1)';
    }

    static reset(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        input.style.background = '';
    }
}

// Cosmic loading spinner with enhanced effects
class CosmicLoadingSpinner {
    static show(container) {
        const spinner = document.createElement('div');
        spinner.className = 'cosmic-loading-spinner';
        
        spinner.style.cssText = `
            width: 80px;
            height: 80px;
            border: 3px solid rgba(255, 0, 110, 0.3);
            border-top: 3px solid #ff006e;
            border-radius: 50%;
            animation: cosmicSpin 1s linear infinite;
            transform: translateZ(30px);
            margin: 2rem auto;
            box-shadow: 0 0 30px rgba(255, 0, 110, 0.8);
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

// Initialize cosmic animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animations = new CosmicAnimations();
    animations.start();
    
    // Override global notification function
    window.showNotification = CosmicNotification.show;
    
    // Add cosmic form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!CosmicFormValidator.validate(form)) {
                e.preventDefault();
                CosmicNotification.show('Please fill in all required fields', 'error');
            }
        });
    });

    console.log('🌌 Cosmic Animations and Effects loaded successfully!');
});

// Add cosmic CSS for shake animation
const cosmicAnimations = document.createElement('style');
cosmicAnimations.textContent = `
    @keyframes cosmicShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-15px) rotateZ(-5deg); }
        75% { transform: translateX(15px) rotateZ(5deg); }
    }
    
    @keyframes cosmicSpin {
        0% { transform: translateZ(30px) rotateX(0deg) rotateY(0deg); }
        100% { transform: translateZ(30px) rotateX(360deg) rotateY(360deg); }
    }
    
    @keyframes cosmicNotificationSlide {
        0% { transform: translateZ(30px) translateX(100%); }
        100% { transform: translateZ(30px) translateX(0); }
    }
`;
document.head.appendChild(cosmicAnimations);
