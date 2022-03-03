const userInput = document.querySelector(".userInput");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");

let randomNumber = Math.ceil((Math.random() * 100));


const myTimeout = setTimeout(getMessage, 5000);

 function getMessage() {
    const userNumber = userInput.value;

    if (userNumber == randomNumber) {
        // setTimeout(()=> randomNumber = )
       return `Correct, the secret number is ${userNumber}`;
       
        // await new Promise(resolve => setTimeout(resolve, 1000));
        //  location.reload();
        // return false;
    }

   if (userInput.value == "") {
         return `Please guess a number between 1 and 100`;
    }

    if(userNumber > 100) {
        return `Number ${userNumber} is out of range!`;
    }

    if(userNumber < 1) {
        return `Number ${userNumber} is out of range!`;
    }

    if(userNumber > randomNumber) {
        return `Number ${userNumber} is too high!`;
    }

  if(userNumber < randomNumber) {
        return `Number ${userNumber} is too low!`;
    }

}

guessBtn.addEventListener('click', function(){
    message.innerHTML = getMessage();
})

/** 
async function guessCheck(ranNo) {
    while (true) {

        //    const userInput = prompt("guess number")
        //  alert(randomNumber);


        guessBtn.addEventListener("click", function () {

            if (userInput.value == "") {
                message.innerHTML = "Please guess a number";
                return;
            }


            if (ranNo == userInput) {
                message.innerHTML = `Correct, the secret number is ${ranNo}`;
                await new Promise(resolve => setTimeout(resolve, 1000));
                location.reload();
                return false;
            }

            else if (userInput > ranNo) {
                message.innerHTML = `Your guess is too high`;
            }

            else if (userInput < ranNo) {
                message.innerHTML = `Your guess is too low`;
            }
        }

 
    
     }
}

*/