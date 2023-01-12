let count =0
let saved=""
document.getElementById("count-el").innerText=count 
let welcome=document.getElementById("welcome-el")
console.log(count)
 function inc(){
    count+=1
    document.getElementById("count-el").innerText=count
 }

 function dec(){
    count-=1
    document.getElementById("count-el").innerText=count
 }
 function save(){
   document.getElementById("count-el").innerText=0
  
   saved=count
   // welcome.innerText+=saved+" ,"
      welcome.textContent+=saved+" ,"//to save spaces 
       count=0 
console.log(count)
 }
 welcome.innerText="previos entires: "

