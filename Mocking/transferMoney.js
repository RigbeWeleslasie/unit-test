function transferMoney(money){
     return money>=1000 && money<=10000;
}
console.log(transferMoney(1001));
console.log(transferMoney(999));
console.log(transferMoney(9999));
console.log(transferMoney(10001));
console.log(transferMoney(1000));
console.log(transferMoney(10000));

module.exports=transferMoney;
