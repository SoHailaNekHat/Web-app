searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');

}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}
window.onscroll= () =>{
  searchForm.classList.remove('active');
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }
  else{
document.querySelector('.header .header-2').classList.remove('active');
  }
}
window.onload= () =>{
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }
  else{
document.querySelector('.header .header-2').classList.remove('active');
  }
  fadeOut();
}
function fadeOut() {
  setTimeout(loader, 4000);
}
function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

// books-slider
// var swiper = new Swiper(".books-slider", {
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
 var swiper = new Swiper(".books-slider", {
   //  slidesPerView: 1,
   loop: true,
   spaceBetween: 20,
   grabCursor: true,
   centeredSlides: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   autoplay: {
     delay: 2000,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });


// featured-slider
var swiper = new Swiper(".featured-slider", {
   loop: true,
   spaceBetween: 20,
  grabCursor:true,

  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
 
// arrivals-slider 


var swiper = new Swiper(".arrivals-slider", {
  loop: true,
  spaceBetween: 10,

  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// reviews-slider
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1444: {
      slidesPerView: 4,
    },
  },
});



// blog-slider 

var swiper = new Swiper(".blogs-slider", {
 loop: true, 
 spaceBetween: 10,
  grabCursor: true,
  
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    
  },
});