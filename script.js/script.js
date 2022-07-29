
var scrolValue = 0;
transition = document.querySelector(".transition")
body= document.querySelector("body")
typing = document.querySelector(".typing")
window.addEventListener("scroll",()=>{
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if(st > scrolValue){
          typing.style.display = "none";  
          
   }
   else{
       typing.style.display = "flex";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

var Typed = new Typed(".typing", {
    strings:["welcome","Welcome","We care about you","Whatever is worth doing at all, is worth doing well", "Our bodies are a part of our identity"],
    typeSpeed:30,
    backSpeed:30,
    loop:true
})