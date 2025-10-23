// Typewriter effect for about text on scroll
document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.about-text');
    
    if (!aboutText) return;
    
    // Store original text
    const originalText = aboutText.textContent;
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('typing')) {
                startTypewriter(entry.target, originalText);
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of element is visible
    });
    
    // Start observing the about text
    observer.observe(aboutText);
    
    function startTypewriter(element, text) {
        // Clear text and start typing animation
        element.textContent = '';
        element.classList.add('typing');
        
        // Type out the text character by character
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                // Animation complete
                clearInterval(typeInterval);
                element.classList.remove('typing');
                element.classList.add('typing-complete');
            }
        }, 30); // 30ms per character for fast typing
    }
});