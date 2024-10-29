document.addEventListener('DOMContentLoaded', function() {
    var collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(function(collapsible) {
        var header = collapsible.querySelector('.collapsible-header');
        var content = collapsible.querySelector('.collapsible-content');

        header.addEventListener('click', function() {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Retraer el menú hamburguesa cuando se selecciona una opción
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    });
});

