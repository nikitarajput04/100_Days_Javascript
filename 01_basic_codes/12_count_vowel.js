function countVowel(str){
    const  vowel ='aeiouAeiou';
     let count=0
    for(let char of str){
        if(vowel.includes(char)){     
            count++
        }
}
return count
}
const text="it is an apple"
const vowelCount=countVowel(text)
console.log(`number of vowels=${vowelCount}`)