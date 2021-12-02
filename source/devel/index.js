//#include("./_layout/_mounting.js");
document.addEventListener("DOMContentLoaded", function(event) {
    const links = document.querySelector('.nav__list');
    const contents = document.querySelector('.main');

    links && links.addEventListener('click', function (e) {
        let elem = e.target;
        elem = elem.classList.contains('nav__item') ? elem : elem.parentElement;

        if (elem.classList.contains('nav__item')) {
            const index = Array.prototype.slice.call(elem.parentElement.children).indexOf(elem);

            const contentIsActive = document.querySelector('.grid__active');
            const contentToActive = contents.children[index];
            const linkIsActive = document.querySelector('.nav__link_active');
            const linkToActive = elem;

            contentIsActive.classList.remove('grid__active');
            contentToActive.classList.add('grid__active');
            linkIsActive.classList.remove('nav__link_active');
            linkToActive.classList.add('nav__link_active');
        }
    });
});
