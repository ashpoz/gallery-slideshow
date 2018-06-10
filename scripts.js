// Gallery Slideshow

// vars
const slideshow = document.getElementById('slideshow'),
      slides = document.querySelectorAll('.slide_container'),
      galleryImg = document.querySelectorAll('.gallery_image'),
      slideImg = document.querySelectorAll('.slide'),
      prevButton = document.getElementById('prev'),
      nextButton = document.getElementById('next'),
      navButtons = document.querySelectorAll('.slideshow_nav--buttons'),
      closeButton = document.getElementById('close-modal'),
      gallery = Array.from(galleryImg);

let globalIndex = 0, 
    slideIndex;

// add click event to all gallery images
gallery.forEach(function (element, slideIndex) {
	element.addEventListener('click', function(e) {
			e.preventDefault();
      // show slideshow
			slideshow.style.display = 'block';
      // show clicked image
			slideImg[slideIndex].style.display = 'block';
      // set global index to slide index
			globalIndex = slideIndex;
	});
});

// event Listeners
closeButton.addEventListener('click', function() {
  // hide slideshow
	slideshow.style.display = 'none';
  // reset global index to 0
	globalIndex = 0;
  // hide all slides
  for (var i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = 'none';
	}
});

// hide slideshow on esc key
document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		slideshow.style.display = 'none';
		globalIndex = 0;
		for (var i = 0; i < slideImg.length; i++) {
			slideImg[i].style.display = 'none';
		}
	}
};

// add click to slideshow navs
navButtons.forEach(function (element, slideIndex) {
	element.addEventListener('click', function() {
		const next = nextButton.id;
		const prev = prevButton.id;
		for (var i = 0; i < slideImg.length; i++) {
			slideImg[i].style.display = 'none';
		}
		if (globalIndex < (slideImg.length - 1) && element.id == next) {
			globalIndex++;
			slideImg[globalIndex].style.display = 'block';
		} else if (globalIndex <= (slideImg.length) && element.id == prev && globalIndex >= 1) {
			globalIndex--;
			slideImg[globalIndex].style.display = 'block';
			console.log(globalIndex);
		} else if (globalIndex >= (slideImg.length - 1)) {
			globalIndex = 0;
			slideImg[globalIndex].style.display = 'block';
		} else if (globalIndex == 0) {
			globalIndex = slideImg.length - 1;
			slideImg[globalIndex].style.display = 'block';
		}
	});
});