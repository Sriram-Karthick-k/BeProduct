$('h1').flowtype({
  fontRatio: 8
});
/* got to top button functionality */
function gotoUp(){
  window.scrollTo({top:0,behavior:'smooth'})
}
/* carosoule dragging functionality*/
var isDragging = false;
var startPosition=0;
var endPosition=0;
$(".carousel")
.mousedown(function(event) {
    isDragging = false;
    startPosition=event.originalEvent.screenX
})
.mousemove(function(event) {
    isDragging = true;
    endPosition=event.originalEvent.screenX
})
.mouseup(function(event) {
    var wasDragging = isDragging;
    if (wasDragging) {   
        const sensitivityInPx = 5;
        if( Math.floor(startPosition - endPosition) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(startPosition - endPosition) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    }
}
); 
/* changing navbar to sticky */
window.addEventListener("scroll", function () {
  var desktopNav=document.querySelector(".navbar_container")
  desktopNav.classList.toggle("sticky", window.scrollY > 50);
})
/* on scroll animation */
AOS.init({  
  offset: 140, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});
/* smooth scroll for navbar */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* to change nav active */
$(".nav-item").on( "click", function(e) {
  var current=this
  console.log(e)
});