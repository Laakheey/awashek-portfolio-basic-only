const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(otherLink => otherLink.classList.remove('active'));
        link.classList.add('active');
    });
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
hamburger.addEventListener('click', function () {
  if(mobileMenu.classList.contains('active')){
    mobileMenu.classList.remove('active')
  } else{
    mobileMenu.classList.add('active')
  }
})


const fadeUp = document.querySelectorAll('.fade-up');
const fadeRight = document.querySelectorAll('.fade-right');
const fadeLeft = document.querySelectorAll('.fade-left');

const fadeUpOptions = {
  threshold: 0.2
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('active');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, fadeUpOptions);

fadeUp.forEach(fader => {
  appearOnScroll.observe(fader);
});

fadeRight.forEach(fader => {
  appearOnScroll.observe(fader);
});

fadeLeft.forEach(fader => {
  appearOnScroll.observe(fader);
});


let form = document.querySelector('form');

form.addEventListener('submit', function(event){
  event.preventDefault();
  form.classList.add('hide');
  document.querySelector('.msg').classList.remove('hide');
  setTimeout(() => {
    if(navigator.onLine){
      document.querySelectorAll('.msg-submit')[0].classList.remove('hide');
    } else {
      document.querySelectorAll('.msg-submit')[1].classList.remove('hide');
    }
    document.querySelector('.loading').classList.add('hide');
  }, 1000);
});


