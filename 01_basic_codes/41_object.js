const person = {
  name: "Alice",
  age: 25,
  city: "Delhi"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
