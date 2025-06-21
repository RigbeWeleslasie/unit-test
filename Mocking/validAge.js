function isValidage(age){
 return age>=18 && age<=60
}
console.log(isValidage(17));
console.log(isValidage(18));
console.log(isValidage(19));
console.log(isValidage(59));
console.log(isValidage(60));
console.log(isValidage(61));

module.exports=isValidage;