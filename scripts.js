const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    {
        root.setAttribute('data-theme', savedTheme);
    }
}
function toggleTheme() {
    {
        const current = root.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
}