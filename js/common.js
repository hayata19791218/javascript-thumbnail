window.addEventListener('scroll',function (){

  const textFade = document.querySelector('.bgappearTrigger');
  
  const rect1 = textFade.getBoundingClientRect().top;
  const scroll = window.pageYOffset;
  const offset1 = rect1 + scroll;
  const windowHeight = window.innerHeight; 
  
  if(scroll > offset1 - windowHeight){
    textFade.classList.add('textAppear');
  }
  else{
    textFade.classList.remove('textAppear');
  }

  const backgroundFade = document.querySelector('.bgRLextendTrigger');
  const rect2 = backgroundFade.getBoundingClientRect().top;
  const offset2 = rect2 + scroll;
  const windowHeight2 = window.innerHeight; 
  
  if(scroll > offset2 - windowHeight2){
    backgroundFade.classList.add('backgroundExtend');
  }
  else{
    backgroundFade.classList.remove('backgroundExtend');
  }


});
