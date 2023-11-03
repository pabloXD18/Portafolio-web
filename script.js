const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('header-with-shadow');
    } else {
        header.classList.remove('header-with-shadow');
    }
});






