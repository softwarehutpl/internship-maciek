/********* Function activating the hamburger menu ****
 * using two different methods
 * 1. adding a new class to the nav button which is
 * styled in css files.
 * 2. changing the display style of the searchbar.
 * 
 * */
var navButton = document.querySelector('.main-hdr__hamburger-menu');
var searchBar = document.querySelector('.main-hdr__form');
navButton.addEventListener('click', function(e){
    var cl = this.getAttribute('class');
    if (cl == 'main-hdr__hamburger-menu'){
        this.classList.add('open');
        searchBar.style.display = "flex";
    } else {
        this.classList.remove('open');
        searchBar.style.display = "none";
    }
    
});