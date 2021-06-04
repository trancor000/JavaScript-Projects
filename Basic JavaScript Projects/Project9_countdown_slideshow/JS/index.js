var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // function to be called from html for slide transition
    showSlides(slideIndex += n); // Allows transition to next or previous slide
}

function currentSlide(n) { // function to be called from html for dots/circles
    showSlides(slideIndex = n); // Allows for transition when clicking on dots/circles
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // controls variable from myslides class
    var dots = document.getElementsByClassName("dot"); // controls variable from dot class
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Does not show more than one slide
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Darkens current dot with slide
    }
    slides[slideIndex - 1].style.display = "block"; // Only shows the current slide
    dots[slideIndex - 1].className += " active"; // Always shows the dots
}