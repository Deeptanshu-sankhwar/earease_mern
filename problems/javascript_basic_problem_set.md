
### 3-Day JavaScript Homework Set

#### **Overview:**
This homework set is designed to solidify your understanding of JavaScript. It contains 50 questions across 4 categories: coding, MCQs, output-based questions, and short-answer questions. Use the resources provided at the end if you encounter any difficulties.

---

### **Day 1: Foundations of JavaScript**

#### **Coding Questions (7 Questions)**

1. **Variables and Data Types:** Write a program to declare a variable, assign it a number, and print its square.

2. **If-Else:** Write a program that takes a number as input and prints whether it is positive, negative, or zero.

3. **Array Manipulation:** Create an array of 5 names and print the third name in the array.

4. **Object Creation:** Create an object `book` with properties `title`, `author`, and `year`. Print the `title` property.

5. **Loops:** Write a `for` loop to print all numbers between 1 and 10.

6. **Arrow Functions:** Write an arrow function that takes two numbers as input and returns their product.

7. **Spread Operator:** Use the spread operator to merge two arrays `[1, 2, 3]` and `[4, 5, 6]` and print the result.

#### **MCQs (3 Questions)**

1. Which of the following is not a data type in JavaScript?
   - (A) String
   - (B) Integer
   - (C) Boolean
   - (D) Object

2. What is the result of the following code?
   ```javascript
   console.log(typeof null);
   ```
   - (A) Object
   - (B) Null
   - (C) Undefined
   - (D) None of the above

3. Which of the following is true about `const` variables?
   - (A) They can be reassigned.
   - (B) They must be initialized when declared.
   - (C) They are function-scoped.
   - (D) None of the above.

#### **Output-Based Questions (3 Questions)**

1. What will be the output of the following code?
   ```javascript
   let a = 5;
   let b = "5";
   console.log(a == b);
   console.log(a === b);
   ```

2. Predict the output:
   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   console.log(fruits[3]);
   ```

3. What is the output of this code?
   ```javascript
   console.log(1 + "2" + 3);
   ```

#### **Short Answer Questions (3 Questions)**

1. What is the difference between `==` and `===` in JavaScript?
2. Explain the difference between `var`, `let`, and `const`.
3. What is the purpose of the spread operator (`...`) in JavaScript?

---

### **Day 2: Intermediate JavaScript Concepts**

#### **Coding Questions (7 Questions)**

1. **Logical Operators:** Write a program that takes a number and checks if it is both positive and even.

2. **Functions:** Write a function `greet` that takes a name as input and prints a greeting message.

3. **Destructuring:** Given the object:
   ```javascript
   const student = { name: "John", age: 21, major: "Computer Science" };
   ```
   Destructure the `name` and `major` properties and print them.

4. **Array Destructuring:** Given the array `["red", "blue", "green"]`, use destructuring to assign the first two colors to variables and print them.

5. **Loops:** Write a `while` loop that prints numbers from 10 to 1.

6. **Promises:** Write a promise that resolves with the message "Data loaded" after 2 seconds.

7. **Async/Await:** Write an async function that waits for a promise to resolve with "Operation successful" and then prints the result.

#### **MCQs (3 Questions)**

1. What is the purpose of the JavaScript Event Loop?
   - (A) To execute asynchronous code in parallel.
   - (B) To manage asynchronous tasks in a single-threaded environment.
   - (C) To optimize memory usage.
   - (D) None of the above.

2. Which keyword is used to handle errors in an `async/await` function?
   - (A) `.catch()`
   - (B) `try/catch`
   - (C) `.then()`
   - (D) None of the above.

3. What is the result of the following code?
   ```javascript
   console.log([..."hello"]);
   ```
   - (A) ["h", "e", "l", "l", "o"]
   - (B) ["hello"]
   - (C) ["h", "e", "l"]
   - (D) Syntax Error

#### **Output-Based Questions (3 Questions)**

1. Predict the output:
   ```javascript
   setTimeout(() => console.log("First"), 0);
   console.log("Second");
   ```

2. What is the output of this code?
   ```javascript
   let a = [1, 2, 3];
   let b = a;
   b.push(4);
   console.log(a);
   ```

3. What is the result?
   ```javascript
   function test() {
     console.log(this);
   }
   test();
   ```

#### **Short Answer Questions (3 Questions)**

1. What is the difference between synchronous and asynchronous JavaScript?
2. Explain how the Event Loop works.
3. What is the role of `.then()` in Promises?

---

### **Day 3: Advanced JavaScript Concepts**

#### **Coding Questions (6 Questions)**

1. **Array Methods:** Write a program to filter out even numbers from an array of numbers.

2. **Chaining Promises:** Write a chain of promises that prints "Step 1", "Step 2", and "Step 3" sequentially.

3. **Error Handling:** Write an `async/await` function that catches an error and prints "An error occurred".

4. **Nested Objects:** Create an object with a nested object property and access a value from the nested object.

5. **Logical Operators:** Write a program to check if a number is divisible by both 3 and 5.

6. **Spread Operator:** Clone an object using the spread operator and modify one of its properties.

#### **MCQs (4 Questions)**

1. Which task is added to the microtask queue in the Event Loop?
   - (A) `setTimeout`
   - (B) `Promise.resolve()`
   - (C) `setInterval`
   - (D) DOM Events

2. What is the output of this code?
   ```javascript
   async function foo() {
     return "Hello";
   }
   console.log(foo());
   ```
   - (A) "Hello"
   - (B) Promise {"Hello"}
   - (C) Undefined
   - (D) None of the above

3. Which of the following is not an array method?
   - (A) `.map()`
   - (B) `.filter()`
   - (C) `.reduce()`
   - (D) `.assign()`

4. Which of the following is true about `let`?
   - (A) It is function-scoped.
   - (B) It can be redeclared.
   - (C) It is block-scoped.
   - (D) It does not require initialization.

#### **Output-Based Questions (4 Questions)**

1. Predict the output:
   ```javascript
   console.log(5 + "5" - 3);
   ```

2. What is the result of the following code?
   ```javascript
   let obj = { a: 1 };
   console.log({...obj, b: 2});
   ```

3. Predict the output:
   ```javascript
   console.log("Start");
   setTimeout(() => console.log("Middle"), 0);
   console.log("End");
   ```

4. What is the output?
   ```javascript
   const numbers = [1, 2, 3];
   console.log(numbers.map(num => num * 2));
   ```

#### **Short Answer Questions (4 Questions)**

1. What is the purpose of destructuring in JavaScript?
2. How does `async/await` improve readability of asynchronous code?
3. What are the advantages of using the spread operator?
4. Explain the difference between `null` and `undefined`.

---

### Resources

1. **MDN Web Docs:**
   - [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
   - [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
2. **JavaScript.info:**
   - [Promises](https://javascript.info/promise-basics)
   - [Async/Await](https://javascript.info/async-await)
3. **Videos:**
   - [What the heck is the event loop anyway? (Philip Roberts)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
   - [JavaScript Crash Course for Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)
4. **Interactive Tools:**
   - [Loupe Event Loop Visualizer](http://latentflip.com/loupe/)

Good luck and happy coding!
