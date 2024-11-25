import { getPrivateVar, useLodash, sayHello, greet, farewell, loadSurpriseModule, writeFile } from './modules.js';

// Task 1: Demonstrate Module Pattern
console.log("Task 1 Output:", getPrivateVar()); 

// Task 2: Use Lodash
console.log("Task 2 Output:");
useLodash(); 

// Task 3: Demonstrate Local and Core Module Usage
console.log("Task 3 Output:", sayHello()); 
writeFile(); 

// Task 4: Import Modules and Dynamic Import
console.log("Task 4 Output:");
console.log(greet());         
console.log(farewell());      

loadSurpriseModule().then(result => console.log("Dynamic Import Output:", result));
