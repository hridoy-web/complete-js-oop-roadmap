// ==========================================
// Topic: Creating Object Using Constructor Function
// Module: 03
// ==========================================

// ------------------------------------------
// 1. Defining Constructor Function
// ------------------------------------------
function Person(name, age, role, skills, address) {
  // Properties
  this.name = name;
  this.age = age;
  this.role = role;
  this.skills = skills;       // Array
  this.address = address;     // Nested Object
}

// ------------------------------------------
// 2. Prototype Method (Memory Optimization)
// ------------------------------------------
// Attaching method to prototype so all instances share ONE single memory location
Person.prototype.getSummary = function () {
  return `${this.name} is a ${this.age}-year-old ${this.role} from ${this.address.city}, ${this.address.country}. Main Skill: ${this.skills[0]}.`;
};

// ------------------------------------------
// 3. Creating Instances Using 'new' Keyword
// ------------------------------------------
const person1 = new Person(
  "Hridoy Chowdhury",
  21,
  "Full-Stack Developer",
  ["JavaScript", "TypeScript", "React", "Node.js"], // Array
  { city: "Chittagong", country: "Bangladesh" }   // Nested Object
);

const person2 = new Person(
  "John Doe",
  25,
  "Frontend Developer",
  ["HTML", "CSS", "Tailwind"],
  { city: "Dhaka", country: "Bangladesh" }
);

// ------------------------------------------
// 4. Accessing & Inspecting Instances
// ------------------------------------------
console.log("--- Person 1 ---");
console.log("Name:", person1.name);
console.log("First Skill:", person1.skills[0]);
console.log("City:", person1.address.city);
console.log("Summary:", person1.getSummary());

console.log("\n--- Person 2 ---");
console.log("Name:", person2.name);
console.log("City:", person2.address.city);
console.log("Summary:", person2.getSummary());

// ------------------------------------------
// 5. Modifying Properties
// ------------------------------------------
person1.age = 22;
person1.address.city = "Dhaka"; // Updating nested object property

console.log("\n--- Updated Person 1 ---");
console.log("Updated Age:", person1.age);
console.log("Updated City:", person1.address.city);