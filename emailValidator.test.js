const isValidEmail = require("./emailValidator");



test('rigbewweleslasie@gmail.com is valid,',()=>{
    expect(isValidEmail('rigbewweleslasie@gmail.com')).toBe(true);
});