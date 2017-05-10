var lastScrollTop = 0;
window.addEventListener('scroll', function(){
  var currentScroll = window.pageYOffset || document.body.scrollTop;

  if (currentScroll > 100) {
      document.getElementById("nav").classList.remove("active");
  }
  else {
      document.getElementById("nav").classList.add("active");
  }

  if (currentScroll > 620) {
      document.getElementById("portfolio-nav").classList.add("active-nav");
  }
  else {
      document.getElementById("portfolio-nav").classList.remove("active-nav");
  }
    lastScrollTop = currentScroll;

    if (currentScroll > 1520) {
      document.getElementById("portfolio-nav").classList.remove("active-nav");
      document.getElementById("about-nav").classList.add("active-nav");
    }
    else {
        document.getElementById("about-nav").classList.remove("active-nav");
    }

    if (currentScroll > 2040) {
      document.getElementById("about-nav").classList.remove("active-nav");
      document.getElementById("contact-nav").classList.add("active-nav");
    } else {

        document.getElementById("contact-nav").classList.remove("active-nav");
    }
      lastScrollTop = currentScroll;
});
