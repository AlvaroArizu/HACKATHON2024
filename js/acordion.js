document.addEventListener('DOMContentLoaded', function() {
    var acc = document.querySelectorAll('.accordion-header');
    acc.forEach(function(header) {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            var body = this.nextElementSibling;
            if (body.style.display === 'block') {
                body.style.display = 'none';
            } else {
                body.style.display = 'block';
            }
        });
    });
});

