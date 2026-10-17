# 03. Object Constructor in JavaScript

Welcome to Module 03 of the **JavaScript OOP Series**! In this module, we explore how to create reusable object blueprints using **Constructor Functions**, handle complex data structures (Arrays & Nested Objects), and optimize memory using **Prototypes**.

---

## 🎯 How to Practice This Module (Instruction)

1. **Hands-on Coding:** Open VS Code and type out the code in `index.js` line-by-line rather than copy-pasting.
2. **Run & Inspect:** Run `node index.js` in your terminal and check the output using `console.log()`.
3. **Read the Docs:** If anything is confusing, read through this `README.md` carefully.
4. **Ask AI Tools:** If you get stuck on any concept, copy the code snippet and ask your preferred AI tool to explain it in simple terms.

---

## 📌 What is a Constructor Function?

A **Constructor Function** is a regular JavaScript function used as a blueprint to create multiple objects with the same structure and behavior.

```javascript
// Blueprint (Constructor Function)
function Person(name, age, role, skills, address) {
  this.name = name;
  this.age = age;
  this.role = role;
  this.skills = skills;       // Array
  this.address = address;     // Nested Object
}

```

---

## 💡 When to Use vs. When NOT to Use

### 🟢 When to Use Constructor Functions:

* **Multiple Similar Objects:** When you need to create multiple objects with the same properties and structure (e.g., users, products, orders).
* **Code Reusability (DRY Principle):** To avoid writing duplicate object literals repeatedly.
* **Understanding JS Prototypes:** When learning or building libraries that require deep prototype manipulation.

### 🔴 When NOT to Use Constructor Functions:

* **Single Utility Objects:** If you only need a single object to hold configuration or helper functions, use a simple **Object Literal** (`{}`).
* **Modern Large-Scale App Development:** In modern JavaScript/TypeScript (Node.js, React, NestJS), **ES6 Classes** (`class Person {}`) are preferred for better syntax, readability, and access control.

---

## ⚠️ Must-Know Rules for Constructor Functions

1. **PascalCase Naming:** Always start the function name with a Capital Letter (e.g., `Person`, `Product`) so developers know it requires the `new` keyword.
2. **The `new` Keyword is Mandatory:** Calling a constructor function without `new` will NOT create an object instance. Instead, `this` will point to the global object (`window` or `global`), causing severe bugs.
3. **Never Use Arrow Functions as Constructors:** Arrow functions `() => {}` do not have their own `this` or prototype chain. Calling `new` on an arrow function throws a `TypeError`.
4. **Methods Belong on Prototypes:** Always attach methods to `Constructor.prototype` instead of putting them inside the constructor body to save memory.

---

## 🚀 Memory Optimization with Prototype (Pro-Tip)

### ❌ The Problem (Inside Constructor):

If you write methods inside the constructor, every `new` instance allocates a new copy of the function in RAM:

```javascript
function Person(name) {
  this.name = name;
  this.sayHi = function() { ... }; // Bad: Creates 1000 copies for 1000 instances
}

```

### ✅ The Solution (Using Prototype):

Attaching methods to the prototype ensures **all instances share ONE single memory reference**:

```javascript
function Person(name) {
  this.name = name;
}

// Memory Efficient: All instances share this method
Person.prototype.getSummary = function () {
  return `${this.name} is a ${this.role} living in ${this.address.city}.`;
};

```

---

## 🔑 Accessing Nested Objects & Arrays

```javascript
const person1 = new Person(
  "Hridoy Chowdhury",
  21,
  "Full-Stack Developer",
  ["JavaScript", "TypeScript"],
  { city: "Chittagong", country: "Bangladesh" }
);

// Accessing Array Item
console.log(person1.skills[0]); // "JavaScript"

// Accessing Nested Object Property
console.log(person1.address.city); // "Chittagong"

```

---

## 🛠️ Is Constructor Function Relevant in 2026?

**YES!** Although ES6 `class` syntax is the industry standard today, classes are just **syntactic sugar** built on top of Constructor Functions and Prototypes. Knowing this topic thoroughly prepares you for technical interviews and deeper JavaScript mastery.

---

## 💻 How to Run the Code

Run the code via Node.js in your terminal:

```bash
node index.js

```