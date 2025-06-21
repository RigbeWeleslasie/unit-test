function add(a,b){

    if(typeof a!=='number' || b !='number'){
        throw new Error('invalid input');
    }
    return a+b;
}
module.exports={add};


function multiply(a,b){
    return a*b;
}
module.exports={multiply}