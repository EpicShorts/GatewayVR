document.addEventListener('DOMContentLoaded', () => {
    console.log('GatewayVR Initialized');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple interactive effect for the Explore button
    const exploreBtn = document.getElementById('exploreBtn');
    if(exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            alert('Welcome to the GatewayVR Demo!');
        });
    }
    
    // Header scroll background effect
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 14, 0.9)';
        } else {
            header.style.background = 'rgba(10, 10, 14, 0.7)';
        }
    });
});
