
const articlebtn=document.querySelector('.articlebtn');
const articlehide=document.querySelector('.section__text_articlehide');

  articlebtn.addEventListener('click', ()=> {
    articlehide.classList.toggle('hide');
    console.log('done');
  })