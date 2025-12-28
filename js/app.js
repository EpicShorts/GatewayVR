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
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            alert('Welcome to the GatewayVR Demo!');
        });
    }

    // Header scroll background effect
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 17, 32, 0.9)';
        } else {
            header.style.background = 'rgba(11, 17, 32, 0.8)';
        }
    });

    // Form Handle
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Request Sent!';
            btn.style.background = '#10b981'; // Success Green

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = ''; // Revert
                contactForm.reset();
                alert('Thank you for your interest in The VR Gatekeeper. We will be in touch shortly.');
            }, 2000);
        });
    }
});
