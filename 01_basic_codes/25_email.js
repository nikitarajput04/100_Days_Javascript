function isValidEmail(email){
    const pattern=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(email)
}
console.log(isValidEmail("test@example.com"))