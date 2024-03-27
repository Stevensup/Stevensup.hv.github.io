/**
 * Adds an event listener to the DOMContentLoaded event and toggles the body class between 'day-mode' and 'night-mode' when the toggleButton is clicked.
 */
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('day-mode');
        body.classList.toggle('night-mode');
    });
});
