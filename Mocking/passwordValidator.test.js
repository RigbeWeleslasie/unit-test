const isValidPassword=require("./passwordValidator");

describe('password Validation',()=>{
    test('valid password',()=>{
        expect (isValidPassword('abcde12345')).toBe(true);
    })
});