// Universal Cosmic Theme Application Script
// Transform any page into a stunning cosmic experience

class CosmicTheme {
    constructor() {
        this.init();
    }

    init() {
        this.applyCosmicStyles();
        this.addCosmicElements();
        this.setupCosmicInteractions();
        this.createCosmicParticles();
        this.setupCosmicMouseTracking();
        this.addCosmicAnimations();
        this.enhanceExistingElements();
        console.log('🌌 Cosmic Theme Applied Successfully!');
    }

    // Apply cosmic styles to existing elements
    applyCosmicStyles() {
        // Update page title
        if (document.title.includes('StudentFreelance')) {
            document.title = document.title.replace('StudentFreelance', 'KR Mangalam StudentFreelance - Cosmic Experience');
        }

        // Add cosmic CSS variables
        const root = document.documentElement;
        root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)');
        root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)');
        root.style.setProperty('--success-gradient', 'linear-gradient(135deg, #06ffa5 0%, #00b4d8 100%)');
        root.style.setProperty('--warning-gradient', 'linear-gradient(135deg, #ffbe0b 0%, #fb5607 100%)');
        root.style.setProperty('--glass-bg', 'rgba(15, 12, 41, 0.7)');
        root.style.setProperty('--glass-border', 'rgba(255, 0, 110, 0.3)');
        root.style.setProperty('--neon-glow-pink', '0 0 20px rgba(255, 0, 110, 0.8)');
        root.style.setProperty('--neon-glow-purple', '0 0 20px rgba(131, 56, 236, 0.8)');
        root.style.setProperty('--neon-glow-blue', '0 0 20px rgba(58, 134, 255, 0.8)');
        root.style.setProperty('--neon-text-shadow', '0 0 10px rgba(255, 0, 110, 0.8)');

        // Change body background
        document.body.style.background = 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)';
        document.body.style.color = '#ffffff';
    }

    // Add cosmic elements to the page
    addCosmicElements() {
        // Add cosmic background
        const cosmicBg = document.createElement('div');
        cosmicBg.className = 'cosmic-background';
        cosmicBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 80%, rgba(255, 0, 110, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(131, 56, 236, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(58, 134, 255, 0.3) 0%, transparent 50%);
            animation: cosmicNebula 30s ease-in-out infinite;
            opacity: 0.3;
            z-index: -2;
            pointer-events: none;
        `;
        document.body.appendChild(cosmicBg);

        // Add star field
        const starField = document.createElement('div');
        starField.className = 'cosmic-starfield';
        starField.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(2px 2px at 20% 30%, white, transparent),
                radial-gradient(2px 2px at 60% 70%, white, transparent),
                radial-gradient(1px 1px at 50% 50%, white, transparent),
                radial-gradient(1px 1px at 80% 10%, white, transparent),
                radial-gradient(2px 2px at 90% 60%, white, transparent);
            background-size: 200% 200%;
            animation: starsMove 100s linear infinite;
            opacity: 0.5;
            z-index: -1;
            pointer-events: none;
        `;
        document.body.appendChild(starField);

        // Add cosmic particles container
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'cosmic-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(particlesContainer);

        // Add cosmic CSS animations
        this.addCosmicAnimations();
    }

    // Add cosmic CSS animations
    addCosmicAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cosmicNebula {
                0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.8; }
                25% { transform: rotate(90deg) scale(1.1); opacity: 0.9; }
                50% { transform: rotate(180deg) scale(1); opacity: 1; }
                75% { transform: rotate(270deg) scale(0.9); opacity: 0.9; }
            }

            @keyframes starsMove {
                0% { transform: translate(0, 0); }
                100% { transform: translate(-100px, -100px); }
            }

            @keyframes cosmicFloat {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                33% { transform: translateY(-30px) rotate(120deg); }
                66% { transform: translateY(30px) rotate(240deg); }
            }

            @keyframes cosmicPulse {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.1); opacity: 1; }
            }

            @keyframes cosmicGlow {
                0%, 100% { box-shadow: var(--neon-glow-pink); }
                50% { box-shadow: 0 0 40px rgba(255, 0, 110, 1); }
            }

            .cosmic-neon-text {
                text-shadow: var(--neon-text-shadow);
                background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: cosmicGradientShift 3s ease infinite;
                background-size: 400% 400%;
            }

            @keyframes cosmicGradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .cosmic-glass {
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                border: 1px solid var(--glass-border);
                box-shadow: 0 8px 32px 0 rgba(255, 0, 110, 0.2);
            }

            .cosmic-3d-card {
                transform-style: preserve-3d;
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .cosmic-3d-card:hover {
                transform: rotateY(15deg) translateZ(50px);
                box-shadow: var(--neon-glow-pink);
                filter: brightness(1.2);
            }

            .cosmic-3d-button {
                transform-style: preserve-3d;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .cosmic-3d-button:hover {
                transform: translateZ(15px) translateY(-3px) rotateX(5deg);
                box-shadow: var(--neon-glow-pink);
                filter: brightness(1.3);
            }

            .cosmic-3d-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                transition: left 0.5s ease;
            }

            .cosmic-3d-button:hover::before {
                left: 100%;
            }
        `;
        document.head.appendChild(style);
    }

    // Setup cosmic interactions
    setupCosmicInteractions() {
        // Enhance navigation
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.add('cosmic-glass');
            navbar.style.cssText += `
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1000;
                transform-style: preserve-3d;
                animation: cosmicSlideDown 1s ease-out;
            `;
        }

        // Enhance nav brand
        const navBrand = document.querySelector('.nav-brand h2');
        if (navBrand) {
            navBrand.classList.add('cosmic-neon-text');
            navBrand.textContent = 'KR Mangalam StudentFreelance';
            navBrand.style.fontFamily = 'Orbitron, monospace';
        }

        // Enhance buttons
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
            btn.classList.add('cosmic-3d-button');
            this.addCosmicButtonEffects(btn);
        });

        // Enhance cards
        document.querySelectorAll('.service-card, .tutor-card, .stat, .creator-card, .marketer-card').forEach(card => {
            card.classList.add('cosmic-3d-card', 'cosmic-glass');
            this.addCosmicCardEffects(card);
        });

        // Enhance modals
        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.classList.add('cosmic-glass');
            modal.style.cssText += `
                transform: translateZ(50px);
                animation: cosmicModalSlideIn 0.5s ease;
            `;
        });

        // Enhance forms
        document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
            input.classList.add('cosmic-glass');
            input.style.cssText += `
                color: white;
                background: rgba(15, 12, 41, 0.7);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 0, 110, 0.3);
                transition: all 0.3s ease;
                font-family: 'Space Grotesk', sans-serif;
            `;

            input.addEventListener('focus', () => {
                input.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.8)';
                input.style.transform = 'translateZ(15px)';
                input.style.background = 'rgba(255, 0, 110, 0.1)';
            });

            input.addEventListener('blur', () => {
                input.style.boxShadow = '';
                input.style.transform = '';
                input.style.background = '';
            });
        });

        // Enhance section headers
        document.querySelectorAll('.section-header h2').forEach(header => {
            header.classList.add('cosmic-neon-text');
            header.style.fontFamily = 'Orbitron, monospace';
        });
    }

    // Add cosmic button effects
    addCosmicButtonEffects(button) {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'cosmicGlow 2s ease-in-out infinite';
        });

        button.addEventListener('mouseleave', () => {
            button.style.animation = '';
        });

        button.addEventListener('click', (e) => {
            this.createCosmicClickParticles(e);
        });
    }

    // Add cosmic card effects
    addCosmicCardEffects(card) {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'cosmicPulse 2s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', () => {
            card.style.animation = '';
        });
    }

    // Create cosmic particles
    createCosmicParticles() {
        const container = document.querySelector('.cosmic-particles');
        const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b'];
        
        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 8 + 2;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                opacity: ${Math.random() * 0.6 + 0.4};
                animation: cosmicFloat ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                filter: blur(${Math.random() * 2}px);
                box-shadow: 0 0 ${size * 2}px ${color};
            `;
            
            container.appendChild(particle);
        }
    }

    // Setup cosmic mouse tracking
    setupCosmicMouseTracking() {
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            this.updateCosmicElements(mouseX, mouseY);
        });

        // Add cosmic parallax effect
        this.addCosmicParallaxEffect();
    }

    // Update cosmic elements based on mouse position
    updateCosmicElements(mouseX, mouseY) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (mouseX - centerX) / centerX;
        const moveY = (mouseY - centerY) / centerY;

        // Update cards
        document.querySelectorAll('.cosmic-3d-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const angleX = (mouseY - cardCenterY) * 0.01;
            const angleY = (mouseX - cardCenterX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`;
            card.style.filter = `brightness(${1 + Math.abs(angleX + angleY) * 0.2})`;
        });

        // Update particles
        document.querySelectorAll('.cosmic-particles > div').forEach((particle, index) => {
            const translateX = moveX * (index % 3 + 1) * 8;
            const translateY = moveY * (index % 3 + 1) * 8;
            particle.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(${index}px)`;
        });
    }

    // Add cosmic parallax effect
    addCosmicParallaxEffect() {
        const bg = document.querySelector('.cosmic-background');
        if (bg) {
            document.addEventListener('mousemove', (e) => {
                const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
                const moveY = (e.clientY / window.innerHeight - 0.5) * 30;
                bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }

    // Add cosmic animations
    addCosmicAnimations() {
        // Animate elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'cosmicSlideIn 0.8s ease forwards';
                }
            });
        }, { threshold: 0.1 });

        // Observe all major elements
        document.querySelectorAll('section, .service-card, .stat, .tutor-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Enhance existing elements
    enhanceExistingElements() {
        // Enhance titles
        document.querySelectorAll('h1, h2, h3').forEach(title => {
            if (!title.classList.contains('cosmic-neon-text')) {
                title.classList.add('cosmic-neon-text');
                if (title.tagName === 'H1' || title.tagName === 'H2') {
                    title.style.fontFamily = 'Orbitron, monospace';
                } else {
                    title.style.fontFamily = 'Space Grotesk, sans-serif';
                }
            }
        });

        // Enhance hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.cssText += `
                background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
                position: relative;
                overflow: hidden;
            `;
        }

        // Enhance stats section
        const stats = document.querySelector('.stats');
        if (stats) {
            stats.style.cssText += `
                background: linear-gradient(135deg, #7209b7 0%, #560bad 50%, #480ca8 100%);
                position: relative;
                overflow: hidden;
            `;
        }

        // Add floating cosmic shapes to hero
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            for (let i = 0; i < 8; i++) {
                const shape = document.createElement('div');
                shape.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 100 + 50}px;
                    height: ${Math.random() * 100 + 50}px;
                    background: rgba(255, 0, 110, 0.1);
                    border-radius: 50%;
                    animation: cosmicFloat ${Math.random() * 15 + 8}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 5}s;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    filter: blur(${Math.random() * 5}px);
                `;
                heroContent.appendChild(shape);
            }
        }

        // Add slide down animation for navbar
        const navbarAnimation = document.createElement('style');
        navbarAnimation.textContent = `
            @keyframes cosmicSlideDown {
                0% { transform: translateY(-100%) rotateX(-90deg); opacity: 0; }
                100% { transform: translateY(0) rotateX(0deg); opacity: 1; }
            }

            @keyframes cosmicSlideIn {
                0% { opacity: 0; transform: translateY(50px) translateZ(-50px) rotateX(15deg); }
                100% { opacity: 1; transform: translateY(0) translateZ(0) rotateX(0deg); }
            }

            @keyframes cosmicModalSlideIn {
                0% { transform: translateZ(50px) translateY(-50px) scale(0.8); opacity: 0; }
                100% { transform: translateZ(50px) translateY(0) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(navbarAnimation);
    }

    // Create cosmic click particles effect
    createCosmicClickParticles(e) {
        const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b'];
        const particles = 10;

        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / particles;
            const velocity = 6 + Math.random() * 8;
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
                    transform: `translate(${Math.cos(angle) * velocity * 25}px, ${Math.sin(angle) * velocity * 25}px) scale(0) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0, 0.9, 0.57, 1)'
            });

            animation.onfinish = () => particle.remove();
        }
    }

    // Apply theme to all links
    enhanceLinks() {
        document.querySelectorAll('a').forEach(link => {
            link.style.cssText += `
                color: white;
                text-decoration: none;
                transition: all 0.3s ease;
                position: relative;
                font-family: 'Space Grotesk', sans-serif;
            `;

            link.addEventListener('mouseenter', () => {
                link.style.textShadow = '0 0 15px rgba(255, 0, 110, 0.8)';
                link.style.transform = 'translateZ(5px)';
                link.style.color = '#ff006e';
            });

            link.addEventListener('mouseleave', () => {
                link.style.textShadow = '';
                link.style.transform = '';
                link.style.color = '';
            });
        });
    }
}

// Auto-apply cosmic theme when script loads
document.addEventListener('DOMContentLoaded', () => {
    const theme = new CosmicTheme();
    
    // Override global notification function with cosmic effects
    window.showNotification = function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `cosmic-notification cosmic-notification-${type}`;
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
        }, 4000);
    };

    // Add notification animation
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes cosmicNotificationSlide {
            0% { transform: translateZ(30px) translateX(100%); }
            100% { transform: translateZ(30px) translateX(0); }
        }
    `;
    document.head.appendChild(notificationStyle);
});

// Export for manual application
window.CosmicTheme = CosmicTheme;
window.applyCosmicTheme = () => new CosmicTheme();

console.log('🌌 Cosmic Theme Script Loaded!');
