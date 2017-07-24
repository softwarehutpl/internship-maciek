import { showDivs } from './pictureSlider';

var active = false;
var slider;
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
