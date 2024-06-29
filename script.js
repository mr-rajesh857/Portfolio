document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu if clicked outside on mobile view
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
});


  document.addEventListener("DOMContentLoaded", function () {
    const skillHeaders = document.querySelectorAll(".skills__header");
  
    skillHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const skillContent = this.nextElementSibling;
  
        this.classList.toggle("skills__open");
        skillContent.classList.toggle("active");
      });
    });
  });

  
// // JavaScript to handle the modal functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const modalViews = document.querySelectorAll('.services__modal');
//     const modalBtns = document.querySelectorAll('.services__button');
//     const modalCloses = document.querySelectorAll('.services__modal-close');

//     // Function to show the modal
//     let showModal = function(modalClick) {
//         modalViews[modalClick].classList.add('active-modal');
//     }

//     // Function to hide the modal
//     let hideModal = function() {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal');
//         });
//     }

//     // Add click event listeners to the buttons to show the respective modal
//     modalBtns.forEach((modalBtn, i) => {
//         modalBtn.addEventListener('click', () => {
//             showModal(i);
//         });
//     });

//     // Add click event listeners to the close buttons to hide the modal
//     modalCloses.forEach((modalClose) => {
//         modalClose.addEventListener('click', hideModal);
//     });

//     // Also add an event listener to close the modal when clicking outside of the modal content
//     modalViews.forEach((modalView) => {
//         modalView.addEventListener('click', (event) => {
//             if (event.target === modalView) {
//                 hideModal();
//             }
//         });
//     });
// });


// // Projects

// // Initialize Swiper
// const swiper = new Swiper('.swiper-container', {
//     // Swiper parameters
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 20, // Reduce space between slides
//     centeredSlides: true,
//     slidesPerView: 'auto',

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // Pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     // Add autoplay
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },

//     // Add effect
//     effect: 'coverflow',
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
// });
