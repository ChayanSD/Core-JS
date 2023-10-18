const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
switch (e.target.id) {
    case 'grey':
      body.style.backgroundColor = 'grey';
      break;
    case 'white':
      body.style.backgroundColor = 'white';
      break;
    case 'blue':
      body.style.backgroundColor = 'blue';
      break;
    case 'yellow':
      body.style.backgroundColor = e.target.id;
      break;
    default:
      body.style.backgroundColor= e.target.id;
      break;
  }
  
   });
});