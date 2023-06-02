function replaceImage(entry) {
    if (entry.isIntersecting) {
        const placeholderImage = entry.target;
        const realImageSrc = placeholderImage.dataset.src;

        // Create a new image element
        const realImage = new Image();

        // Set up an event listener to replace the parent element (h1) once the real image is loaded
        realImage.onload = function () {
            const parentElement = placeholderImage.parentNode;
            parentElement.replaceChild(realImage, placeholderImage);
            observer.unobserve(parentElement);
        };

        // Start loading the real image
        realImage.src = realImageSrc;
    }
}

// Create an intersection observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        replaceImage(entry);
    });
});

// Get all the placeholder images
const placeholderImages = document.querySelectorAll('.placeholder');

// Observe each placeholder image
placeholderImages.forEach((image) => {
    observer.observe(image);
});