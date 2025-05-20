const arr=[1,2,3,4,5]
let sum=0
for(let i=0;i<arr.length;i++){
    sum= sum+arr[i]}
console.log("sum of array",sum)

const arr1 = [1, 2, 3, 4, 5 ,8];
const initialValue=0
const sum1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log("sum of array", sum1);
