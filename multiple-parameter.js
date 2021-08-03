function addTwoNumber(num1, num2){
    return num1 + num2;
}

function multiplyTwoNumber(num1, num2){
    return num1 * num2;
}

function subtractTwoNumber(num1, num2){
    return num1 - num2;
}

function divideTwoNumber(num1, num2){
    return num1/num2;
}

function main(){
    var x = 2;
    var y = 6;
    
    var addition = addTwoNumber(x, y);
    var multiplication = multiplyTwoNumber(x, y);
    var subtraction = subtractTwoNumber(y, x);
    var division = divideTwoNumber(y, x);
    
    console.log(addition);
    console.log(multiplication);
    console.log(subtraction);
    console.log(division);
}

main();