const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const color = parseInt(star.getAttribute('data-value'));
        activeStar(color);
    })
})

function activeStar(color) {
    stars.forEach((star, i) => {
        if (i < color) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    })
}