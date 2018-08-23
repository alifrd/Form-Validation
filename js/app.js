//Variable 
const sndbtn = document.getElementById('sendBtn');

//Event Listner
eventListners();

function eventListners(){
    document.addEventListener('DOMContentLoaded', appinit)
}


//Function

function appinit(){
    sndbtn.disabled = true;
}