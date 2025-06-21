const transferMoney=require("./transferMoney");

test ('999 is is valid money',()=>{
  expect(transferMoney(999)).toBe(false);
});

test('1000 is a valid money and you can withdraw ',()=>{
    expect(transferMoney(1000)).toBe(true);
});

test('1200 is a valid money',()=>{
    expect(transferMoney(1200)).toBe(true);
});

test('10001 is invalid money you don not have money in your account ',()=>{
    expect(transferMoney(10001)).toBe(false);
});