let share = document.getElementById('share');
let box = document.querySelector('.box');



share.addEventListener('click',function(event){
    box.classList.toggle('hide');
    event.stopPropagation();
})

document.body.addEventListener('click', function() {
    box.classList.add('hide'); 
  });


  
