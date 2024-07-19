
const promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(" ****************** ");
        console.log("Async operation is completed");
       
        resolve();
    },1000)
})

promiseone.then(()=>{
    console.log("Promise consumed");
})

//example 2


new Promise((resolve,reject)=>{
    resolve("Promise resolved");
})
.then((message)=>{
    console.log(message);

})

//example 3

new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("Asynchronous operation succeeded");
    }else{
        reject("Asynchronous operation failed");
    }
}).then((success_message)=>{
    console.log(success_message);

})
.catch((error)=>{
    console.log(error);
})


//returning values in promise chaining

new Promise((resolve,reject)=>{
    resolve("Promise one");
    return "Data 1"
})
.then((message1)=>{
    console.log(message1);
    return "Data 2";
})
.then((message2)=>{
    console.log(message2);
    return "Data 3";
})
.then((message3)=>{
    console.log(message3);

}).finally(()=>{
    console.log("It is always executed");
})

//returning promises in chaining
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 1000);
  });
  
  promise
    .then((message) => {
      console.log(message); 
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Step 2 completed");
        }, 1000);
      });
    })
    .then((message) => {
      console.log(message); 
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Step 3 completed");
        }, 1000);
      });
    })
    .then((message) => {
      console.log(message); 
    });
  

