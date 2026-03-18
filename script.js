// Modal functionality
let modalContainer = null;
let currentUser = null;

// Initialize modal container
document.addEventListener('DOMContentLoaded', function() {
    modalContainer = document.getElementById('modal-container');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize user session
    checkUserSession();
    
    // Add global navigation helpers
    addGlobalNavigation();
    
    // Add cross-page session management
    addCrossPageSessionManagement();
});

// Show login modal
function showLoginModal() {
    const modalHTML = `
        <div class="modal active" id="login-modal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                <h2>Sign In</h2>
                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required placeholder="your.email@college.edu">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" required placeholder="Enter your password">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                        <button type="submit" class="btn-primary">Sign In</button>
                    </div>
                </form>
                <p style="margin-top: 1rem; text-align: center; color: #6b7280;">
                    Don't have an account? <a href="#" onclick="switchToRegister()" style="color: #3b82f6;">Sign up</a>
                </p>
            </div>
        </div>
    `;
    modalContainer.innerHTML = modalHTML;
}

// Show register modal
function showRegisterModal() {
    const modalHTML = `
        <div class="modal active" id="register-modal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                <h2>Create Account</h2>
                <p style="text-align: center; color: #dc2626; font-weight: 600; margin-bottom: 1rem;">
                    🎓 Available for KR Mangalam University students only
                </p>
                <form onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" required placeholder="John">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" required placeholder="Doe">
                    </div>
                    <div class="form-group">
                        <label for="reg-email">Email</label>
                        <input type="email" id="reg-email" required placeholder="your.email@krmangalam.edu">
                        <small style="color: #6b7280;">Must be your KR Mangalam University email</small>
                    </div>
                    <div class="form-group">
                        <label for="reg-password">Password</label>
                        <input type="password" id="reg-password" required placeholder="Create a password">
                    </div>
                    <div class="form-group">
                        <label for="student-id">Student ID</label>
                        <input type="text" id="student-id" required placeholder="e.g., 2021CS001">
                        <small style="color: #6b7280;">Your KR Mangalam University student ID</small>
                    </div>
                    <div class="form-group">
                        <label for="branch">Branch/Department</label>
                        <select id="branch" required>
                            <option value="">Select your branch</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Electronics">Electronics & Communication</option>
                            <option value="Mechanical">Mechanical Engineering</option>
                            <option value="Civil">Civil Engineering</option>
                            <option value="Electrical">Electrical Engineering</option>
                            <option value="MBA">MBA</option>
                            <option value="BBA">BBA</option>
                            <option value="BCA">BCA</option>
                            <option value="B.Com">B.Com</option>
                            <option value="B.Sc">B.Sc</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="graduation">Graduation Year</label>
                        <select id="graduation" required>
                            <option value="">Select year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="verification" required>
                            I confirm that I am a current KR Mangalam University student
                        </label>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                        <button type="submit" class="btn-primary">Create Account</button>
                    </div>
                </form>
                <p style="margin-top: 1rem; text-align: center; color: #6b7280;">
                    Already have an account? <a href="#" onclick="switchToLogin()" style="color: #3b82f6;">Sign in</a>
                </p>
            </div>
        </div>
    `;
    modalContainer.innerHTML = modalHTML;
}

// Close modal
function closeModal() {
    modalContainer.innerHTML = '';
}

// Switch to register modal
function switchToRegister() {
    closeModal();
    showRegisterModal();
}

// Switch to login modal
function switchToLogin() {
    closeModal();
    showLoginModal();
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login (in real app, this would call your API)
    console.log('Login attempt:', { email, password });
    
    // Create user session
    currentUser = {
        email: email,
        name: email.split('@')[0],
        isLoggedIn: true
    };
    
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Show success message
    showNotification('Welcome back! Redirecting to dashboard...', 'success');
    
    // Close modal after delay and update UI
    setTimeout(() => {
        closeModal();
        updateNavigationForLoggedInUser();
        // In a real app, redirect to dashboard
        console.log('Redirecting to dashboard...');
        showDashboard();
    }, 2000);
}

// Handle register form submission
function handleRegister(event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value,
        studentId: document.getElementById('student-id').value,
        branch: document.getElementById('branch').value,
        graduation: document.getElementById('graduation').value,
        verification: document.getElementById('verification').checked
    };
    
    // Validate KR Mangalam University email
    if (!formData.email.includes('@krmangalam.edu')) {
        showNotification('Please use your KR Mangalam University email (@krmangalam.edu)', 'error');
        return;
    }
    
    // Simulate registration (in real app, this would call your API)
    console.log('Registration attempt:', formData);
    
    // Create user session
    currentUser = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
        college: 'KR Mangalam University',
        branch: formData.branch,
        studentId: formData.studentId,
        isLoggedIn: true
    };
    
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Show success message
    showNotification('Welcome to KR Mangalam StudentFreelance! Account created successfully!', 'success');
    
    // Close modal after delay and update UI
    setTimeout(() => {
        closeModal();
        updateNavigationForLoggedInUser();
        showDashboard();
    }, 2000);
}

// Check user session on load
function checkUserSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateNavigationForLoggedInUser();
    }
}

// Update navigation for logged in user
function updateNavigationForLoggedInUser() {
    const navMenu = document.querySelector('.nav-menu');
    if (currentUser && currentUser.isLoggedIn) {
        navMenu.innerHTML = `
            <a href="#dashboard" class="nav-link" onclick="showDashboard()">Dashboard</a>
            <a href="#services" class="nav-link" onclick="showServices()">Services</a>
            <a href="#messages" class="nav-link" onclick="showMessages()">Messages</a>
            <a href="#profile" class="nav-link" onclick="showProfile()">Profile</a>
            <span class="user-welcome">Welcome, ${currentUser.name}!</span>
            <button class="btn-secondary" onclick="logout()">Logout</button>
        `;
    }
}

// Show dashboard
function showDashboard() {
    const mainContent = document.querySelector('main') || document.body;
    mainContent.innerHTML = `
        <div class="dashboard-container">
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-brand">
                        <h2>KR Mangalam StudentFreelance</h2>
                    </div>
                    <div class="nav-menu">
                        <a href="#dashboard" class="nav-link active">Dashboard</a>
                        <a href="#services" class="nav-link" onclick="showServices()">Services</a>
                        <a href="#messages" class="nav-link" onclick="showMessages()">Messages</a>
                        <a href="#profile" class="nav-link" onclick="showProfile()">Profile</a>
                        <span class="user-welcome">Welcome, ${currentUser.name}!</span>
                        <button class="btn-secondary" onclick="logout()">Logout</button>
                    </div>
                </div>
            </nav>
            
            <div class="container" style="margin-top: 100px;">
                <h1>Welcome back, ${currentUser.name}! 👋</h1>
                <p>This is your KR Mangalam StudentFreelance dashboard. Manage your services and track your earnings.</p>
                
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <h3>Total Jobs</h3>
                        <div class="stat-number">12</div>
                    </div>
                    <div class="stat-card">
                        <h3>Completed</h3>
                        <div class="stat-number">8</div>
                    </div>
                    <div class="stat-card">
                        <h3>Earnings</h3>
                        <div class="stat-number">₹18,000</div>
                    </div>
                    <div class="stat-card">
                        <h3>Rating</h3>
                        <div class="stat-number">4.8⭐</div>
                    </div>
                </div>
                
                <div class="dashboard-actions">
                    <button class="btn-primary btn-large" onclick="showCreateService()">Create New Service</button>
                    <button class="btn-secondary btn-large" onclick="showServices()">Browse Services</button>
                    <button class="btn-secondary btn-large" onclick="showMessages()">View Messages</button>
                </div>
                
                <div style="margin-top: 3rem; padding: 2rem; background: #f0fdf4; border-radius: 16px; border-left: 4px solid #10b981;">
                    <h3 style="color: #065f46; margin-bottom: 1rem;">🎓 KR Mangalam University Student Portal</h3>
                    <p style="color: #047857;">You are logged in as a verified KR Mangalam University student. This platform is exclusively for our university community.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
                        <div style="padding: 1rem; background: white; border-radius: 8px;">
                            <strong>Branch:</strong> ${currentUser.branch || 'Not specified'}
                        </div>
                        <div style="padding: 1rem; background: white; border-radius: 8px;">
                            <strong>Student ID:</strong> ${currentUser.studentId || 'Not specified'}
                        </div>
                        <div style="padding: 1rem; background: white; border-radius: 8px;">
                            <strong>Graduation:</strong> ${currentUser.graduation || 'Not specified'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show services page
function showServices() {
    const mainContent = document.querySelector('main') || document.body;
    mainContent.innerHTML = `
        <div class="services-page">
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-brand">
                        <h2>StudentFreelance</h2>
                    </div>
                    <div class="nav-menu">
                        <a href="#dashboard" class="nav-link" onclick="showDashboard()">Dashboard</a>
                        <a href="#services" class="nav-link active">Services</a>
                        <a href="#messages" class="nav-link" onclick="showMessages()">Messages</a>
                        <a href="#profile" class="nav-link" onclick="showProfile()">Profile</a>
                        <span class="user-welcome">Welcome, ${currentUser.name}!</span>
                        <button class="btn-secondary" onclick="logout()">Logout</button>
                    </div>
                </div>
            </nav>
            
            <div class="container" style="margin-top: 100px;">
                <h1>Browse Services</h1>
                <div class="services-filters">
                    <input type="text" placeholder="Search services..." class="search-input">
                    <select class="filter-select">
                        <option>All Categories</option>
                        <option>Tutoring</option>
                        <option>Programming</option>
                        <option>Design</option>
                        <option>Writing</option>
                    </select>
                    <button class="btn-primary" onclick="searchServices()">Search</button>
                </div>
                
                <div class="services-list">
                    ${generateServiceCards()}
                </div>
            </div>
        </div>
    `;
}

// Generate service cards
function generateServiceCards() {
    const services = [
        { title: "Math Tutoring", price: "$25/hr", provider: "Sarah Chen", rating: 4.9, category: "Tutoring" },
        { title: "Web Development", price: "$40/hr", provider: "Mike Johnson", rating: 4.7, category: "Programming" },
        { title: "Logo Design", price: "$50/project", provider: "Emma Wilson", rating: 4.8, category: "Design" },
        { title: "Essay Editing", price: "$20/hr", provider: "James Lee", rating: 4.6, category: "Writing" },
        { title: "Python Programming", price: "$35/hr", provider: "Alex Kumar", rating: 4.9, category: "Programming" },
        { title: "Presentation Design", price: "$30/project", provider: "Lisa Brown", rating: 4.5, category: "Design" }
    ];
    
    return services.map(service => `
        <div class="service-card-detailed" onclick="showServiceDetail('${service.title}')">
            <div class="service-header">
                <h3>${service.title}</h3>
                <span class="service-price">${service.price}</span>
            </div>
            <div class="service-provider">
                <span>by ${service.provider}</span>
                <span class="service-rating">⭐ ${service.rating}</span>
            </div>
            <div class="service-category">${service.category}</div>
            <button class="btn-primary" onclick="event.stopPropagation(); contactProvider('${service.provider}')">Contact</button>
        </div>
    `).join('');
}

// Show messages page
function showMessages() {
    const mainContent = document.querySelector('main') || document.body;
    mainContent.innerHTML = `
        <div class="messages-page">
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-brand">
                        <h2>StudentFreelance</h2>
                    </div>
                    <div class="nav-menu">
                        <a href="#dashboard" class="nav-link" onclick="showDashboard()">Dashboard</a>
                        <a href="#services" class="nav-link" onclick="showServices()">Services</a>
                        <a href="#messages" class="nav-link active">Messages</a>
                        <a href="#profile" class="nav-link" onclick="showProfile()">Profile</a>
                        <span class="user-welcome">Welcome, ${currentUser.name}!</span>
                        <button class="btn-secondary" onclick="logout()">Logout</button>
                    </div>
                </div>
            </nav>
            
            <div class="container" style="margin-top: 100px;">
                <h1>Messages</h1>
                <div class="messages-container">
                    <div class="conversations-list">
                        ${generateConversations()}
                    </div>
                    <div class="chat-area">
                        <div class="chat-placeholder">
                            <p>Select a conversation to start messaging</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate conversations
function generateConversations() {
    const conversations = [
        { name: "Sarah Chen", lastMessage: "Thanks for the help!", time: "2 min ago", unread: 2 },
        { name: "Mike Johnson", lastMessage: "Can you start tomorrow?", time: "1 hour ago", unread: 0 },
        { name: "Emma Wilson", lastMessage: "Project looks great!", time: "3 hours ago", unread: 1 }
    ];
    
    return conversations.map(conv => `
        <div class="conversation-item" onclick="openChat('${conv.name}')">
            <div class="conversation-info">
                <h4>${conv.name}</h4>
                <p>${conv.lastMessage}</p>
            </div>
            <div class="conversation-meta">
                <span class="conversation-time">${conv.time}</span>
                ${conv.unread > 0 ? `<span class="unread-badge">${conv.unread}</span>` : ''}
            </div>
        </div>
    `).join('');
}

// Show profile page
function showProfile() {
    const mainContent = document.querySelector('main') || document.body;
    mainContent.innerHTML = `
        <div class="profile-page">
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-brand">
                        <h2>StudentFreelance</h2>
                    </div>
                    <div class="nav-menu">
                        <a href="#dashboard" class="nav-link" onclick="showDashboard()">Dashboard</a>
                        <a href="#services" class="nav-link" onclick="showServices()">Services</a>
                        <a href="#messages" class="nav-link" onclick="showMessages()">Messages</a>
                        <a href="#profile" class="nav-link active">Profile</a>
                        <span class="user-welcome">Welcome, ${currentUser.name}!</span>
                        <button class="btn-secondary" onclick="logout()">Logout</button>
                    </div>
                </div>
            </nav>
            
            <div class="container" style="margin-top: 100px;">
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            <div class="avatar-placeholder">${currentUser.name.charAt(0).toUpperCase()}</div>
                        </div>
                        <div class="profile-info">
                            <h1>${currentUser.name}</h1>
                            <p>${currentUser.email}</p>
                            <p>${currentUser.college || 'Student University'}</p>
                            <div class="profile-stats">
                                <span>⭐ 4.8 Rating</span>
                                <span>• 12 Jobs</span>
                                <span>• $450 Earned</span>
                            </div>
                        </div>
                        <button class="btn-primary" onclick="editProfile()">Edit Profile</button>
                    </div>
                    
                    <div class="profile-content">
                        <div class="profile-section">
                            <h3>About Me</h3>
                            <p>I'm a passionate student offering quality services in programming and design. Always eager to help fellow students!</p>
                        </div>
                        
                        <div class="profile-section">
                            <h3>Skills</h3>
                            <div class="skills-tags">
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">React</span>
                                <span class="skill-tag">UI Design</span>
                                <span class="skill-tag">Tutoring</span>
                            </div>
                        </div>
                        
                        <div class="profile-section">
                            <h3>My Services</h3>
                            <div class="user-services">
                                <div class="service-item">
                                    <h4>Web Development</h4>
                                    <p>Building modern websites and applications</p>
                                    <span class="price">$40/hr</span>
                                </div>
                                <div class="service-item">
                                    <h4>UI/UX Design</h4>
                                    <p>Creating beautiful and functional designs</p>
                                    <span class="price">$35/hr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully!', 'info');
    location.reload(); // Reload to show original page
}

// Additional utility functions
function showCreateService() {
    showNotification('Create Service feature coming soon!', 'info');
}

function searchServices() {
    showNotification('Search functionality coming soon!', 'info');
}

function showServiceDetail(serviceTitle) {
    showNotification(`Viewing details for: ${serviceTitle}`, 'info');
}

function contactProvider(providerName) {
    showNotification(`Contacting ${providerName}...`, 'info');
}

function openChat(name) {
    showNotification(`Opening chat with ${name}...`, 'info');
}

function editProfile() {
    showNotification('Profile editing coming soon!', 'info');
}

// Add global navigation helpers
function addGlobalNavigation() {
    // Add home button to all pages (if not on index.html)
    if (!window.location.pathname.includes('index.html')) {
        const homeBtn = document.createElement('button');
        homeBtn.innerHTML = '🏠 Home';
        homeBtn.className = 'btn-primary';
        homeBtn.style.cssText = `
            position: fixed;
            top: 80px;
            left: 20px;
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            cursor: pointer;
        `;
        homeBtn.onclick = () => window.location.href = 'index.html';
        document.body.appendChild(homeBtn);
    }
    
    // Add navigation hub button
    const hubBtn = document.createElement('button');
    hubBtn.innerHTML = '🎓 All Services';
    hubBtn.className = 'btn-secondary';
    hubBtn.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 50px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        cursor: pointer;
    `;
    hubBtn.onclick = () => window.location.href = 'navigation-hub.html';
    document.body.appendChild(hubBtn);
    
    // Add floating quick actions
    const quickActions = document.createElement('div');
    quickActions.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
    `;
    
    // Dashboard button
    const dashboardBtn = document.createElement('button');
    dashboardBtn.innerHTML = '📊';
    dashboardBtn.className = 'btn-primary';
    dashboardBtn.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    `;
    dashboardBtn.onclick = () => {
        if (currentUser && currentUser.isLoggedIn) {
            showDashboard();
        } else {
            showLoginModal();
        }
    };
    
    // Messages button
    const messagesBtn = document.createElement('button');
    messagesBtn.innerHTML = '💬';
    messagesBtn.className = 'btn-secondary';
    messagesBtn.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    `;
    messagesBtn.onclick = () => {
        if (currentUser && currentUser.isLoggedIn) {
            showMessages();
        } else {
            showNotification('Please sign in to view messages', 'info');
            showLoginModal();
        }
    };
    
    quickActions.appendChild(dashboardBtn);
    quickActions.appendChild(messagesBtn);
    document.body.appendChild(quickActions);
}

// Add cross-page session management
function addCrossPageSessionManagement() {
    // Check if user is logged in on any page
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        
        // Update navigation for logged in users
        if (currentUser.isLoggedIn) {
            updateNavigationForLoggedInUser();
        }
    }
    
    // Add page-specific navigation updates
    updatePageSpecificNavigation();
}

// Update page-specific navigation
function updatePageSpecificNavigation() {
    const currentPath = window.location.pathname;
    
    // Update page titles based on current page
    if (currentPath.includes('tutoring.html')) {
        document.title = 'Tutoring Services - KR Mangalam StudentFreelance';
    } else if (currentPath.includes('programming.html')) {
        document.title = 'Programming Services - KR Mangalam StudentFreelance';
    } else if (currentPath.includes('design.html')) {
        document.title = 'Design Services - KR Mangalam StudentFreelance';
    } else if (currentPath.includes('writing.html')) {
        document.title = 'Writing Services - KR Mangalam StudentFreelance';
    } else if (currentPath.includes('marketing.html')) {
        document.title = 'Marketing Services - KR Mangalam StudentFreelance';
    } else if (currentPath.includes('creative.html')) {
        document.title = 'Creative Services - KR Mangalam StudentFreelance';
    } else if (currentPath.includes('navigation-hub.html')) {
        document.title = 'All Services - KR Mangalam StudentFreelance';
    }
    
    // Add breadcrumb navigation
    addBreadcrumbNavigation();
}

// Add breadcrumb navigation
function addBreadcrumbNavigation() {
    const breadcrumb = document.createElement('div');
    breadcrumb.style.cssText = `
        position: fixed;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 8px 20px;
        border-radius: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 999;
        font-size: 0.875rem;
        color: #6b7280;
    `;
    
    const currentPath = window.location.pathname;
    let breadcrumbText = '<a href="index.html" style="color: #3b82f6; text-decoration: none;">Home</a>';
    
    if (currentPath.includes('services/')) {
        if (currentPath.includes('tutoring.html')) {
            breadcrumbText += ' > <a href="navigation-hub.html" style="color: #3b82f6; text-decoration: none;">Services</a> > Tutoring';
        } else if (currentPath.includes('programming.html')) {
            breadcrumbText += ' > <a href="navigation-hub.html" style="color: #3b82f6; text-decoration: none;">Services</a> > Programming';
        } else if (currentPath.includes('design.html')) {
            breadcrumbText += ' > <a href="navigation-hub.html" style="color: #3b82f6; text-decoration: none;">Services</a> > Design';
        } else if (currentPath.includes('writing.html')) {
            breadcrumbText += ' > <a href="navigation-hub.html" style="color: #3b82f6; text-decoration: none;">Services</a> > Writing';
        } else if (currentPath.includes('marketing.html')) {
            breadcrumbText += ' > <a href="navigation-hub.html" style="color: #3b82f6; text-decoration: none;">Services</a> > Marketing';
        } else if (currentPath.includes('creative.html')) {
            breadcrumbText += ' > <a href="navigation-hub.html" style="color: #3b82f6; text-decoration: none;">Services</a> > Creative';
        }
    } else if (currentPath.includes('navigation-hub.html')) {
        breadcrumbText += ' > All Services';
    }
    
    breadcrumb.innerHTML = breadcrumbText;
    document.body.appendChild(breadcrumb);
}

// Enhanced notification system with cross-page support
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#dc2626' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add some interactivity to service cards
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            showNotification(`Exploring ${serviceName} services...`, 'info');
        });
    });
    
    // Add hover effect to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Simulate dynamic stats counting
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 30);
    });
}

// Trigger stats animation when stats section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

// Start observing the stats section
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});
