function operación (num1, num2, operador){
    if (operador == "+"){
        return num1 + num2
    }
    if (operador == "-"){
        return num1 - num2
    }
    else{ return "Write a correct operator"}
}

console.log(operación(1, 2, "+"))
console.log(operación(1, 2, "a"))