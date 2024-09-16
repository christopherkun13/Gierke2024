// Previene que el menú se cierre automáticamente cuando se hace clic en el botón toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    navbarToggle.addEventListener('click', function(event) {
        // Evita el comportamiento predeterminado de cerrar automáticamente
        event.stopPropagation();
        navbarCollapse.classList.toggle('show');
    });

    // Cierra el menú solo al hacer clic fuera del área de navegación
    document.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggle.contains(event.target)) {
            navbarCollapse.classList.remove('show');
        }
    });
});
