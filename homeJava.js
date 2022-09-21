let slideIndex = 0;


const scale = [  /*Animation for slideshow dots when clicked*/
  { transform: 'scale(1.5)' },
  { transform: 'scale(1)' }
];
showSlides(slideIndex);



function showSlides(n){
	let dots = document.getElementsByClassName("dot"); /*Array of dots*/
	let slides = document.getElementsByClassName("slide"); /*Array of slides*/
	slideIndex = n; /*Slide number*/
	for(let i=0; i < dots.length; i++){
		dots[i].className = "dot";
		slides[i].style.display = "none";
	}
	dots[n].className += " active";
	slides[n].style.display = "block";
	dots[n].animate(scale, 300);
}