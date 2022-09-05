window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menu = document.getElementById('nav-menu');
function openMenu(){
    menu.style.right = '0'
}
function closeMenu(){
    menu.style.right = '-200px'
}