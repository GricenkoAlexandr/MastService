
/* categori menu  */

const headercat=document.querySelector('.bottommenu__cat'),
      catlist=document.querySelector('.cat__menu');

      headercat.addEventListener('click', ()=> {
        catlist.classList.toggle('hidemenu');
      })









/* text onoff */

const articlebtn=document.querySelector('.articlebtn'),
      articlehide=document.querySelector('.section__text_articlehide');

  articlebtn.addEventListener('click', ()=> {
    articlehide.classList.toggle('hide');
    console.log('done');
  })


  /* swiper */
  
  const swiper = new Swiper('.swiper__service', {
    // Optional parameters
    direction: 'horizontal',  
      slidesPerView: 3,
      spaceBetween: 36,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });