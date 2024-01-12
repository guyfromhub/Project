// Array of objects representing information about persons
let persons = [
  {
    name: "John",
    age: 25,
    city: "New York",
  },
  {
    name: "Alice",
    age: 30,
    city: "San Francisco",
  },
  {
    name: "Bob",
    age: 22,
    city: "Los Angeles",
  },
];

// Accessing and displaying information from the array
for (let i = 0; i < persons.length; i++) {
  console.log("Name: " + persons[i].name);
  console.log("Age: " + persons[i].age);
  console.log("City: " + persons[i].city);
}
