# 01. Object Literal in JavaScript

Welcome to Module 01 of the **JavaScript OOP Series**! In this module, we explore the fundamentals of **Object Literals**, property access methods, and the crucial `this` keyword.

---

## 🎯 How to Practice This Module (Instruction)

1. **Hands-on Coding:** Open VS Code and type out the code in `index.js` line-by-line rather than copy-pasting.
2. **Run & Inspect:** Run `node index.js` in your terminal and check the output using `console.log()`.
3. **Read the Docs:** If anything is confusing, read through this `README.md` carefully.
4. **Ask AI Tools:** If you get stuck on a concept (like `this` or dynamic keys), copy the snippet and ask ChatGPT or Gemini to explain it in simple terms.

---

## 📌 What is an Object?

An **Object** is a standalone entity with properties and methods. It is a collection of key-value pairs wrapped in curly braces `{}`.

```javascript
const person = {
  name: "Hridoy Chowdhury", // Property
  age: 21,                  // Property
  
  // Method
  getSummary: function () {
    return `${this.name} is ${this.age} years old.`;
  }
};
🔍 Understanding the this Keyword1. Why do we use this?The this keyword inside an object method refers to the current object instance that is executing the code.JavaScript// ✅ Recommended: Using 'this'
getSummary: function () {
  return `${this.name} is ${this.age} years old.`;
}
2. Can we use the object name instead of this?Yes, you can write person.name instead of this.name:JavaScript// ❌ Not Recommended: Hardcoding object name
getSummary: function () {
  return `${person.name} is ${person.age} years old.`;
}
3. Why is this much better than hardcoding object names?Flexibility: If you assign the object to a new variable (e.g., const user = person), hardcoded person.name will break if person changes or becomes null. But this.name will automatically adapt to user.name.Scalability in OOP: When you create blueprints (Classes or Constructor Functions) to generate multiple objects (user1, user2, user3), you cannot hardcode variable names inside the blueprint. Using this is the only way to refer to the object dynamically created at runtime.⚠️ Note on Arrow Functions: Arrow functions () => {} do not have their own this binding. They inherit this from the parent lexical scope. Always use regular functions function() {} when defining methods inside object literals if you plan to use this.🔑 Accessing PropertiesAccess MethodSyntaxBest Use CaseExampleDot Notationobject.keyKnown / Static keysperson.nameBracket Notationobject["key"]Dynamic keys or property names with spacesperson[keyName]Example:JavaScript// Dot Notation
console.log(person.name); // "Hridoy Chowdhury"

// Bracket Notation (Dynamic Key)
const keyName = "skills";
console.log(person[keyName]); // ["HTML", "CSS", "JavaScript"]
🛠️ CRUD Operations on ObjectsJavaScript// 1. Add Property
person.email = "hridoy@example.com";

// 2. Update Property
person.age = 22;

// 3. Delete Property
delete person.student;
💻 How to Run the CodeRun the code via Node.js in your terminal:
Bash
node index.js