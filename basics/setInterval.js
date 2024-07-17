
const js=document.querySelector('h1');
const btn=document.querySelector('#start');

const stop=document.querySelector('#stop');

const action=()=>{
    //js.innerHTML="Understanding setInterval()";
    if(timeout){
        console.log("Umar",Date.now());

    }
    
}

let timeout;

btn.addEventListener('click',()=>{
     timeout=setInterval(action,1000);
})

stop.addEventListener('click',()=>{
    clearInterval(timeout);
    timeout=null;
})
