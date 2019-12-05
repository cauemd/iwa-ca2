//This code was adapted from https://github.com/marcelus20/IWACA/blob/master/frontend/js
const nameForm = document.querySelector('#nameForm');
const typeForm = document.querySelector('#typeForm');
const sizeForm = document.querySelector('#sizeForm');
const lvlForm = document.querySelector('#lvlForm');
const expForm = document.querySelector('#expForm');

//validates the forms, checking if all of them have some text in them and the lvl and exp forms are only filled with numbers
const isValid = () => {
    if(nameForm.value.trim().length > 3 && lvlForm.value.trim().length > 0 && !isNaN(Number(lvlForm.value.trim())) 
    && expForm.value.trim().length > 0 && !isNaN(Number(expForm.value.trim())) &&  sizeForm.value.trim().length > 3 
    &&  typeForm.value.trim().length > 3){
        
       const btn = document.getElementById("sendBtn");
       btn.disabled = false;
    }
}

nameForm.addEventListener('keyup', isValid);
sizeForm.addEventListener('keyup', isValid);
typeForm.addEventListener('keyup', isValid);
lvlForm.addEventListener('keyup', isValid);
expForm.addEventListener('keyup', isValid);

