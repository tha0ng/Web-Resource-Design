




//hover to reveal information on text
const h = document.getElementById('h');
const o = document.getElementById('o');
const l = document.getElementById('l');
const b = document.getElementById('b');
const e = document.getElementById('e');
const i = document.getElementById('i');
const n = document.getElementById('n');
const info = document.getElementById('info');

h.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein is a brand of high-quality watercolor paints.';
});

o.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein watercolors are known for their purity and brilliance of color.';
});

l.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein was founded in 1900 in Japan.';
});

b.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein watercolors are available in both tubes and pans.';
});

e.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein uses high-quality pigments in their watercolors.';
});

i.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein watercolors are lightfast and have excellent archival properties.';
});

n.addEventListener('mouseover', () => {
  info.innerHTML = 'Holbein watercolors are often used by professional artists.';
});

//zoom on hover
const imageZoom = document.querySelector('.image-zoom');
const image = imageZoom.querySelector('img');

imageZoom.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = image.getBoundingClientRect();
  const x = (e.clientX - left) / width * 100;
  const y = (e.clientY - top) / height * 100;
  image.style.transformOrigin = `${x}% ${y}%`;
});




//for previous and next buttons that go through sections
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

//for return to top page button
const topBtn = document.getElementById("topBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Scroll to the top of the page when the button is clicked
topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// When the user clicks on the button, scroll to the top of the document
topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});



//zoom image for grid
//const images = document.querySelectorAll('.grid-item img');

//images.forEach(image => {
  //image.addEventListener('mousemove', (e) => {
    //const x = e.pageX - image.offsetLeft;
    //const y = e.pageY - image.offsetTop;
    //const translateX = ((image.offsetWidth - (x * 2)) / 100) * 5;
    //const translateY = ((image.offsetHeight - (y * 2)) / 100) * 5;

    //image.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.2)`;
  //});

  //image.addEventListener('mouseleave', () => {
    //image.style.transform = 'none';
  //});
//});




//image tubeholbein12 fade in
const fadeImage = () => {
  const imageFade = document.querySelector('.image-fade');
  const sectionOffset = document.querySelector('.image-section').offsetTop;
  const slideInAt = sectionOffset + 300;
  const isHalfShown = slideInAt < (window.innerHeight + window.scrollY);
  if (isHalfShown) {
    imageFade.classList.add('active');
  } else {
    imageFade.classList.remove('active');
  }
}

window.addEventListener('scroll', fadeImage);



//image shingansai pan slide
const imagePanSection = document.querySelector(".image-pan-section");
const shingansaipan = document.querySelector(".shingansaipan");

window.addEventListener("scroll", fadeInImage);

function fadeInImage() {
  if (isScrolledIntoView(imagePanSection) && !shingansaipan.classList.contains("active")) {
    shingansaipan.classList.add("active");
  }
}

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}



//image holbein set slide
// Get the position of the image-set-section relative to the top of the page
var imageSetSection = document.querySelector('.image-set-section');
var imageSetSectionTop = imageSetSection.getBoundingClientRect().top;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Check if the top of the window is at or below the top of the image-set-section
  if (window.scrollY + window.innerHeight >= imageSetSectionTop) {
    // Add the 'active' class to the image-set-fade element
    document.querySelector('.image-set-fade').classList.add('active');
  }
});


//image special set 1 slide
const slideIn = document.querySelectorAll('.image-special-section1, .image-special-section2,.image-special-section3');


function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  slideIn.forEach(slide => {
    const slideInAt = (window.scrollY + window.innerHeight) - slide.clientHeight / 2;
    const imageBottom = slide.offsetTop + slide.clientHeight;
    const isHalfShown = slideInAt > slide.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));

checkSlide();


//image hover mouse move zoom holbein review limited set
const zoomImage = document.getElementById("zoom-image");
const container = document.querySelector(".image-review-container");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = x / rect.width * 100;
  const yPercent = y / rect.height * 100;

  zoomImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});



//custom cursor
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
  cursorFollower.style.left = e.pageX + 'px';
  cursorFollower.style.top = e.pageY + 'px';
});

//reviewpaper images
const reviewpapers = document.querySelectorAll('.reviewpaper');

function fadeInReviewpapers() {
  for (let reviewpaper of reviewpapers) {
    if (reviewpaper.getBoundingClientRect().top < window.innerHeight * 0.8) {
      reviewpaper.classList.add('fade-in');
    }
  }
}

window.addEventListener('scroll', fadeInReviewpapers);
window.addEventListener('load', fadeInReviewpapers);








//petals falling
//const screenWidth = window.innerWidth;
//const screenHeight = window.innerHeight;

//const petalContainer = document.querySelector('.petal-container');

//for (let i = 1; i <= 40; i++) {
  //const petal = document.createElement('div');
  //petal.classList.add('petal', `petal-${i}`);
  //petal.style.left = Math.floor(Math.random() * screenWidth) + 'px';
  //petal.style.animationDelay = Math.floor(Math.random() * 7) + 's';
  //petalContainer.appendChild(petal);
//}



//loading screen adjust
// Get the button element
//const btnReturnHome = document.querySelector('.btn-return-home');

// Add a click event listener to the button
//btnReturnHome.addEventListener('click', function(e) {
  // Prevent the default link behavior
  //e.preventDefault();

  // Show the loading screen
  //document.getElementById('loading-screen').classList.add('show');

  // Wait for a short delay to simulate loading time
  //setTimeout(function() {
    // Hide the loading screen
    //document.getElementById('loading-screen').classList.remove('show');

    // Navigate
    //window.location.href = 'https://fonts.google.com/specimen/Comfortaa/';
  //}, 1000);
//});











