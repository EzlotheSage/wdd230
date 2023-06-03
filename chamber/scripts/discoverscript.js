function replaceImage(entry) {
    if (entry.isIntersecting) {
        const placeholderImage = entry.target;
        const realImageSrc = placeholderImage.dataset.src;

        const realImage = new Image();

        realImage.onload = function () {
            const parentElement = placeholderImage.parentNode;
            parentElement.replaceChild(realImage, placeholderImage);
            observer.unobserve(parentElement);
        };

        realImage.src = realImageSrc;
    }
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        replaceImage(entry);
    });
});

const placeholderImages = document.querySelectorAll('.placeholder');

placeholderImages.forEach((image) => {
    observer.observe(image);
});

function calculateDaysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

function displayDaysSinceLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        const currentDate = new Date();
        const daysSinceLastVisit = calculateDaysBetweenDates(
            new Date(lastVisit),
            currentDate
        );

        const daysSinceLastVisitElement = document.getElementById('daysSinceLastVisit');
        daysSinceLastVisitElement.textContent = `Days since last visit: ${daysSinceLastVisit}`;
    }

    localStorage.setItem('lastVisit', new Date());
}

displayDaysSinceLastVisit();
