// script.js – subtle interactive enhancements (colourful icon feedback)

// 1. Social media link hover effect (already in CSS, but we add a tiny console greet)
console.log("🌊 Biggie Energies – navy, milk & maroon theme loaded");

// 2. Contact form button – simple feedback without actual submit
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();  // avoid any page reload
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '') {
            alert(`✨ Thanks ${nameInput.value.split(' ')[0]}, we'll respond shortly.`);
        } else {
            alert('📋 Please fill in both name and email.');
        }
    });
}

// 3. Add a gentle pulse animation to service card icons when they appear (optional)
//    we use Intersection Observer to add a small 'pop' once
const cardIcons = document.querySelectorAll('.service-card .card-icon');
if (cardIcons.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'transform 0.3s ease';
                entry.target.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                }, 200);
                observer.unobserve(entry.target); // once
            }
        });
    }, { threshold: 0.5 });
    cardIcons.forEach(icon => observer.observe(icon));
}

// 4. Simple year update in footer (if you want dynamic, but we keep static)
//    just a tiny detail: change the year in console? no, but we can show dynamic
const footer = document.querySelector('.footer p');
// we already have 2026 hardcoded, but we can optionally update:
// (optional) – not needed, but demonstrates JS
// console.log('footer year check: 2026');

// 5. extra touch: any nav link click closes mobile menu? no mobile menu yet, but we can smooth
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        // just an anchor behaviour, but we could highlight active
        document.querySelectorAll('.navbar a').forEach(a => a.style.borderBottomColor = 'transparent');
        this.style.borderBottomColor = '#9e2a2b';
    });
});

window.addEventListener('load', () => {
    const landingWrapper = document.getElementById('landing-wrapper');
    const mainContent = document.getElementById('main-content');

    // Wait 4 seconds (4000 milliseconds)
    setTimeout(() => {
        // Start fade out animation
        landingWrapper.classList.add('fade-out');

        // Show the main content
        mainContent.style.display = 'block';

        // Completely remove the landing wrapper after fade completes
        setTimeout(() => {
            landingWrapper.remove();
        }, 500); 
    }, 4000);
});
