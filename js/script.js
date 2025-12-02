const toggleBtn = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;
const heroImage = document.getElementById('hero-image');

const imgDia = 'images/dia.png';
const imgNoche = 'images/noche.png';

// 1. Cargar preferencia o defecto 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Lógica del Icono
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Cambio de imagen con suavidad
    if (heroImage) {
        heroImage.style.opacity = '0.5';
        setTimeout(() => {
            heroImage.src = (theme === 'dark') ? imgNoche : imgDia;
            heroImage.style.opacity = '1';
        }, 200);
    }
}

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}