const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;
const heroImage = document.getElementById('hero-image');

const imgDia = 'images/dia.png';
const imgNoche = 'images/noche.png';

// Cargar preferencia del tema guardado
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    if (heroImage) {
        heroImage.style.opacity = '0.4';
        setTimeout(() => {
            heroImage.src = (theme === 'dark') ? imgNoche : imgDia;
            heroImage.style.opacity = '1';
        }, 150);
    }
}

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}
