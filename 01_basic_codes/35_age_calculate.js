//Simple age calculator Get birth year, subtract from current year using `Date()`. 

function calculateAge(birthyear){
    const currentYear= new Date().getFullYear()
    const age=currentYear-birthyear
    return age
}
const birthyear="2004"
console.log(`you are ${calculateAge(birthyear)} years old`)