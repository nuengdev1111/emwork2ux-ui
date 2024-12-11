
let slideIndex = 1; 
let autoPlay = true; 
let templeContainer = document.getElementById('temple');
const slideWidth = 320;
let maxIndex = 4; 
let autoPlayInterval;


function showSlide(n) {

    if(n > maxIndex) n = 1;
    if(n < 1) n = maxIndex;
    slideIndex = n;

    let offset = (slideIndex - 1) * slideWidth;
    templeContainer.style.transform = `translateX(-${offset}px)`;
    

    let dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}


function currentSlide(n) {
    showSlide(n);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000); 
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}


showSlide(slideIndex);

if(autoPlay) {
    startAutoPlay();
}

