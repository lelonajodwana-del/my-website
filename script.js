//=====HAMBURGER MENU=====//
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});
//=====CLOSE MENU WHEN CLICKING A LINK=====//
navLinks.querySelectorAll('a').forEach(link => {
   link.addEventListener('click', () => {
      navLinks.classList.remove('active');
   });
})
//=====SMOOTH SCROLLING=====//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});
  //=====FADE IN ANIMATIONS=====//     
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
   threshold: 0.3,
   rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, observer){
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('appear');
         observer.unobserve(entry.target);
      }
   });
}, appearOptions);
faders.forEach(fader => {
   appearOnScroll.observe(fader);
});
//=====NAVBAR SHADOW ON SCROLL=====//
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
});
  //=====BACK TO TOP BUTTON=====//
const backToTopButton = document.getElementById('Back to Top');
bacToTop.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
})