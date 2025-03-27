const { add, subtract, multiply, divide } = require("./math");

//Addition
test ('adds 2+3 to equal 5',()=>{
    expect(add(2,3)).toBe(5);
});
//Substraction
test('substract 16-8 equal to 8',()=>{
    expect(subtract(16,8)).toBe(8);
});
//multiplication
test('3*9 is equal to 27',()=>{
    expect(multiply(3,9)).toBe(27);
});
//division
 test('9/3 is equal to 3',()=>{
    expect(divide(9,3)).toBe(3);
 });
