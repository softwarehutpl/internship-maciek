/********* activating the hamburger menu **************/
var navButton = document.querySelector('.main-hdr__hamburger-menu');
navButton.addEventListener('click', function(){
    var cl = this.getAttribute('class');
    if (cl == 'main-hdr__hamburger-menu'){
        console.log('dziala');
        this.classList.add('open');
    } else {
        this.classList.remove('open');
    }

});