var mobileMenu = document.getElementById('menu-icon');
var headerMenu = document.querySelector('.header-menu');
var closeMenu = document.getElementById('menu-icon-close');
var closeSearchBox = document.getElementById('close-search-box');
var searchLightBox = document.getElementById('search-lightbox-wrap');

var searchBtn = document.querySelector('.search-btn');
var overlay = document.querySelector('.body-overlay');
var backToTop = document.querySelector('.back-top');

mobileMenu.onclick = function(e) {
    e.preventDefault();
    headerMenu.classList.add("show-menu");
    overlay.classList.add("body-overlay-on");
    document.body.classList.add('sidemenu-right');
    document.body.classList.add('sidemenu-active');
}
closeMenu.onclick = function(e) {
    e.preventDefault();
    headerMenu.classList.remove("show-menu");
    overlay.classList.remove("body-overlay-on");
    document.body.classList.remove('sidemenu-right');
}
searchBtn.onclick = function(e) {
    e.preventDefault();
    searchLightBox.classList.remove("tf_hide");
    searchLightBox.classList.add("tf_w");
    document.querySelector("input[name='s']").focus();
}
closeSearchBox.onclick = function(e) {
    searchLightBox.classList.add("tf_hide");
}
backToTop.onclick = function(e){
    e.preventDefault();
    window.scrollTo(0, 0);
}
document.onscroll = function() {
    const scrollTop = window.scrollY;
    if (scrollTop > 400){
        backToTop.classList.remove("back-top-hide");
    }else{
        backToTop.classList.add("back-top-hide");
    }
}