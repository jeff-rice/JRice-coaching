// On splash-btn click
document.querySelector('.splash-btn').addEventListener('click', function (e) {
    e.preventDefault();
    sessionStorage.setItem('splashShown', 'true');
    document.querySelector('.splash-container').style.display = 'none';

    // Ensure the main content is now visible
    var mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';

    // use setTimeout to allow the display change to take effect before scrolling
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 0);
});


document.addEventListener('DOMContentLoaded', function () {
    var splashShown = sessionStorage.getItem('splashShown');
    if (!splashShown) {
        // Show the splash container if splashShown is not 'true'
        document.querySelector('.splash-container').style.display = 'block';
    } else {
        // Ensure main content is shown
        document.getElementById('main-content').style.display = 'block';
    }
});


