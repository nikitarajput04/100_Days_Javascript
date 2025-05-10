 let year=2002
 if((year%4==0&& year%100!=0)||(year%4==0)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is a  not leap year`);

}
//function
function IsLeapYear(year){
    return year%4==0&& year%100!=0 ||year%4==0 
}
console.log(IsLeapYear(2024));

console.log(IsLeapYear(2027));

console.log(IsLeapYear(2022));