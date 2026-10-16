# 02. Creating Instance of Object

Welcome to Module 02 of the **JavaScript OOP Series**! In this module, we explore how to create object instances using JavaScript's built-in `Object()` constructor function.

---

## 🎯 How to Practice This Module (Instruction)

1. **Hands-on Coding:** Open VS Code and type out the code in `index.js` line-by-line rather than copy-pasting.
2. **Run & Inspect:** Run `node index.js` in your terminal and check the output using `console.log()`.
3. **Read the Docs:** If anything is confusing, read through this `README.md` carefully.
4. **Ask AI Tools:** If you get stuck on a concept (like `this` or dynamic keys), copy the snippet and ask ChatGPT or Gemini to explain it in simple terms.

---

## 📌 What is an Object Instance?

An **Object Instance** is a concrete object created in memory using a constructor function or blueprint.

```javascript
// Creates a new empty object instance in memory
const person = new Object();
🔑 Key Concepts Explained1. Is new Keyword Optional?Yes, calling Object() without new still creates an object instance. However, using new Object() is strongly recommended because:It aligns with standard Object-Oriented Programming (OOP) syntax.It prepares you for custom Constructor Functions and Classes where new is mandatory.2. Why Use this Instead of Object Name?Inside object methods:JavaScript// ✅ Recommended: Dynamic and scalable
return `${this.name} is a ${this.role}`;

// ❌ Not Recommended: Hardcoded object name
return `${person.name} is a ${person.role}`;
Flexibility: If you reassign the object (const user = person), this automatically points to the new variable reference without breaking.OOP Readiness: When creating multiple instances using Classes later, hardcoding variable names is impossible—this is required.Note on Arrow Functions: Arrow functions () => {} do not have their own this binding. Always use regular functions function() {} for object methods when accessing properties via this.🚀 Accessing PropertiesAccess MethodSyntaxBest Use CaseExampleDot Notationobject.keyKnown / Static keysperson.roleBracket Notationobject["key"]Dynamic keys or variable keysperson[keyName]Example:JavaScript// Static key access
console.log(person.role); // "Full-Stack Developer"

// Dynamic key access using variable
const keyName = "city";
console.log(person[keyName]); // "Chittagong"
🛠️ Modifying PropertiesJavaScript// Delete a property
delete person.city;
💻 How to Run the CodeRun the code via Node.js in your terminal:Bashnode index.js