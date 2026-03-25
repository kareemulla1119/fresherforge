// Navbar toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar ul li a');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});



// ATS code


const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let index = 0;

function startCarousel() {
    index++;
    if (index >= images.length) {
        index = 0; // Reset to the first image
    }
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
}

// Auto slide every 3 seconds
setInterval(startCarousel, 3000);

// Adjust carousel on window resize
window.addEventListener('resize', () => {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
});
