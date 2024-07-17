const js=document.querySelector('h1');
const btn=document.querySelector('#start');

const stop=document.querySelector('#stop');

const action=()=>{
    js.innerHTML="Understanding setTimeout()";
}

let timeout;

btn.addEventListener('click',()=>{
     timeout=setTimeout(action,2000);
})

stop.addEventListener('click',()=>{
    clearTimeout(timeout);
})
