document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(e.target.action, {
                    method: 'POST',
                    body: new FormData(e.target),
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    alert('Message sent!');
                    form.reset();
                } else {
                    alert('Error submitting form');
                }
            } catch (error) {
                alert('Network error');
            }
        });
    }
});