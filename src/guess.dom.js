const userInput = document.querySelector(".userInput");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");

let randomNumber = Math.ceil((Math.random() * 100));



function getMessage() {
    const userNumber = userInput.value;

    console.log({ userNumber, randomNumber });

    if (userNumber == randomNumber) {

        return `Correct, the secret number is ${userNumber}`;
    }

    if (userInput.value == "") {
        return `Please guess a number between 1 and 100`;
    }

    if ((userNumber < 1) || (userNumber > 100)) {
        return `Number ${userNumber} is out of range!`;
    }

    if (userNumber > randomNumber) {
        return `Number ${userNumber} is too high!`;
    }

    if (userNumber < randomNumber) {
        return `Number ${userNumber} is too low!`;
    }

}

function NewGame() {
    setTimeout(() => {
        randomNumber = Math.ceil((Math.random() * 100));
        message.innerText = `A new game has started`;

    }, 5000)
}

userInput.addEventListener('keyup', function () {
    if (event.keyCode === 13) {
        // event.preventDefault();
        if (getMessage().charAt(0).toLowerCase() == `c`) {
            message.innerText = getMessage();
            // theTime();
            NewGame();

        } else {
            message.innerText = getMessage();
        }
    }
})

guessBtn.addEventListener('click', function () {
    if (getMessage().charAt(0).toLowerCase() == `c`) {
        message.innerText = getMessage();
        //    theTime();
        NewGame();
    } else {
        message.innerText = getMessage();
    }
})


