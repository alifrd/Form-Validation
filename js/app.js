//Variable 
const 
    sndbtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    reset = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');

//Event Listner
function eventListners(){
    //Inticliaze
    document.addEventListener('DOMContentLoaded', appinit)

    //Validate Form 
    email.addEventListener('blur', validateFiled)
    subject.addEventListener('blur', validateFiled)
    message.addEventListener('blur', validateFiled)

    //Send
    sendEmailForm.addEventListener('submit', sendEmail)

    //Reset Button
    reset.addEventListener('click' , resetFrom)
}

eventListners();



//Function

function appinit(){
    sndbtn.disabled = true;
}

function validateFiled(){
    let error ; 

    validateLength(this);

    if(this.type === "email"){
        validateEmail(this);
    }
    
    error = document.querySelectorAll('.error');

    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(error.length === 0 )
            sndbtn.disabled = false;  
    }



}

function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = "green";
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = "#d61010";
        field.classList.add('error');
    }    
}


function validateEmail(field){
    let emailtext = field.value;
    if(emailtext.indexOf('@') !== -1 ){
        field.style.borderBottomColor = "green";
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = "red";
        field.classList.add('error');
    }    
}

function resetFrom(){
    sendEmailForm.reset();
}

function sendEmail(e){
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 3000);
}