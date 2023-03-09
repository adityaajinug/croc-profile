$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin:10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  })
})



const btnMobile = document.getElementById("mobile-nav")
const nav = document.getElementById("nav")
const barsMenu = document.querySelector('.fa-bars')
const markMenu = document.querySelector('.fa-xmark')





btnMobile.onclick = () => {
  nav.classList.toggle('d-block')

}
// document.addEventListener('click', nav.classList.toggle('d-block'))

const header = document.getElementById("header")
if (header) {

  const headerScroll = () => {
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled')
    } else {
      header.classList.remove('header-scrolled')
    }

  }
  window.addEventListener('load', headerScroll)
  document.addEventListener('scroll', headerScroll)
}

