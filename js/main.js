//troca do menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
//quando clicar no link do menu
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//listener scroll
window.addEventListener('scroll', function () {
  menuOnScroll()
  onScrollBackToTopButton()
  activateMenuAtCurrentSection()
})

//when scroll screen
const header = document.getElementById('header')
function menuOnScroll() {
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
//button back to top
const backToTopButton = document.querySelector('#backToTop')
function onScrollBackToTopButton() {
  if (scrollY > 560) {
    backToTopButton.classList.add('show')
    console.log('teste')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//menu active on section
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){

  const checkpoint = window.pageYOffset + (innerHeight/8)*4;

  for(const section of sections){

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId +']').classList.add('active');
    }else{
      document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active');

    }

  }
}



//
//library:
//
//testimonials slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//scrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700',
  reset: true
})
scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links

`, { interval: 100 }
)

