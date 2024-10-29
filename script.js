document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        
        // Toggle the panel's visibility
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});