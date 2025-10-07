document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    // Aplica el tema guardado en localStorage al cargar la página
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            darkModeToggle.checked = true;
        }
    }

    // Listener para el botón de modo oscuro
    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scroll para los links del navbar
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Solo previene el comportamiento por defecto si es un ancla en la misma página
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
