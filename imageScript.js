  
  
var slideIndex = 0;
  showSlides(slideIndex);

  function scrollSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image");
    var captions = document.getElementsByClassName("caption");
    if (n > slides.length - 1) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < captions.length; i++) {
      captions[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    captions[slideIndex].style.display = "block";
  }
