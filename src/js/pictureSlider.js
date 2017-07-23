
// import slider1 from 'assets/slider-image1.png';
// import slider2 from 'assets/slider-image2.png';
// import slider3 from 'assets/slider-image3.png';
// import slider4 from 'assets/slider-image4.png';


// var slider;

// function startSlider(){
//   slider = setInterval(showDivs, 3000);
// }


var sliderButton = document.getElementById('sliderButton');
var active = false;
var slider;

// function startSlider(){
//   slider = setInterval(showDivs, 3000);
// }
var spans = document.getElementsByClassName('promo_box__slider-indicator__span');
sliderButton.addEventListener('click', function(e){
    console.log('jestem');
    if (active){
        clearInterval(slider);
        active = false;

        for (var z = 0; z<spans.length; z++){
        spans[z].style.visibility = 'hidden';
      };
    } else {
        slider = setInterval(showDivs, 3000);
        active = true;
                for (var z = 0; z<spans.length; z++){
        spans[z].style.visibility = 'visible';
      };
    }
})






// var spans = document.getElementsByClassName('promo_box__slider-indicator__span');

for (x=0; x<spans.length; x++){
    spans[x].addEventListener('click', function(e){
        var attr = this.getAttribute('number');
        showDivs(slideIndex = attr);
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
  
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  for (i = 0; i < spans.length; i++) {
     spans[i].className = spans[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";  
  spans[slideIndex-1].className += " active";
  slideIndex ++;
  if (slideIndex>x.length){ slideIndex = 1};
}