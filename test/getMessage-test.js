 function getMessage(_input, randomNumber){


    
        if (_input == randomNumber) {
           return `Correct, the secret number is ${_input}!`;
        }
    
       if (_input == "") {
             return `Please guess a number between 1 and 100`;
        }
    
        if((_input < 1)  || (_input > 100)) {
            return `Number ${_input} is out of range!`;
        }
    
        if(_input > randomNumber) {
            return `Number ${_input} is too high!`;
        }
    
      if(_input < randomNumber) {
            return `Number ${_input} is too low!`;
        }
  
}


