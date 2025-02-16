const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
} else {
    body.classList.add('light-theme');
}

// Toggle Theme on Button Click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Save theme preference
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});