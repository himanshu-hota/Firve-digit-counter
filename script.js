const digits = document.querySelectorAll('h1');
const inputContainer = document.querySelector('#inputContainer');
const startBtn = document.querySelector('#start');
const countdownForm = document.querySelector('form');

let counter=0;
let interval;
let state  = {btnState:"start"};
// Localstorage
// if(!localStorage.getItem('buttonState')){
//     localStorage.setItem('buttonState','start');
// }else{
//     localStorage.setItem('buttonState','start');
// }



const restorePrevious = () =>{
    if(localStorage.getItem('state')){
        savedState = JSON.parse(localStorage.getItem('state'));
    }
}


const startCountdown = (e) => {
    //Prevent default submit behaviour
    e.preventDefault();
    //Get counter time from user
    let countdownTime = e.srcElement[0].value;
    // Form validation
    if(countdownTime === ''){
        alert('Please provide a value!');
        return;
    }
    //Get btn text    
    let btnText = e.srcElement[1].textContent;

    //Change Button text
    if(btnText == "START"){
        startBtn.textContent = "STOP";
    }else{
        startBtn.textContent = "START";
        reset();
    }
    const arrOfDigits = Array.from(String(countdownTime), Number);
    console.log(arrOfDigits);
    interval = setInterval(() =>{
        if(arrOfDigits[4]){
            console.log("hu bhai");
        }
        digits[0].textContent = `${counter}`;
        digits[1].textContent = `${counter}`;
        digits[2].textContent = `${counter}`;
        digits[3].textContent = `${counter}`;
        digits[4].textContent = `${counter}`;
        counter++;
        
    },1000);

    //change START text to STOP
    
    
    // Set localstorage
    localStorage.setItem('state',JSON.stringify(state));

    

}
// Reset counter
const reset = () => {
    counter =0;
    clearInterval(interval);
    digits[0].textContent = "0";
    digits[1].textContent = "0";
    digits[2].textContent = "0";
    digits[3].textContent = "0";
    digits[4].textContent = "0";
}


// Event listeners
// startBtn.addEventListener('click', startCountdown);
countdownForm.addEventListener('submit',startCountdown);
// startBtn.addEventListener('click',reset);

// Onload
restorePrevious();