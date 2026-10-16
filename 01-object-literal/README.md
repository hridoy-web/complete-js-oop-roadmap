# 01. Object Literal in JavaScript

Welcome to the **Object Literal** module of the JavaScript Object-Oriented Programming (OOP) learning series.

---

## 📌 What is an Object?

An **Object** is a standalone entity with properties and type. It is a collection of key-value pairs where:
* **Key (or Property):** The identifier/name (e.g., `name`, `age`).
* **Value:** The data assigned to the key (String, Number, Array, Boolean, Function, etc.).
* **Method:** A function defined inside an object.

---

## 🚀 Creating an Object Literal

An **Object Literal** is created by wrapping a comma-separated list of key-value pairs inside curly braces `{}`.

```javascript
const person = {
  name: "Hridoy Chowdhury",
  age: 21,
  skills: ["JavaScript", "TypeScript", "Express.js"],
  
  // Method
  getSummary: function () {
    return `${this.name} is ${this.age} years old.`;
  }
};
🔑 Accessing PropertiesAccess MethodSyntaxBest Use CaseExampleDot Notationobject.keyKnown / Static keysperson.nameBracket Notationobject["key"]Dynamic keys or property names with spacesperson[propertyName]Example:JavaScript// Dot Notation
console.log(person.name); // "Hridoy Chowdhury"

// Bracket Notation (Dynamic Key)
const key = "skills";
console.log(person[key]); // ["JavaScript", "TypeScript", "Express.js"]
🛠️ CRUD Operations on ObjectsJavaScript// 1. Add Property
person.email = "hridoy@example.com";

// 2. Update Property
person.age = 22;

// 3. Delete Property
delete person.city;
💻 How to Run the CodeRun the code via Node.js in your terminal:Bashnode index.js