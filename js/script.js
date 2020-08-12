const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const link = document.querySelector('.link');
const btn = document.querySelector('.button');

burger.addEventListener('click', function() {
    header.classList.add('none');
    menu.classList.add('active');
});

close.addEventListener('click', function() {
    menu.classList.remove('active');
    header.classList.remove('none');
});

link.addEventListener('click', function() {
    menu.classList.remove('active');
    header.classList.remove('none');
});

btn.addEventListener('click', function() {
    menu.classList.remove('active');
    header.classList.remove('none');
});