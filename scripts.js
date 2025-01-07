document.addEventListener('DOMContentLoaded', () => {
    // Function to load content into an element with a specific ID
    function loadContent(id, url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load content for various sections from HTML files
    loadContent('navbar', 'HTML Files/navbar.html');
    loadContent('image', 'HTML Files/image.html');
    loadContent('body', 'HTML Files/body.html');
    loadContent('resume', 'HTML Files/resume.html');
    loadContent('projects', 'HTML Files/projects.html');
    loadContent('skills', 'HTML Files/skills.html');
    loadContent('expertise', 'HTML Files/expertise.html');
    loadContent('sms', 'HTML Files/sms.html');
    loadContent('footer', 'HTML Files/footer.html');

    // Smooth scrolling to the SMS section if the link exists
    const smsLink = document.getElementById('sms-link');
    if (smsLink) {
        smsLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const smsSection = document.getElementById('sms');
            if (smsSection) {
                smsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to SMS section
            }
        });
    }
});
