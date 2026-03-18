// Universal 3D Theme Application Script
// Run this script on any page to apply the 3D attractive theme

class Universal3DTheme {
    constructor() {
        this.init();
    }

    init() {
        this.apply3DStyles();
        this.add3DElements();
        this.setup3DInteractions();
        this.create3DParticles();
        this.setupMouseTracking();
        this.add3DAnimations();
        this.enhanceExistingElements();
        console.log('🎨 Universal 3D Theme Applied Successfully!');
    }

    // Apply 3D styles to existing elements
    apply3DStyles() {
        // Update page title
        if (document.title.includes('StudentFreelance')) {
            document.title = document.title.replace('StudentFreelance', 'KR Mangalam StudentFreelance - 3D Experience');
        }

        // Add 3D CSS variables
        const root = document.documentElement;
        root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
        root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--neon-glow', '0 0 20px rgba(102, 126, 234, 0.8)');
        root.style.setProperty('--neon-text-shadow', '0 0 10px rgba(102, 126, 234, 0.8)');
    }

    // Add 3D elements to the page
    add3DElements() {
        // Add 3D background
        const bg = document.createElement('div');
        bg.className = 'universal-3d-bg';
        bg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #667eea, #f093fb, #4facfe, #43e97b);
            background-size: 400% 400%;
            animation: universalGradientMove 15s ease infinite;
            opacity: 0.1;
            z-index: -2;
            pointer-events: none;
        `;
        document.body.appendChild(bg);

        // Add floating particles container
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'universal-particles';
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

        // Add CSS animations
        this.addUniversalAnimations();
    }

    // Add universal CSS animations
    addUniversalAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes universalGradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            @keyframes universalFloat {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                33% { transform: translateY(-30px) rotate(120deg); }
                66% { transform: translateY(30px) rotate(240deg); }
            }

            @keyframes universalPulse {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.1); opacity: 1; }
            }

            @keyframes universalGlow {
                0%, 100% { box-shadow: var(--neon-glow); }
                50% { box-shadow: 0 0 30px rgba(102, 126, 234, 1); }
            }

            .universal-neon-text {
                text-shadow: var(--neon-text-shadow);
                background: linear-gradient(45deg, #667eea, #f093fb, #4facfe, #43e97b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: universalGradientMove 3s ease infinite;
                background-size: 400% 400%;
            }

            .universal-glass {
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                border: 1px solid var(--glass-border);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            }

            .universal-3d-card {
                transform-style: preserve-3d;
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .universal-3d-card:hover {
                transform: rotateY(15deg) translateZ(50px);
                box-shadow: var(--neon-glow);
            }

            .universal-3d-button {
                transform-style: preserve-3d;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .universal-3d-button:hover {
                transform: translateZ(15px) translateY(-3px) rotateX(5deg);
                box-shadow: var(--neon-glow);
            }

            .universal-3d-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                transition: left 0.5s ease;
            }

            .universal-3d-button:hover::before {
                left: 100%;
            }
        `;
        document.head.appendChild(style);
    }

    // Setup 3D interactions
    setup3DInteractions() {
        // Enhance navigation
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.add('universal-glass');
            navbar.style.cssText += `
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1000;
                transform-style: preserve-3d;
                animation: universalSlideDown 1s ease-out;
            `;
        }

        // Enhance nav brand
        const navBrand = document.querySelector('.nav-brand h2');
        if (navBrand) {
            navBrand.classList.add('universal-neon-text');
            navBrand.textContent = 'KR Mangalam StudentFreelance';
        }

        // Enhance buttons
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
            btn.classList.add('universal-3d-button');
            this.addButtonEffects(btn);
        });

        // Enhance cards
        document.querySelectorAll('.service-card, .tutor-card, .stat, .creator-card, .marketer-card').forEach(card => {
            card.classList.add('universal-3d-card', 'universal-glass');
            this.addCardEffects(card);
        });

        // Enhance modals
        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.classList.add('universal-glass');
            modal.style.cssText += `
                transform: translateZ(50px);
                animation: universalModalSlideIn 0.5s ease;
            `;
        });

        // Enhance forms
        document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
            input.classList.add('universal-glass');
            input.style.cssText += `
                color: white;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;
            `;

            input.addEventListener('focus', () => {
                input.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.5)';
                input.style.transform = 'translateZ(15px)';
            });

            input.addEventListener('blur', () => {
                input.style.boxShadow = '';
                input.style.transform = '';
            });
        });
    }

    // Add button effects
    addButtonEffects(button) {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'universalGlow 2s ease-in-out infinite';
        });

        button.addEventListener('mouseleave', () => {
            button.style.animation = '';
        });

        button.addEventListener('click', (e) => {
            this.createClickParticles(e);
        });
    }

    // Add card effects
    addCardEffects(card) {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'universalPulse 2s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', () => {
            card.style.animation = '';
        });
    }

    // Create 3D particles
    create3DParticles() {
        const container = document.querySelector('.universal-particles');
        const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 6 + 2;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: universalFloat ${Math.random() * 15 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            container.appendChild(particle);
        }
    }

    // Setup mouse tracking for 3D effects
    setupMouseTracking() {
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            this.update3DElements(mouseX, mouseY);
        });

        // Add parallax effect
        this.addParallaxEffect();
    }

    // Update 3D elements based on mouse position
    update3DElements(mouseX, mouseY) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (mouseX - centerX) / centerX;
        const moveY = (mouseY - centerY) / centerY;

        // Update cards
        document.querySelectorAll('.universal-3d-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const angleX = (mouseY - cardCenterY) * 0.01;
            const angleY = (mouseX - cardCenterX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`;
        });

        // Update particles
        document.querySelectorAll('.universal-particles > div').forEach((particle, index) => {
            const translateX = moveX * (index % 3 + 1) * 5;
            const translateY = moveY * (index % 3 + 1) * 5;
            particle.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(${index}px)`;
        });
    }

    // Add parallax effect
    addParallaxEffect() {
        const bg = document.querySelector('.universal-3d-bg');
        if (bg) {
            document.addEventListener('mousemove', (e) => {
                const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
                const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
                bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }

    // Add 3D animations
    add3DAnimations() {
        // Animate elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'universalSlideIn 0.8s ease forwards';
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
            if (!title.classList.contains('universal-neon-text')) {
                title.classList.add('universal-neon-text');
            }
        });

        // Enhance hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.cssText += `
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                position: relative;
                overflow: hidden;
            `;
        }

        // Enhance stats section
        const stats = document.querySelector('.stats');
        if (stats) {
            stats.style.cssText += `
                background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
                position: relative;
                overflow: hidden;
            `;
        }

        // Add floating shapes to hero
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            for (let i = 0; i < 5; i++) {
                const shape = document.createElement('div');
                shape.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 100 + 50}px;
                    height: ${Math.random() * 100 + 50}px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    animation: universalFloat ${Math.random() * 10 + 5}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 5}s;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
                heroContent.appendChild(shape);
            }
        }

        // Add slide down animation for navbar
        const navbarAnimation = document.createElement('style');
        navbarAnimation.textContent = `
            @keyframes universalSlideDown {
                0% { transform: translateY(-100%) rotateX(-90deg); opacity: 0; }
                100% { transform: translateY(0) rotateX(0deg); opacity: 1; }
            }

            @keyframes universalSlideIn {
                0% { opacity: 0; transform: translateY(50px) translateZ(-50px); }
                100% { opacity: 1; transform: translateY(0) translateZ(0); }
            }

            @keyframes universalModalSlideIn {
                0% { transform: translateZ(50px) translateY(-50px) scale(0.8); opacity: 0; }
                100% { transform: translateZ(50px) translateY(0) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(navbarAnimation);
    }

    // Create click particles effect
    createClickParticles(e) {
        const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b'];
        const particles = 8;

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

    // Apply theme to all links
    enhanceLinks() {
        document.querySelectorAll('a').forEach(link => {
            link.style.cssText += `
                color: white;
                text-decoration: none;
                transition: all 0.3s ease;
                position: relative;
            `;

            link.addEventListener('mouseenter', () => {
                link.style.textShadow = '0 0 10px rgba(79, 172, 254, 0.8)';
                link.style.transform = 'translateZ(5px)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.textShadow = '';
                link.style.transform = '';
            });
        });
    }
}

// Auto-apply theme when script loads
document.addEventListener('DOMContentLoaded', () => {
    const theme = new Universal3DTheme();
    
    // Override global notification function with 3D effects
    window.showNotification = function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `universal-notification universal-notification-${type}`;
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
            animation: universalNotificationSlide 0.3s ease;
            background: ${type === 'success' ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : 
                     type === 'error' ? 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' : 
                     'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'};
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
        }, 3000);
    };

    // Add notification animation
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes universalNotificationSlide {
            0% { transform: translateZ(30px) translateX(100%); }
            100% { transform: translateZ(30px) translateX(0); }
        }
    `;
    document.head.appendChild(notificationStyle);
});

// Export for manual application
window.Universal3DTheme = Universal3DTheme;
window.apply3DTheme = () => new Universal3DTheme();

console.log('🎨 Universal 3D Theme Script Loaded!');
