/**
 * Has the fizzBuzz function
 */
$(function(){

    /**
     * This function takes a number as input and prints the numbers from 1 to N to the console.
     * For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
     * For numbers which are multiples of both three and five print "FizzBuzz".
     * @param num
     */
    var fizzBuzzFunc = function(num){
        console.log("input -> ", num);

        // If valid number
        if(!isNaN(num)){
            var i = 1;
            while(num >= i){
                if ((i % 3 == 0) && (i % 5 == 0)){
                    console.log("FizzBuzz");
                } else if (i % 3 == 0){
                    console.log("Fizz");
                } else if (i % 5 == 0){
                    console.log("Buzz");
                } else{
                    console.log(i);
                }
                ++i;
            }
        }else{ // Input is not a valid number
            console.error("Invalid Input", num);
        }

    }

    fizzBuzzFunc(30);

});