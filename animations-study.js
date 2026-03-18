// Study Theme Animations and Interactive Effects for KR Mangalam StudentFreelance

class StudyAnimations {
    constructor() {
        this.init();
        this.studyMode = false;
        this.focusMode = false;
        this.darkMode = false;
        this.readingEnhanced = false;
        this.progressData = {};
    }

    init() {
        this.setupStudyInteractions();
        this.setupStudyScrollAnimations();
        this.setupStudyButtonEffects();
        this.setupStudyCardEffects();
        this.setupStudyModalEffects();
        this.setupStudyFormEffects();
        this.setupStudyProgressTracking();
        this.setupStudyReadingEnhancements();
        this.setupStudyFocusMode();
        this.setupStudyDarkMode();
        this.startStudyAnimationLoop();
    }

    // Setup study-specific interactions
    setupStudyInteractions() {
        // Add study mode toggle
        this.addStudyModeToggle();
        
        // Add focus mode toggle
        this.addFocusModeToggle();
        
        // Add dark mode toggle
        this.addDarkModeToggle();
        
        // Add reading enhancement toggle
        this.addReadingEnhancementToggle();
        
        // Add progress tracking
        this.addProgressTracking();
    }

    // Add study mode toggle
    addStudyModeToggle() {
        const studyToggle = document.createElement('button');
        studyToggle.innerHTML = '📚 Study Mode';
        studyToggle.className = 'btn-secondary study-toggle';
        studyToggle.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
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
        focusToggle.className = 'btn-secondary focus-toggle';
        focusToggle.style.cssText = `
            position: fixed;
            top: 130px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
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
        darkToggle.className = 'btn-secondary dark-toggle';
        darkToggle.style.cssText = `
            position: fixed;
            top: 180px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
        `;
        
        darkToggle.addEventListener('click', () => {
            this.toggleDarkMode();
        });
        
        document.body.appendChild(darkToggle);
    }

    // Add reading enhancement toggle
    addReadingEnhancementToggle() {
        const readingToggle = document.createElement('button');
        readingToggle.innerHTML = '📖 Reading Mode';
        readingToggle.className = 'btn-secondary reading-toggle';
        readingToggle.style.cssText = `
            position: fixed;
            top: 230px;
            right: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
        `;
        
        readingToggle.addEventListener('click', () => {
            this.toggleReadingEnhancement();
        });
        
        document.body.appendChild(readingToggle);
    }

    // Toggle study mode
    toggleStudyMode() {
        this.studyMode = !this.studyMode;
        
        if (this.studyMode) {
            document.body.classList.add('study-mode-active');
            this.enableStudyMode();
            this.showNotification('Study Mode Enabled - Distractions minimized', 'success');
        } else {
            document.body.classList.remove('study-mode-active');
            this.disableStudyMode();
            this.showNotification('Study Mode Disabled', 'info');
        }
    }

    // Enable study mode
    enableStudyMode() {
        // Reduce animations
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animation) {
                el.style.animationDuration = '0.1s';
            }
        });
        
        // Mute colors
        document.documentElement.style.setProperty('--focus-color', '#5dade2');
        document.documentElement.style.setProperty('--calm-blue', '#85c1e9');
        
        // Add study overlay
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
    }

    // Disable study mode
    disableStudyMode() {
        // Restore animations
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animationDuration === '0.1s') {
                el.style.animationDuration = '';
            }
        });
        
        // Restore colors
        document.documentElement.style.setProperty('--focus-color', '#3498db');
        document.documentElement.style.setProperty('--calm-blue', '#5dade2');
        
        // Remove study overlay
        const studyOverlay = document.querySelector('.study-overlay');
        if (studyOverlay) {
            studyOverlay.style.opacity = '0';
            setTimeout(() => {
                studyOverlay.remove();
            }, 300);
        }
    }

    // Toggle focus mode
    toggleFocusMode() {
        this.focusMode = !this.focusMode;
        
        if (this.focusMode) {
            document.body.classList.add('focus-mode-active');
            this.enableFocusMode();
            this.showNotification('Focus Mode Enabled - Maximum concentration', 'success');
        } else {
            document.body.classList.remove('focus-mode-active');
            this.disableFocusMode();
            this.showNotification('Focus Mode Disabled', 'info');
        }
    }

    // Enable focus mode
    enableFocusMode() {
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
        
        // Add focus timer
        this.addFocusTimer();
    }

    // Disable focus mode
    disableFocusMode() {
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
        
        // Remove focus timer
        const focusTimer = document.querySelector('.focus-timer');
        if (focusTimer) {
            focusTimer.remove();
        }
    }

    // Add focus timer
    addFocusTimer() {
        const focusTimer = document.createElement('div');
        focusTimer.className = 'focus-timer';
        focusTimer.innerHTML = `
            <div style="
                position: fixed;
                top: 80px;
                left: 50%;
                transform: translateX(-50%);
                background: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1001;
                font-family: 'Inter', sans-serif;
            ">
                <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">Focus Time</div>
                <div id="focus-time" style="font-size: 2rem; font-weight: 700; color: #3498db;">00:00:00</div>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                ">Exit Focus</button>
            </div>
        `;
        document.body.appendChild(focusTimer);
        
        // Start timer
        let seconds = 0;
        const timeDisplay = document.getElementById('focus-time');
        
        const timer = setInterval(() => {
            seconds++;
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            
            timeDisplay.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
        
        // Store timer reference
        focusTimer.dataset.timerId = timer;
    }

    // Toggle dark mode
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
            this.showNotification('Dark Mode Enabled', 'success');
        } else {
            document.body.classList.remove('dark-mode');
            this.showNotification('Dark Mode Disabled', 'info');
        }
    }

    // Toggle reading enhancement
    toggleReadingEnhancement() {
        this.readingEnhanced = !this.readingEnhanced;
        
        if (this.readingEnhanced) {
            document.body.classList.add('reading-enhanced-active');
            this.enableReadingEnhancement();
            this.showNotification('Reading Mode Enhanced', 'success');
        } else {
            document.body.classList.remove('reading-enhanced-active');
            this.disableReadingEnhancement();
            this.showNotification('Reading Mode Disabled', 'info');
        }
    }

    // Enable reading enhancement
    enableReadingEnhancement() {
        // Increase font size
        document.body.style.fontSize = '1.1rem';
        
        // Increase line height
        document.body.style.lineHeight = '1.8';
        
        // Add reading ruler
        this.addReadingRuler();
        
        // Add highlight tools
        this.addHighlightTools();
    }

    // Disable reading enhancement
    disableReadingEnhancement() {
        // Restore font size
        document.body.style.fontSize = '';
        
        // Restore line height
        document.body.style.lineHeight = '';
        
        // Remove reading ruler
        const readingRuler = document.querySelector('.reading-ruler');
        if (readingRuler) {
            readingRuler.remove();
        }
        
        // Remove highlight tools
        const highlightTools = document.querySelector('.highlight-tools');
        if (highlightTools) {
            highlightTools.remove();
        }
    }

    // Add reading ruler
    addReadingRuler() {
        const readingRuler = document.createElement('div');
        readingRuler.className = 'reading-ruler';
        readingRuler.style.cssText = `
            position: fixed;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: rgba(52, 152, 219, 0.5);
            z-index: 998;
            pointer-events: none;
            transform: translateY(-50%);
        `;
        document.body.appendChild(readingRuler);
        
        // Follow mouse
        document.addEventListener('mousemove', (e) => {
            if (this.readingEnhanced) {
                readingRuler.style.top = e.clientY + 'px';
            }
        });
    }

    // Add highlight tools
    addHighlightTools() {
        const highlightTools = document.createElement('div');
        highlightTools.className = 'highlight-tools';
        highlightTools.innerHTML = `
            <div style="
                position: fixed;
                top: 80px;
                left: 20px;
                background: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
            ">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Highlight Tools</div>
                <button onclick="studyAnimations.highlightText('yellow')" style="
                    background: #f1c40f;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">Yellow</button>
                <button onclick="studyAnimations.highlightText('green')" style="
                    background: #27ae60;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">Green</button>
                <button onclick="studyAnimations.highlightText('blue')" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">Blue</button>
                <button onclick="studyAnimations.clearHighlights()" style="
                    background: #95a5a6;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">Clear</button>
            </div>
        `;
        document.body.appendChild(highlightTools);
    }

    // Highlight text
    highlightText(color) {
        const selection = window.getSelection();
        if (selection.toString()) {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.className = `highlight-${color}`;
            span.style.cssText = `
                background: ${color === 'yellow' ? 'rgba(241, 196, 15, 0.3)' : 
                              color === 'green' ? 'rgba(39, 174, 96, 0.3)' : 
                              'rgba(52, 152, 219, 0.3)'};
                padding: 2px 4px;
                border-radius: 4px;
            `;
            
            try {
                range.surroundContents(span);
                selection.removeAllRanges();
            } catch (e) {
                console.log('Cannot highlight this selection');
            }
        }
    }

    // Clear highlights
    clearHighlights() {
        const highlights = document.querySelectorAll('[class*="highlight-"]');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            while (highlight.firstChild) {
                parent.insertBefore(highlight.firstChild, highlight);
            }
            parent.removeChild(highlight);
        });
    }

    // Setup study scroll animations
    setupStudyScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStudyElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe all major elements
        document.querySelectorAll('.service-card, .stat, .hero-content, .section-header').forEach(el => {
            observer.observe(el);
        });
    }

    // Animate study element
    animateStudyElement(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    }

    // Setup study button effects
    setupStudyButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.addStudyButtonEffect(button);
            });

            button.addEventListener('mouseleave', () => {
                this.removeStudyButtonEffect(button);
            });

            button.addEventListener('click', (e) => {
                this.addStudyClickEffect(e, button);
            });
        });
    }

    // Add study button effect
    addStudyButtonEffect(button) {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    }

    // Remove study button effect
    removeStudyButtonEffect(button) {
        button.style.transform = '';
        button.style.boxShadow = '';
    }

    // Add study click effect
    addStudyClickEffect(e, button) {
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

    // Setup study card effects
    setupStudyCardEffects() {
        const cards = document.querySelectorAll('.service-card, .stat, .modal-content');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addStudyCardEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeStudyCardEffect(card);
            });
        });
    }

    // Add study card effect
    addStudyCardEffect(card) {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    }

    // Remove study card effect
    removeStudyCardEffect(card) {
        card.style.transform = '';
        card.style.boxShadow = '';
    }

    // Setup study modal effects
    setupStudyModalEffects() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeStudyModal(modal);
                }
            });
        });
    }

    // Close study modal
    closeStudyModal(modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.classList.remove('active');
            modal.style.animation = '';
        }, 300);
    }

    // Setup study form effects
    setupStudyFormEffects() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateStudyForm(form)) {
                    e.preventDefault();
                    this.showNotification('Please fill in all required fields', 'error');
                }
            });
        });

        // Add input focus effects
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                this.addStudyInputFocus(input);
            });

            input.addEventListener('blur', () => {
                this.removeStudyInputFocus(input);
            });
        });
    }

    // Validate study form
    validateStudyForm(form) {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showStudyInputError(input);
                isValid = false;
            } else {
                this.showStudyInputSuccess(input);
            }
        });

        return isValid;
    }

    // Show study input error
    showStudyInputError(input) {
        input.style.borderColor = '#e74c3c';
        input.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
        input.style.animation = 'studyShake 0.5s';
        
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }

    // Show study input success
    showStudyInputSuccess(input) {
        input.style.borderColor = '#27ae60';
        input.style.boxShadow = '0 0 0 3px rgba(39, 174, 96, 0.1)';
    }

    // Add study input focus
    addStudyInputFocus(input) {
        input.style.transform = 'translateY(-2px)';
        input.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }

    // Remove study input focus
    removeStudyInputFocus(input) {
        input.style.transform = '';
        if (!input.style.borderColor || input.style.borderColor === '#e74c3c') {
            input.style.boxShadow = '';
        }
    }

    // Setup study progress tracking
    setupStudyProgressTracking() {
        // Track page scroll progress
        this.trackScrollProgress();
        
        // Track form completion
        this.trackFormProgress();
        
        // Track reading progress
        this.trackReadingProgress();
    }

    // Track scroll progress
    trackScrollProgress() {
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

    // Track form progress
    trackFormProgress() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, select, textarea');
            let completed = 0;
            
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    if (input.value.trim()) {
                        completed++;
                    } else {
                        completed--;
                    }
                    
                    const progress = (completed / inputs.length) * 100;
                    this.updateFormProgress(form, progress);
                });
            });
        });
    }

    // Update form progress
    updateFormProgress(form, progress) {
        let progressBar = form.querySelector('.form-progress-bar');
        
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'form-progress-bar';
            progressBar.style.cssText = `
                width: 100%;
                height: 8px;
                background: #ecf0f1;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 1rem;
            `;
            
            const progressFill = document.createElement('div');
            progressFill.className = 'form-progress-fill';
            progressFill.style.cssText = `
                height: 100%;
                background: linear-gradient(90deg, #3498db, #2ecc71);
                border-radius: 4px;
                transition: width 0.3s ease;
                width: 0%;
            `;
            
            progressBar.appendChild(progressFill);
            form.insertBefore(progressBar, form.firstChild);
        }
        
        const progressFill = progressBar.querySelector('.form-progress-fill');
        progressFill.style.width = progress + '%';
    }

    // Track reading progress
    trackReadingProgress() {
        const content = document.querySelector('.hero-content, .services-grid');
        if (content) {
            const readingProgress = document.createElement('div');
            readingProgress.className = 'reading-progress';
            readingProgress.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                font-family: 'Inter', sans-serif;
            `;
            
            readingProgress.innerHTML = `
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Reading Progress</div>
                <div class="reading-progress-bar" style="
                    width: 200px;
                    height: 8px;
                    background: #ecf0f1;
                    border-radius: 4px;
                    overflow: hidden;
                ">
                    <div class="reading-progress-fill" style="
                        height: 100%;
                        background: linear-gradient(90deg, #3498db, #2ecc71);
                        border-radius: 4px;
                        transition: width 0.3s ease;
                        width: 0%;
                    "></div>
                </div>
                <div class="reading-progress-text" style="margin-top: 0.5rem; font-size: 0.9rem; color: #7f8c8d;">0% complete</div>
            `;
            
            document.body.appendChild(readingProgress);
            
            // Update reading progress
            window.addEventListener('scroll', () => {
                const rect = content.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const contentHeight = content.offsetHeight;
                
                let progress = 0;
                if (rect.top < viewportHeight) {
                    const visibleHeight = Math.min(viewportHeight - rect.top, contentHeight + rect.top);
                    progress = (visibleHeight / contentHeight) * 100;
                }
                
                const progressFill = readingProgress.querySelector('.reading-progress-fill');
                const progressText = readingProgress.querySelector('.reading-progress-text');
                
                progressFill.style.width = Math.min(progress, 100) + '%';
                progressText.textContent = Math.round(Math.min(progress, 100)) + '% complete';
            });
        }
    }

    // Setup study reading enhancements
    setupStudyReadingEnhancements() {
        // Add text-to-speech functionality
        this.addTextToSpeech();
        
        // Add font size controls
        this.addFontControls();
        
        // Add line height controls
        this.addLineHeightControls();
    }

    // Add text-to-speech
    addTextToSpeech() {
        const ttsButton = document.createElement('button');
        ttsButton.innerHTML = '🔊 Read Aloud';
        ttsButton.className = 'btn-secondary tts-button';
        ttsButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            font-size: 0.9rem;
            padding: 10px 16px;
        `;
        
        ttsButton.addEventListener('click', () => {
            this.toggleTextToSpeech();
        });
        
        document.body.appendChild(ttsButton);
    }

    // Toggle text-to-speech
    toggleTextToSpeech() {
        if ('speechSynthesis' in window) {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                this.showNotification('Reading stopped', 'info');
            } else {
                const text = document.body.innerText;
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.rate = 0.9;
                utterance.pitch = 1;
                utterance.volume = 1;
                
                window.speechSynthesis.speak(utterance);
                this.showNotification('Reading started', 'success');
            }
        } else {
            this.showNotification('Text-to-speech not supported', 'error');
        }
    }

    // Add font size controls
    addFontControls() {
        const fontControls = document.createElement('div');
        fontControls.className = 'font-controls';
        fontControls.innerHTML = `
            <div style="
                position: fixed;
                bottom: 80px;
                left: 20px;
                background: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
            ">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Font Size</div>
                <button onclick="studyAnimations.changeFontSize('decrease')" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">A-</button>
                <button onclick="studyAnimations.changeFontSize('reset')" style="
                    background: #95a5a6;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">A</button>
                <button onclick="studyAnimations.changeFontSize('increase')" style="
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

    // Add line height controls
    addLineHeightControls() {
        const lineHeightControls = document.createElement('div');
        lineHeightControls.className = 'line-height-controls';
        lineHeightControls.innerHTML = `
            <div style="
                position: fixed;
                bottom: 140px;
                left: 20px;
                background: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
            ">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Line Height</div>
                <button onclick="studyAnimations.changeLineHeight('decrease')" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">-</button>
                <button onclick="studyAnimations.changeLineHeight('reset')" style="
                    background: #95a5a6;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">Reset</button>
                <button onclick="studyAnimations.changeLineHeight('increase')" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    margin: 0.25rem;
                    border-radius: 4px;
                    cursor: pointer;
                ">+</button>
            </div>
        `;
        document.body.appendChild(lineHeightControls);
    }

    // Change line height
    changeLineHeight(action) {
        const currentHeight = parseFloat(document.body.style.lineHeight) || 1.6;
        
        switch (action) {
            case 'increase':
                document.body.style.lineHeight = (currentHeight + 0.2) + '';
                break;
            case 'decrease':
                document.body.style.lineHeight = (currentHeight - 0.2) + '';
                break;
            case 'reset':
                document.body.style.lineHeight = '1.6';
                break;
        }
        
        this.showNotification(`Line height ${action}d`, 'info');
    }

    // Start study animation loop
    startStudyAnimationLoop() {
        // Add study CSS animations
        this.addStudyCSSAnimations();
        
        console.log('📚 Study Animations initialized!');
    }

    // Add study CSS animations
    addStudyCSSAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes studyRipple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            @keyframes studyShake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }

            .study-mode-active * {
                animation-duration: 0.1s !important;
                transition-duration: 0.1s !important;
            }

            .focus-mode-active .hero-content,
            .focus-mode-active .services-grid {
                max-width: 800px;
                margin: 0 auto;
            }

            .reading-enhanced-active {
                font-size: 1.1rem !important;
                line-height: 1.8 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Show study notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
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
            animation: slideInRight 0.3s ease;
            font-family: 'Inter', sans-serif;
        `;

        // Set background based on type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }

        document.body.appendChild(notification);

        // Remove after duration
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize study animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.studyAnimations = new StudyAnimations();
    
    // Override global notification function
    window.showNotification = (message, type) => {
        window.studyAnimations.showNotification(message, type);
    };
    
    console.log('📚 Study Animations and Effects loaded successfully!');
});
