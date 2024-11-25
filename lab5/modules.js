// Task 1
const myModule = (function() {
    let privateVar = "I am private"; 
    return {
        getPrivateVar: function() {
            return privateVar; 
        }
    };
})();

export function getPrivateVar() {
    return myModule.getPrivateVar();
}

// Task 2
import _ from 'lodash'; 

export function useLodash() {
    console.log(_.capitalize("hello world")); 
}

// Task 3
import fs from 'fs';

export function writeFile() {
    fs.writeFileSync("hello.txt", "Hello from fs module!"); 
}

export function sayHello() {
    return "Hello from local module!";
}

// Task 4
export function greet() {
    return "Hello from Module 1!";
}

export function farewell() {
    return "Goodbye from Module 2!";
}

export async function loadSurpriseModule() {
    if (Math.random() > 0.5) {
        const { surprise } = await import('./surpriseModule.js');
        return surprise();
    } else {
        return "No surprise module loaded.";
    }
}
