# 02. Creating Instance of Object

Welcome to Module 02 of the **JavaScript OOP Series**! In this module, we explore how to create object instances using JavaScript's built-in `Object()` constructor function.

---

## 🎯 How to Practice This Module (Instruction)

1. **Hands-on Coding:** Open VS Code and type out the code in `index.js` line-by-line rather than copy-pasting.
2. **Run & Inspect:** Run `node index.js` in your terminal and check the output using `console.log()`.
3. **Read the Docs:** If anything is confusing, read through this `README.md` carefully.
4. **Ask AI Tools:** If you get stuck on any concept, copy the code snippet and ask your preferred AI tool to explain it in simple terms.

---

## 📌 What is an Object Instance?

An **Object Instance** is a concrete object created in memory using a constructor function or blueprint.

```javascript
// Creates a new empty object instance in memory
const person = new Object();

```

---

## 🔑 Key Concepts Explained

### 1. Is the `new` Keyword Optional for `Object()`?

Yes, calling `Object()` without `new` still creates an object instance in JavaScript. However, using `new Object()` is **strongly recommended** because:

* It aligns with standard Object-Oriented Programming (OOP) conventions.
* It prepares you for custom Constructor Functions and Classes where `new` is mandatory.

### 2. Using `this` in Methods

As covered in Module 01, using `this` inside methods allows your code to dynamically refer to the current object instance rather than hardcoding variable names.

> ⚠️ **Reminder:** Arrow functions `() => {}` do not have their own `this` binding. Always use regular functions `function() {}` when defining methods that rely on `this`.

---

## 🚀 Accessing Properties

| Access Method | Syntax | Best Use Case | Example |
| --- | --- | --- | --- |
| **Dot Notation** | `object.key` | Known / Static keys | `person.role` |
| **Bracket Notation** | `object["key"]` | Dynamic keys or variable keys | `person[keyName]` |

### Example:

```javascript
// Static key access
console.log(person.role); // "Full-Stack Developer"

// Dynamic key access using variable
const keyName = "city";
console.log(person[keyName]); // "Chittagong"

```

---

## 🛠️ Modifying Properties

```javascript
// Delete a property from the instance
delete person.city;

```

---

## 💻 How to Run the Code

Run the code via Node.js in your terminal:

```bash
node index.js

```
