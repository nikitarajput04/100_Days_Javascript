const person = {
  name: "Jhalak",
  age: 21,
  city: "Harda"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
