// Task one 

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Operation is successfull");
      }, 2000);
    });
  }
  
  // Test the function
  resolveAfter2Seconds().then((message) => {
    console.log(message); // "Operation completed successfully."
  });

  // Task 1.2

  function rejectAfter2Seconds() {
    return new Promise((reject) => {
      setTimeout(() => {
        reject("Operation failed :(");
      }, 2000);
    });
  }
  
  // Test the function
  rejectAfter2Seconds()
    .catch((error) => {
      console.log(error); // "Operation failed."
    });
  

// Task 2

let promise = new Promise((resolve) => {
    resolve(1); // Initial value is 1
  });
  
  promise
    .then((result) => {
      console.log(result); // 1
      return result * 2;  // Multiply by 2
    })
    .then((result) => {
      console.log(result); // 2
      return result + 3;  // Add 3
    })
    .then((result) => {
      console.log(result); // 5
      return result / 2;  // Divide by 2
    })
    .then((result) => {
      console.log(result); // 2.5
    });

    
// Task 3

function randomOperation() {
    return new Promise((resolve, reject) => {
      let success = Math.random() > 0.5;
  
      setTimeout(() => {
        if (success) {
          resolve("Operation successful");
        } else {
          reject("Operation failed");
        }
      }, 2000);
    });
  }
  
  // Testing function
  randomOperation()
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.log(error); 
    });

// Task 4

async function executeWithAwait() {
    const result = await resolveAfter2Seconds(); 
    console.log(result); 
  }
  
  executeWithAwait();

  async function executeWithErrorHandling() {
    try {
      const result = await rejectAfter2Seconds(); 
      console.log(result);
    } catch (error) {
      console.log(error); 
    }
  }
  
  executeWithErrorHandling();
  
  
  