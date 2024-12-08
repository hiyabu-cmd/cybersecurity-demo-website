// Get elements
const introSection = document.getElementById('intro');
const contentSection = document.getElementById('content');
const findOutMoreButton = document.getElementById('findOutMore');

// When the user clicks the "Find Out More" button
findOutMoreButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Fade out the intro section and slide in content section
    introSection.style.opacity = '0';
    contentSection.style.opacity = '1';
});

// Optional: If you want to trigger the transition on scroll instead of click
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        introSection.style.opacity = '0';
        contentSection.style.opacity = '1';
    }
});
