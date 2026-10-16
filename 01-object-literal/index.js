// ==========================================
// Topic: Object Literal in JavaScript
// ==========================================

// ------------------------------------------
// 1. Creating an Object Literal
// ------------------------------------------
const person = {
  // Properties (Data)
  name: "Hridoy Chowdhury",
  age: 21,
  city: "Chittagong",
  student: true,
  isDeveloper: true,
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Express.js", "MongoDB", "Mongoose"],

  // Method (Function inside object)
  getDeveloperSummary: function () {
    return `${this.name} is a ${this.age}-year-old Full-Stack Developer living in ${this.city}. Tech stack: ${this.skills.join(", ")}.`;
  }
};

// ------------------------------------------
// 2. Accessing Object Properties
// ------------------------------------------

// A. Dot Notation (.) - Used for static keys (When property name is known)
console.log("--- Dot Notation ---");
console.log(person.name); // Output: Hridoy Chowdhury
console.log(person.getDeveloperSummary()); // Output: Summary string

// B. Bracket Notation ([]) - Used for dynamic keys or keys with spaces
console.log("\n--- Bracket Notation ---");
console.log(person["name"]); // Output: Hridoy Chowdhury

// Dynamic key use-case:
const propertyName = "skills";
console.log(person[propertyName]); // Accesses person.skills dynamically

// ------------------------------------------
// 3. Modifying Object Properties (CRUD Operations)
// ------------------------------------------

// Add new properties
person.email = "hridoy@example.com";
person.softSkills = ["Communication", "Teamwork", "Problem-solving", "Adaptability"];

// Update existing properties
person.age = 22;
person.city = "Dhaka";

// Delete properties
delete person.student;

console.log("\n--- Updated Person Object ---");
console.log(person);