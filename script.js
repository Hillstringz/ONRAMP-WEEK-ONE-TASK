let Dname = document.getElementById('Myname');
let email = document.getElementById('MyEmail');
let activation = document.getElementById('activate');
let cb = document.getElementById('accept');
let submit = document.querySelector(".submit")

submit.addEventListener('click', validate);

function validate(e){
    e.preventDefault();
    if(Dname.value == ""){
       document.getElementById('screen').innerText='USERNAME MUST BE FILLED OUT!!!';
       return;
    } if(email.value == ""){
        document.getElementById('screen').innerText='EMAIL MUST BE FILLED OUT!!!';
        return;
    } if(activation.value == ""){
       document.getElementById('screen').innerText='PLEASE FILL OUT THE ACTIVATION!!!';
       return;
    }   if(cb.checked == false){
        document.getElementById('screen').innerText='PLEASE TICK THE PRIVACY CHECK!!!';
        return;
    }
}
