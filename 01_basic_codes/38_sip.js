function calculateSimpleInterest(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return interest;
}
const principal = 1000;  
const rate = 5;          
const time = 2;        

const simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest is: ${simpleInterest}`);
