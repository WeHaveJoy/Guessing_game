
let assert = require ("assert");
const getMessageTest = require("../tests/getMessage-test");


describe("The getMessage function ", function() {


    it("should return a message 'Please guess a number between 1 and 100' if no number is entered ", function() {
        var input  = "";
        
        assert.equal(input, getMessageTest("Please guess a number between 1 and 100"));
      });

    
    it("should find the secret number ", function() {
      var secretNumer  = 56;
      
      assert.equal(secretNumer, getMessageTest("Correct, the secret number is 56!"));
    });
    
   
    it("should return a message 'the number 20 is too low!' ", function() {
        var secretNumer  = 35;
        var input = 20;
        
        assert.equal(input, getMessageTest("The number 20 is too low!"));
      });


      it("should return a message 'the number 90 is too high!' ", function() {
        var secretNumer  = 66;
        var input = 90;
        
        assert.equal(input, getMessageTest("The number 90 is too high!"));
      });


      it("should return a message 'the number -5 is out of range!' ", function() {
        var secretNumer  = 10;
        var input= -5;

        assert.equal(input, getMessageTest("The number -5 is out of range!"));
      });


      it("should return a message 'the number 205 is out of range!' ", function() {
        var secretNumer  = 100;
        var input = 205;
        
        assert.equal(input, getMessageTest("The number 205 is out of range!"));
      });


    });
    
   