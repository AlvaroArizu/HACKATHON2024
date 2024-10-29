document.addEventListener('DOMContentLoaded', function() {
    var collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(function(collapsible) {
        var header = collapsible.querySelector('.collapsible-header');
        var content = collapsible.querySelector('.collapsible-content');

        header.addEventListener('click', function() {
            if (collapsible.classList.contains('active')) {
                collapsible.classList.remove('active');
                content.classList.remove('animate__fadeIn');
                content.classList.add('animate__fadeOut');
                setTimeout(() => content.style.display = 'none', 1000);
            } else {
                content.style.display = 'block';
                collapsible.classList.add('active');
                content.classList.remove('animate__fadeOut');
                content.classList.add('animate__fadeIn');
            }
        });
    });
});

