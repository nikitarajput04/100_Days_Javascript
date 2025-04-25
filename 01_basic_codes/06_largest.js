function findlargest(a,b,c){
    let largest
    if(a>=b&&a>=c){
        largest = a

    }else if(b>=a&&b>=c){
        largest = b
    }else{
        largest = c
    }
    return largest

}
console.log((findlargest(34,33,45)))
    


//math.max
function findlargest(a,b,c){
    return Math.max(a,b,c)
}
console.log(findlargest(23,34,455))