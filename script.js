
// define elements we need from the DOM
const my_status = document.getElementById('status');
const guess = document.getElementById('guess');
const input = document.getElementById('input');
const second_status = document.getElementById('second_status');

// define local variables we need
let userguess = input.value;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCounter = 5;
console.log(randomNumber);



// main function wich do everithing
function play(){
    second_status.innerHTML = guessCounter;
    
    
    // check if the user guess is a number
    guess.addEventListener("click" , () => {
        userguess = input.value;
        if(guessCounter <= 1){
            my_status.innerHTML = "oh no You lose";
            playagin();
            return;
        }
        else if(guessCounter >= 1 ){
            if(userguess < 0 || userguess > 100){
                input.value = "";
                my_status.innerHTML = "Your guess is out of range";
            }else if(userguess == ""){
                my_status.innerHTML = "please enter some number";
            }else{
                if(userguess == randomNumber){
                    guess.innerHTML = "Play Again";
                    my_status.innerHTML = "yeeeaaa you won!";
                    playagin();
                    return;
                }else if(userguess > randomNumber){
                    input.value = "";
                    my_status.innerHTML = "Your guess is too high";
                    guessCounter --;
                }else if(userguess < randomNumber){
                    input.value = "";
                    my_status.innerHTML = "Your guess is too low";
                    guessCounter --;
                }
            }
        }
        second_status.innerHTML = guessCounter;
    });

}


// function to play again
function playagin(){
    second_status.innerText = randomNumber;
    guess.innerHTML = "Play Again";
    input.value = "";
    document.querySelector("h2").childNodes[0].textContent = "the Number was : ";
    
    guess.addEventListener("click" , () => {  
        document.location.reload();   
    });
}


// call the main function for starting the game
play();


