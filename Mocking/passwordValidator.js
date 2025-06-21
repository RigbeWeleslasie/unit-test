

function isValidPassword(password){
    const isCorrectLength=password.length>=8 && password.length<=16;
    const hasLetter=/[a-zA-Z]/.test(password);
    const hasNumber=/\d/.test(password);
    const isAlphanumeric=/^[a-zA-Z0-9]+$/.test(password);
    return isCorrectLength && hasLetter &&hasNumber&&isAlphanumeric;
}
module.exports=isValidPassword;