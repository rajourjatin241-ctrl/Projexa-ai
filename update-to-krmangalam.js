// This script updates all service pages to be KR Mangalam University specific
// Run this in the browser console on each service page

const updateToKRMangalam = () => {
    // Update navigation brand
    const navBrand = document.querySelector('.nav-brand h2');
    if (navBrand) {
        navBrand.innerHTML = '<a href="../index.html" style="color: #3b82f6; text-decoration: none;">KR Mangalam StudentFreelance</a>';
    }

    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.textContent = heroTitle.textContent.replace('Expert', 'KR Mangalam').replace('Professional', 'KR Mangalam').replace('Creative', 'KR Mangalam');
    }

    // Update footer
    const footerSection = document.querySelector('.footer-section h3');
    if (footerSection) {
        footerSection.textContent = 'KR Mangalam StudentFreelance';
    }

    const footerDesc = document.querySelector('.footer-section p');
    if (footerDesc) {
        footerDesc.textContent = footerDesc.textContent.replace('Connecting students', 'Connecting KR Mangalam students').replace('built for students', 'built exclusively for KR Mangalam University students');
    }

    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        footerBottom.textContent = '© 2024 KR Mangalam StudentFreelance. All rights reserved.';
    }

    console.log('Updated to KR Mangalam University branding');
};

// Auto-run the update
updateToKRMangalam();
