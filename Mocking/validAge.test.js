const isValidage=require("./validAge");

test ('61 is valid age',()=>{
  expect(isValidage(61)).toBe(false);
});