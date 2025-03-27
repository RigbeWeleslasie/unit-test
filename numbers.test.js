const isEven = require("./numbers");


test('12 is even',()=>{
    expect(isEven(12)).toBe(true);
});