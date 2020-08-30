var toggleButton = document.querySelector('.toggle-button');
var mobNavbar = document.querySelector('.mob__navbar');
var backOut = document.querySelector('#backdrop');
var openContents = document.querySelector('.content__button__collapse');
var mobListContent = document.querySelector('.mob__list__content');


toggleButton.addEventListener('click', function() {
    mobNavbar.classList.add('open');
    backOut.classList.add('open');
});

backOut.addEventListener('click', function() {
    mobNavbar.classList.remove('open');
    backOut.classList.remove('open');
});

openContents.addEventListener('click', function() {
    mobListContent.classList.toggle('Open');
});

