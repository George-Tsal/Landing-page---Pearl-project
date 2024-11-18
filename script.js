
//footer current date(year)
const copyTarget = document.querySelector('#copyTarget');
copyTarget.innerHTML = new Date().getFullYear();

const navbar = document.querySelector('#navbar');

const toTheTopButton = document.querySelector("#btnTop");

// hide navbar on scroll down
let prevScrollPos = window.scrollY;
const showNavbarOnScrollUp = () => {
    const currentScrollPos = window.scrollY;
    console.log(prevScrollPos,currentScrollPos);

  if (prevScrollPos < currentScrollPos) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }

  prevScrollPos = currentScrollPos;
}


//navbar toggle classes
window.addEventListener('scroll', () => {

    showNavbarOnScrollUp();

    if(window.scrollY > 350) {
        navbar.classList.remove('custom-navbar');
        navbar.classList.add('scroll-nav');
    } else {
        navbar.classList.remove('scroll-nav');
        navbar.classList.add('custom-navbar');
    }
    if(window.scrollY > window.innerHeight) {
        toTheTopButton.classList.remove('slide-in');
    } else {
        toTheTopButton.classList.add('slide-in');  
    }
})

toTheTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})