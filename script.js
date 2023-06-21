const mainText = document.querySelector(".mainText");
const button = document.querySelector(".button");
const color = ["#B90E0A","#228B22","#4169E1","#F9E076","#2b2b2b"];
const text = ["red","green","blue","yellow","black"];

document.addEventListener('keyup',(e)=>{
  if(e.code == "Space"){
    // let colorCode = Math.floor((Math.random() * 4) + 1);
    let colorCode = Math.floor(Math.random() * 5);
    let textCode = Math.floor(Math.random() * 5)
    mainText.innerHTML = text[textCode];
    mainText.style.color = color[colorCode];
  } 
})

button.innerHTML = "start";
let int;


button.addEventListener('click',(e)=>{
  console.log(button.innerHTML);
  if(button.innerHTML == "start"){
    button.innerHTML = "stop"
     int = setInterval(()=>{
        let colorCode = Math.floor(Math.random() * 5);
        let textCode = Math.floor(Math.random() * 5)
        mainText.innerHTML = text[textCode];
        mainText.style.color = color[colorCode];
    },1500);
  }else{
    button.innerHTML = "start";
    clearInterval(int);
  }
  
})
