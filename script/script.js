function changeImage(src, element) {
    // Change the big image source
    document.querySelector('.bigImg img').src = src;
    
    // Remove the active class from all small images
    document.querySelectorAll('.smallImgs div').forEach(div => {
        div.classList.remove('active');
    });
    
    // Add active class to clicked small image div
    element.classList.add('active');
}

//Opens menu-wrapper when we click on the "MENU" on mobile screens
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const menuItems = document.querySelectorAll('.menu-wrapper .menu > li');
    const menuSubItems = document.querySelectorAll('.menu-wrapper .menu > li span');

    menuButton.addEventListener('click', function() {
        menuWrapper.classList.toggle('open');
    });

    menuSubItems.forEach(function(span) {
        span.addEventListener('click', function() {
            this.parentElement.classList.toggle('open');
        });
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.forEach(function(sibling) {
                sibling.classList.remove('open');
            });
            this.classList.add('open');
        });
    });
});
