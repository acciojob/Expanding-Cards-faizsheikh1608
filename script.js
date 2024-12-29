const panels = document.querySelectorAll('.panel');

// Set the first panel as active initially
panels[0].classList.add('active');

// Add event listener for each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();  // Remove active class from all panels
        panel.classList.add('active');  // Add active class to clicked panel
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');  // Remove active class from all panels
    });
}
