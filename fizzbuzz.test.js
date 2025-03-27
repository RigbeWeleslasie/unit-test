const fizzBuzz = require("./fizzbuzz");

test ('9 is fuzz number',()=>{
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});