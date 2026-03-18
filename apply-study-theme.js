// Universal Study Theme Application Script
// Transform any page into a clean, academic-focused study environment

class StudyTheme {
    constructor() {
        this.init();
    }

    init() {
        this.applyStudyStyles();
        this.addStudyElements();
        this.setupStudyInteractions();
        this.addStudyFeatures();
        this.enhanceExistingElements();
        console.log('📚 Study Theme Applied Successfully!');
    }

    // Apply study styles to existing elements
    applyStudyStyles() {
        // Update page title
        if (document.title.includes('StudentFreelance')) {
            document.title = document.title.replace('StudentFreelance', 'KR Mangalam StudentFreelance - Study Platform');
        }

        // Add study CSS variables
        const root = document.documentElement;
        root.style.setProperty('--primary-color', '#2c3e50');
        root.style.setProperty('--secondary-color', '#3498db');
        root.style.setProperty('--accent-color', '#e74c3c');
        root.style.setProperty('--success-color', '#27ae60');
        root.style.setProperty('--warning-color', '#f39c12');
        root.style.setProperty('--light-bg', '#ecf0f1');
        root.style.setProperty('--white', '#ffffff');
        root.style.setProperty('--text-primary', '#2c3e50');
        root.style.setProperty('--text-secondary', '#7f8c8d');
        root.style.setProperty('--text-muted', '#bdc3c7');
        root.style.setProperty('--border-light', '#dfe6e9');
        root.style.setProperty('--border-medium', '#bdc3c7');
        root.style.setProperty('--shadow-light', '0 2px 4px rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--shadow-medium', '0 4px 6px rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--shadow-heavy', '0 10px 20px rgba(0, 0, 0, 0.1)');

        // Change body background
        document.body.style.background = '#f8f9fa';
        document.body.style.color = '#2c3e50';
        document.body.style.fontFamily = 'Inter, sans-serif';
        document.body.style.lineHeight = '1.6';
    }

    // Add study elements to the page
    addStudyElements() {
        // Add study background
        const studyBg = document.createElement('div');
        studyBg.className = 'study-background';
        studyBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(236, 240, 241, 0.9) 0%, rgba(189, 195, 199, 0.9) 100%);
            z-index: -1;
            pointer-events: none;
        `;
        document.body.appendChild(studyBg);

        // Add study CSS animations
        this.addStudyAnimations();
    }

    // Add study CSS animations
    addStudyAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes studySlideIn {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }

            @keyframes studyFadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            @keyframes studyPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }

            .study-clean-text {
                font-family: 'Inter', sans-serif;
                color: #2c3e50;
                line-height: 1.6;
            }

            .study-card {
                background: #ffffff;
                border: 1px solid #dfe6e9;
                border-radius: 12px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }

            .study-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
                border-color: #3498db;
            }

            .study-button {
                background: #3498db;
                color: white;
                border: none;
                border-radius: 8px;
                padding: 12px 24px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: 'Inter', sans-serif;
            }

            .study-button:hover {
                background: #2980b9;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }

            .study-button-secondary {
                background: white;
                color: #2c3e50;
                border: 2px solid #dfe6e9;
            }

            .study-button-secondary:hover {
                border-color: #3498db;
                color: #3498db;
            }

            .study-heading {
                font-family: 'Merriweather', serif;
                color: #2c3e50;
                font-weight: 700;
            }

            .study-subtitle {
                color: #7f8c8d;
                font-weight: 500;
            }

            .study-progress-bar {
                background: #ecf0f1;
                border-radius: 8px;
                height: 8px;
                overflow: hidden;
            }

            .study-progress-fill {
                background: linear-gradient(90deg, #3498db, #2ecc71);
                height: 100%;
                border-radius: 8px;
                transition: width 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }

    // Setup study interactions
    setupStudyInteractions() {
        // Enhance navigation
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            navbar.style.borderBottom = '1px solid #dfe6e9';
        }

        // Enhance nav brand
        const navBrand = document.querySelector('.nav-brand h2');
        if (navBrand) {
            navBrand.style.fontFamily = 'Merriweather, serif';
            navBrand.style.color = '#2c3e50';
            navBrand.textContent = 'KR Mangalam StudentFreelance';
        }

        // Enhance buttons
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
            btn.classList.add('study-button');
            if (btn.classList.contains('btn-secondary')) {
                btn.classList.add('study-button-secondary');
            }
            this.addStudyButtonEffects(btn);
        });

        // Enhance cards
        document.querySelectorAll('.service-card, .tutor-card, .stat, .creator-card, .marketer-card').forEach(card => {
            card.classList.add('study-card');
            this.addStudyCardEffects(card);
        });

        // Enhance modals
        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.style.background = '#ffffff';
            modal.style.borderRadius = '16px';
            modal.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });

        // Enhance forms
        document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
            input.style.background = '#ffffff';
            input.style.border = '2px solid #dfe6e9';
            input.style.borderRadius = '8px';
            input.style.color = '#2c3e50';
            input.style.fontFamily = 'Inter, sans-serif';

            input.addEventListener('focus', () => {
                input.style.borderColor = '#3498db';
                input.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
            });

            input.addEventListener('blur', () => {
                input.style.borderColor = '#dfe6e9';
                input.style.boxShadow = '';
            });
        });

        // Enhance section headers
        document.querySelectorAll('.section-header h2').forEach(header => {
            header.classList.add('study-heading');
        });

        // Enhance text elements
        document.querySelectorAll('p, span, div').forEach(element => {
            if (!element.style.fontFamily) {
                element.classList.add('study-clean-text');
            }
        });
    }

    // Add study button effects
    addStudyButtonEffects(button) {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });

        button.addEventListener('click', (e) => {
            this.createStudyClickEffect(e, button);
        });
    }

    // Add study card effects
    addStudyCardEffects(card) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    }

    // Create study click effect
    createStudyClickEffect(e, button) {
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
            background: rgba(52, 152, 219, 0.3);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: studyRipple 0.6s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add study features
    addStudyFeatures() {
        this.addStudyModeToggle();
        this.addFocusModeToggle();
        this.addDarkModeToggle();
        this.addReadingModeToggle();
        this.addProgressBar();
        this.addFontControls();
    }

    // Add study mode toggle
    addStudyModeToggle() {
        const studyToggle = document.createElement('button');
        studyToggle.innerHTML = '📚 Study Mode';
        studyToggle.className = 'study-button study-mode-toggle';
        studyToggle.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
            background: #27ae60;
        `;
        
        studyToggle.addEventListener('click', () => {
            this.toggleStudyMode();
        });
        
        document.body.appendChild(studyToggle);
    }

    // Add focus mode toggle
    addFocusModeToggle() {
        const focusToggle = document.createElement('button');
        focusToggle.innerHTML = '🎯 Focus Mode';
        focusToggle.className = 'study-button focus-mode-toggle';
        focusToggle.style.cssText = `
            position: fixed;
            top: 130px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
            background: #e74c3c;
        `;
        
        focusToggle.addEventListener('click', () => {
            this.toggleFocusMode();
        });
        
        document.body.appendChild(focusToggle);
    }

    // Add dark mode toggle
    addDarkModeToggle() {
        const darkToggle = document.createElement('button');
        darkToggle.innerHTML = '🌙 Dark Mode';
        darkToggle.className = 'study-button dark-mode-toggle';
        darkToggle.style.cssText = `
            position: fixed;
            top: 180px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
            background: '#34495e';
        `;
        
        darkToggle.addEventListener('click', () => {
            this.toggleDarkMode();
        });
        
        document.body.appendChild(darkToggle);
    }

    // Add reading mode toggle
    addReadingModeToggle() {
        const readingToggle = document.createElement('button');
        readingToggle.innerHTML = '📖 Reading Mode';
        readingToggle.className = 'study-button reading-mode-toggle';
        readingToggle.style.cssText = `
            position: fixed;
            top: 230px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
            background: #9b59b6;
        `;
        
        readingToggle.addEventListener('click', () => {
            this.toggleReadingMode();
        });
        
        document.body.appendChild(readingToggle);
    }

    // Toggle study mode
    toggleStudyMode() {
        document.body.classList.toggle('study-mode-active');
        
        if (document.body.classList.contains('study-mode-active')) {
            // Mute colors and animations
            document.querySelectorAll('*').forEach(el => {
                if (el.style.animation) {
                    el.style.animationDuration = '0.1s';
                }
            });
            
            // Add calm overlay
            const studyOverlay = document.createElement('div');
            studyOverlay.className = 'study-overlay';
            studyOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(236, 240, 241, 0.95);
                z-index: 999;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(studyOverlay);
            
            setTimeout(() => {
                studyOverlay.style.opacity = '1';
            }, 100);
            
            this.showNotification('Study Mode Enabled - Distractions minimized', 'success');
        } else {
            // Restore animations
            document.querySelectorAll('*').forEach(el => {
                if (el.style.animationDuration === '0.1s') {
                    el.style.animationDuration = '';
                }
            });
            
            // Remove overlay
            const studyOverlay = document.querySelector('.study-overlay');
            if (studyOverlay) {
                studyOverlay.style.opacity = '0';
                setTimeout(() => {
                    studyOverlay.remove();
                }, 300);
            }
            
            this.showNotification('Study Mode Disabled', 'info');
        }
    }

    // Toggle focus mode
    toggleFocusMode() {
        document.body.classList.toggle('focus-mode-active');
        
        if (document.body.classList.contains('focus-mode-active')) {
            // Hide distractions
            const distractions = document.querySelectorAll('.hero-buttons, .footer, .nav-menu');
            distractions.forEach(el => {
                el.style.display = 'none';
            });
            
            // Center content
            const mainContent = document.querySelector('.hero-content, .services-grid');
            if (mainContent) {
                mainContent.style.maxWidth = '800px';
                mainContent.style.margin = '0 auto';
            }
            
            this.showNotification('Focus Mode Enabled - Maximum concentration', 'success');
        } else {
            // Show distractions
            const distractions = document.querySelectorAll('.hero-buttons, .footer, .nav-menu');
            distractions.forEach(el => {
                el.style.display = '';
            });
            
            // Restore layout
            const mainContent = document.querySelector('.hero-content, .services-grid');
            if (mainContent) {
                mainContent.style.maxWidth = '';
                mainContent.style.margin = '';
            }
            
            this.showNotification('Focus Mode Disabled', 'info');
        }
    }

    // Toggle dark mode
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            // Apply dark mode styles
            document.documentElement.style.setProperty('--text-primary', '#ecf0f1');
            document.documentElement.style.setProperty('--text-secondary', '#bdc3c7');
            document.documentElement.style.setProperty('--card-bg', '#2c3e50');
            document.documentElement.style.setProperty('--light-bg', '#34495e');
            document.documentElement.style.setProperty('--border-light', '#4a5f7a');
            document.documentElement.style.setProperty('--white', '#2c3e50');
            document.documentElement.style.setProperty('--reading-bg', '#1a252f');
            
            document.body.style.background = '#1a252f';
            document.body.style.color = '#ecf0f1';
            
            // Update elements
            document.querySelectorAll('.study-card, .navbar, .modal-content').forEach(el => {
                el.style.background = '#2c3e50';
                el.style.color = '#ecf0f1';
                el.style.borderColor = '#4a5f7a';
            });
            
            this.showNotification('Dark Mode Enabled', 'success');
        } else {
            // Restore light mode
            document.documentElement.style.setProperty('--text-primary', '#2c3e50');
            document.documentElement.style.setProperty('--text-secondary', '#7f8c8d');
            document.documentElement.style.setProperty('--card-bg', '#ffffff');
            document.documentElement.style.setProperty('--light-bg', '#ecf0f1');
            document.documentElement.style.setProperty('--border-light', '#dfe6e9');
            document.documentElement.style.setProperty('--white', '#ffffff');
            document.documentElement.style.setProperty('--reading-bg', '#f8f9fa');
            
            document.body.style.background = '#f8f9fa';
            document.body.style.color = '#2c3e50';
            
            // Update elements
            document.querySelectorAll('.study-card, .navbar, .modal-content').forEach(el => {
                el.style.background = '#ffffff';
                el.style.color = '#2c3e50';
                el.style.borderColor = '#dfe6e9';
            });
            
            this.showNotification('Dark Mode Disabled', 'info');
        }
    }

    // Toggle reading mode
    toggleReadingMode() {
        document.body.classList.toggle('reading-mode-active');
        
        if (document.body.classList.contains('reading-mode-active')) {
            // Enhance reading experience
            document.body.style.fontSize = '1.1rem';
            document.body.style.lineHeight = '1.8';
            document.body.style.maxWidth = '800px';
            document.body.style.margin = '0 auto';
            document.body.style.padding = '2rem';
            
            this.showNotification('Reading Mode Enhanced', 'success');
        } else {
            // Restore normal view
            document.body.style.fontSize = '';
            document.body.style.lineHeight = '';
            document.body.style.maxWidth = '';
            document.body.style.margin = '';
            document.body.style.padding = '';
            
            this.showNotification('Reading Mode Disabled', 'info');
        }
    }

    // Add progress bar
    addProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'study-progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #3498db, #2ecc71);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (window.scrollY / scrollHeight) * 100;
            progressBar.style.width = scrollProgress + '%';
        });
    }

    // Add font controls
    addFontControls() {
        const fontControls = document.createElement('div');
        fontControls.className = 'font-controls';
        fontControls.innerHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                font-family: 'Inter', sans-serif;
            ">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Font Size</div>
                <button onclick="studyTheme.changeFontSize('decrease')" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">A-</button>
                <button onclick="studyTheme.changeFontSize('reset')" style="
                    background: #95a5a6;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">A</button>
                <button onclick="studyTheme.changeFontSize('increase')" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">A+</button>
            </div>
        `;
        document.body.appendChild(fontControls);
    }

    // Change font size
    changeFontSize(action) {
        const currentSize = parseFloat(document.body.style.fontSize) || 1;
        
        switch (action) {
            case 'increase':
                document.body.style.fontSize = (currentSize + 0.1) + 'rem';
                break;
            case 'decrease':
                document.body.style.fontSize = (currentSize - 0.1) + 'rem';
                break;
            case 'reset':
                document.body.style.fontSize = '1rem';
                break;
        }
        
        this.showNotification(`Font size ${action}d`, 'info');
    }

    // Enhance existing elements
    enhanceExistingElements() {
        // Enhance titles
        document.querySelectorAll('h1, h2, h3').forEach(title => {
            title.classList.add('study-heading');
        });

        // Enhance hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.background = '#ffffff';
            hero.style.padding = '120px 0 80px';
        }

        // Enhance stats section
        const stats = document.querySelector('.stats');
        if (stats) {
            stats.style.background = '#ffffff';
        }

        // Add study animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'studySlideIn 0.6s ease forwards';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section, .service-card, .stat').forEach(el => {
            observer.observe(el);
        });
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `study-notification study-notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: studySlideIn 0.3s ease;
            font-family: 'Inter', sans-serif;
        `;

        // Set background based on type
        if (type === 'success') {
            notification.style.background = '#27ae60';
        } else if (type === 'error') {
            notification.style.background = '#e74c3c';
        } else {
            notification.style.background = '#3498db';
        }

        document.body.appendChild(notification);

        // Remove after duration
        setTimeout(() => {
            notification.style.animation = 'studySlideOut 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Auto-apply study theme when script loads
document.addEventListener('DOMContentLoaded', () => {
    window.studyTheme = new StudyTheme();
    
    // Override global notification function
    window.showNotification = (message, type) => {
        window.studyTheme.showNotification(message, type);
    };
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes studyRipple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @keyframes studySlideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes studySlideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// Export for manual application
window.applyStudyTheme = () => new StudyTheme();

console.log('📚 Study Theme Script Loaded!');