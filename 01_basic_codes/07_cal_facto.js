let n =5

for(let i=1;i<=n;i++){
    let fact=1;
    
    for(let j=1;j<=i;j++){
     fact=fact*j
    }
    console.log(`The factorial of ${i} is ${fact}`)
}

