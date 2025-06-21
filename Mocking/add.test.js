const {add}=require("./add");


test ('adds 2+3 to equal 5',()=>{


    const a=2
    const b=3
    const result=add(a,b);
    expect(result).toBe(5);
});