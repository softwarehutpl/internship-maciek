
/* function changing the pictures in the slider */ 


/** This part takes the number atrribute of the span element which is the slider indicator
 * and uses the number in the showDivs function to change the selected picture
 */
var spans = document.getElementsByClassName('promo_box__slider-indicator__span');

for (var y=0; y<spans.length; y++){
    spans[y].addEventListener('click', function(e){
        var attr = this.getAttribute('number');
        showDivs(slideIndex = attr);
    })
}
/** Setting the slider in picture 1 position */

var slideIndex = 1;
showDivs(slideIndex = 1);

/**
 * Function changing the pictures in the slider
 * the function selects a picture afrom an array and changes it's display 
 * (fron none to block) depending on the slideIndex. 
 * It also highlights the coresponding slider indicator.
 * 
 */
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