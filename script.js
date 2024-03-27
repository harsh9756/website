document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('darkmode-toggle');
    const themeStylesheet = document.getElementById('themeStylesheet');

    themeToggle.addEventListener('change', function () {
        const isDarkMode = themeToggle.checked;

        if (isDarkMode) {
            themeStylesheet.setAttribute('href', 'css/dark.css');
        } else {
            themeStylesheet.setAttribute('href', 'css/light.css');
        }
    });
});
