const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active')
    navmenu.classList.toggle('active')


});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{

    hamburger.classList.remove('active')
    navmenu.classList.remove('active')


}));


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.images img');
 
    let currentImage = 0;
  
    function showImage(index) {
      images.forEach((img, idx) => {
        if (idx === index) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    }
  
    function changeImage(index) {
      currentImage = index;
      showImage(currentImage);
    }
  
    // Initially show the first image
    showImage(currentImage);
  

  
    setInterval(() => {
      currentImage = (currentImage + 1) % images.length;
      showImage(currentImage);
    }, 2000); // Change image every 2 seconds
  });
  
