const menuBtn = document.querySelector('.menu__btn');
const menuclose = document.querySelector('.menu__close');
const menulist = document.querySelector('.menu__list');
const menuTinyShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click',()=>{
    menulist.classList.toggle('menu__list--open')
    menuTinyShadow.classList.toggle('menu--open')
})

menuclose.addEventListener('click',()=>{
    menulist.classList.remove('menu__list--open')
    menuTinyShadow.classList.remove('menu--open')
})

