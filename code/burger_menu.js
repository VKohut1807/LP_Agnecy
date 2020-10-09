"use strict";
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger_button');
    let links = menu.find('.burger_link');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('menu_burger_action');
        if (menu.hasClass('menu_burger_action')) {
            $("body").css('overflow', 'hidden');
        } else {
            $("body").css('overflow', 'visible');
        }
    }
}
burgerMenu('.menu_burger');