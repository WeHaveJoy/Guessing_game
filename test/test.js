describe("The getMessage function ", function() {
  describe('#constructor()', function() {

    it("should return a message 'Please guess a number between 1 and 100' if no number is entered ", function() {
        var secretNumer= 9;
        assert.equal("Please guess a number between 1 and 100", getMessage("",secretNumer));
      });

    
    it("should find the secret number ", function() {
      var secretNumer  = 56;
      console.log(getMessage(8));
      
      assert.equal("Correct, the secret number is 56!", getMessage(56, 
        secretNumer));
    });
    
   
    it("should return a message 'the number 20 is too low!' ", function() {
        var secretNumer  = 35;
       
        assert.equal("Number 20 is too low!", getMessage(20,secretNumer));
      });


      it("should return a message 'The number 90 is too high!' ", function() {
        var secretNumer  = 66;
       
        assert.equal("Number 90 is too high!", getMessage(90, secretNumer));
      });


      it("should return a message 'the number -5 is out of range!' ", function() {
        var secretNumer  = 10;
        

        assert.equal("Number -5 is out of range!", getMessage(-5, secretNumer));
      });


      it("should return a message 'the number 205 is out of range!' ", function() {
        var secretNumer  = 100;
        
        
        assert.equal("Number 205 is out of range!", getMessage(205, secretNumer));
      });
    });
    });
    
   