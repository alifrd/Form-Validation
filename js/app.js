//Variable 
const sndbtn = document.getElementById('sendBtn');

//Event Listner
function eventListners(){
    document.addEventListener('DOMContentLoaded', appinit)
}

eventListners();



//Function

function appinit(){
    sndbtn.disabled = true;
}