function IsPalindrome(str){
    const remove=str.replace(/\s+/g,"");
    const  reversed=remove.split('').reverse().join('')
        return remove==reversed
    
}
console.log(IsPalindrome("prachi "))
