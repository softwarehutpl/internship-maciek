
var spans = document.getElementsByClassName('promo_box__slider-indicator__span');

for (var y=0; y<spans.length; y++){
    spans[y].addEventListener('click', function(e){
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

export { showDivs };