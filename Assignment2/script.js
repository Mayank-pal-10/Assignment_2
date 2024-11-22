// Wait for the DOM content to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "bg-text"
    const hiddenTexts = document.querySelectorAll(".bg-text");

    // Create an Intersection Observer to monitor visibility of elements
    const observer = new IntersectionObserver((entries) => {
        // Loop through each observed entry
        entries.forEach(entry => {
            // Check if the element is intersecting with the viewport
            if (entry.isIntersecting) {
                // Add the "show" class to make the text visible
                entry.target.classList.add("show");
                // Stop observing the element once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.8 // Element must be 80% visible to trigger the observer
    });

    // Observe each hidden text element
    hiddenTexts.forEach(element => observer.observe(element));
});

// Add a scroll event listener to monitor when the user scrolls
document.addEventListener('scroll', function () {
    // Select the heading element inside the ".heading" container
    const heading = document.querySelector('.heading h2');
    // Select all elements with the class "card"
    const cards = document.querySelectorAll('.card');
    
    // Check if the heading is visible in the viewport
    if (heading.getBoundingClientRect().top < window.innerHeight) {
        // Add the "visible" class to apply the fade-in animation
        heading.classList.add('visible');
    }

    // Loop through each card element
    cards.forEach(card => {
        // Check if the card is visible in the viewport
        if (card.getBoundingClientRect().top < window.innerHeight) {
            // Add the "visible" class to apply the fade-in animation
            card.classList.add('visible');
        }
    });
});
