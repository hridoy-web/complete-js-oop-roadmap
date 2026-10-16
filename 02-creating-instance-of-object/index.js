// ==========================================
// Topic: Creating Instance of Object in JavaScript
// Module: 02
// ==========================================

// ------------------------------------------
// 1. Creating Object Instance using Object() Constructor
// ------------------------------------------
// 'new Object()' creates a new empty object instance.
// Note: 'new' keyword is optional for Object(), but ALWAYS recommended as standard OOP practice.
const person = new Object();

// Adding Properties (Data)
person.name = "John";
person.city = "Chittagong";
person.role = "Full-Stack Developer";
person.isBangladeshi = true;

// Adding Method (Function inside object)
// Note: We use traditional function here so 'this' dynamically refers to the 'person' object.
person.getSummary = function () {
  return `${this.name} is a ${this.role} living in ${this.city}. Is Bangladeshi: ${this.isBangladeshi}`;
};

// ------------------------------------------
// 2. Accessing Properties (Dot Notation vs Bracket Notation)
// ------------------------------------------
console.log("--- Accessing Properties & Methods ---");

// A. Dot Notation (.) - Used for static/known keys (95% common)
console.log("Role (Dot Notation):", person.role); // Output: Full-Stack Developer
console.log("Summary Method:", person.getSummary()); // Output: Summary string

// B. Bracket Notation ([]) - Used for dynamic keys or keys with spaces
console.log("Name (Bracket Notation):", person["name"]); // Output: John

// Dynamic key use-case:
const propertyName = "city";
console.log("Dynamic Access (City):", person[propertyName]); // Output: Chittagong

// ------------------------------------------
// 3. Deleting a Property
// ------------------------------------------
delete person.city;

console.log("\n--- Object After Deleting City ---");
console.log(person);