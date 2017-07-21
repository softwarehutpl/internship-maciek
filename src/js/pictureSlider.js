
// import slider1 from 'assets/slider-image1.png';
// import slider2 from 'assets/slider-image2.png';
// import slider3 from 'assets/slider-image3.png';
// import slider4 from 'assets/slider-image4.png';

var spans = document.getElementsByClassName('promo_box__slider-indicator__span');

for (x=0; x<spans.length; x++){
    spans[x].addEventListener('click', function(e){
        if (x = 1){
            console.log('s');
        }
        console.log(x);
        showDivs(slideIndex = x);
    })
}

var slideIndex = 1;
showDivs(slideIndex = 1);

function currentDiv(n) {
  showDivs(slideIndex = n);
};

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("promo_box__image");
  var dots = document.getElementsByClassName("promo_box__slider-indicator__span");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " white";
}