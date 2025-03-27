const reverseString = require("./stringUtils");

test ('reverse a string',()=>{
    expect(reverseString('rigbe')).toBe('ebgir');
});

test ('reverse a string',()=>{
    expect(reverseString('HelloWorld')).toBe('dlroWolleH');
});

test('reverse a string',()=>{
    expect(reverseString('hellen')).toBe('nelleh');
});