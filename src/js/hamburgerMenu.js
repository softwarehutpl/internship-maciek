/********* activating the hamburger menu **************/
console.info('abc');
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