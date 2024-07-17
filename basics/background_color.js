const changecolor=()=>{
    const hex='123456789ABCDEF';
    let color="#";
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
   }

   let start=document.getElementById('start');
   let stop=document.getElementById('stop');
   let interval;

   const start_color=()=>{
    if(interval)
    document.body.style.backgroundColor=changecolor();

   }

   start.addEventListener('click',()=>{
    interval=setInterval(start_color,1000);
    
   })

   stop.addEventListener('click',()=>{
    clearInterval(interval);
    interval=null;
    
   })