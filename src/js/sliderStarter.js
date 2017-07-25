/**
 * Function that imports the showDivs function from the pictureSlider.js
 * It activates the slider function after clicking the button.
 * It also hides the slider indicators by changing their visibility
 */

import { showDivs } from './pictureSlider';

var active = false;
var slider;
var spans = document.getElementsByClassName('promo_box__slider-indicator__span');
var sliderButton = document.getElementById('sliderButton');
sliderButton.addEventListener('click', function(e){
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
