let bag=[
    "Unexpected Guests?",
    "Hungry?",
    "Cooking gone wrong?",
    "Late nigth at office?",
    "Movie marathon?",
    "Game night?"
]
let h1=document.getElementById("inter")
h1.innerText=bag[0]
let i=0
setInterval(function(){
  
   if(i===bag.length){
    i=0
    
  }
  h1.innerText=bag[i]
  i++
  
},3000)
//work is in progress
