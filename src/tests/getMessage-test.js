module.exports = function getMessage(){

    let randomNumber = Math.ceil((Math.random() * 100));


     function getMessage() {
        const userNumber = userInput.value;
    
        if (userNumber == randomNumber) {
            
           return `Correct, the secret number is ${userNumber}`;
        }
    
       if (userInput.value == "") {
             return `Please guess a number between 1 and 100`;
        }
    
        if((userNumber < 1)  || (userNumber > 100)) {
            return `Number ${userNumber} is out of range!`;
        }
    
        if(userNumber > randomNumber) {
            return `Number ${userNumber} is too high!`;
        }
    
      if(userNumber < randomNumber) {
            return `Number ${userNumber} is too low!`;
        }
    
    }
    

}