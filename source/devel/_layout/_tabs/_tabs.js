document.addEventListener("DOMContentLoaded", function(event) {
    const links = document.querySelector('.tabs__links');
    const contents = document.querySelector('.tabs__contents');

    links && links.addEventListener('click', function (e) {
        let elem = e.target;
        elem = elem.classList.contains('tabs__link') ? elem : elem.parentElement;

        if (elem.classList.contains('tabs__link')) {
            const index = Array.prototype.slice.call(elem.parentElement.children).indexOf(elem);

            const contentIsActive = document.querySelector('.tabs__content_active');
            const contentToActive = contents.children[index];
            const linkIsActive = document.querySelector('.tabs__link_active');
            const linkToActive = elem;

            contentIsActive.classList.remove('tabs__content_active');
            contentToActive.classList.add('tabs__content_active');
            linkIsActive.classList.remove('tabs__link_active');
            linkToActive.classList.add('tabs__link_active');
        }
    })
    contentSize();
    window.addEventListener('resize', contentSize);
    function contentSize() {
        const content = document.querySelectorAll('.tabs__content');
        const arrHeight = [];
        for (let i = 0; i < content.length; i++) {
            arrHeight.push(content[i].clientHeight);
        }
        contents.style.height = Math.max(...arrHeight) + 'px';
    }

});
