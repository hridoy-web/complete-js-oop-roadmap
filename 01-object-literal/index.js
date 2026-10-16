// ==========================================
// Topic: Object Literal in JavaScript
// Module: 01
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
  // Why 'this'? 'this' dynamically refers to the current object (person).
  getDeveloperSummary: function () {
    return `${this.name} is a ${this.age}-year-old Full-Stack Developer living in ${this.city}. Tech stack: ${this.skills.join(", ")}.`;
  }
};

// ------------------------------------------
// 2. Accessing Object Properties
// ------------------------------------------
console.log("--- Accessing Properties ---");

// A. Dot Notation (.) - Used for static/known keys (95% common)
console.log("Name (Dot Notation):", person.name); // Output: Hridoy Chowdhury
console.log("Summary Method:", person.getDeveloperSummary()); // Output: Summary string

// B. Bracket Notation ([]) - Used for dynamic keys or keys with spaces
console.log("Name (Bracket Notation):", person["name"]); // Output: Hridoy Chowdhury

// Dynamic key use-case:
const propertyName = "skills";
console.log("Dynamic Access (Skills):", person[propertyName]); // Accesses person.skills dynamically

// ------------------------------------------
// 3. Modifying Object Properties 
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