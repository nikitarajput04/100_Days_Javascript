function addition(num1,num2){
    return num1+num2
}
function subtraction(num1,num2) {
    return num1 - num2
}   
let operation='*'
if(operation== "+"){
    console.log(addition(1,1))
}else if(operation=="-"){
    console.log(subtraction(3,1))
}else{
    console.log("invalid operation")
}