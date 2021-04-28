// onscroll behavior
AOS.init();
const navbar = document.querySelector('.navbar');
window.onscroll = function() {
  
  if(this.scrollY > 50)
    navbar.classList.add('bg-light')
  else if(!navbar.classList.contains('open')){
    navbar.classList.remove('bg-light')
  } 
}
document.querySelector('.navbar-toggler').onclick = function() {
  if(!navbar.classList.contains('open')) {
          navbar.classList.add('bg-light');
          navbar.classList.add('open');
  }
  else {
    if(this.scrollY > 50)
    navbar.classList.add('bg-light')
    navbar.classList.remove('open');
  }
}


