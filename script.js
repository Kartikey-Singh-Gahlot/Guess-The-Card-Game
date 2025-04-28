const btn = document.querySelector("#btn");
const screen = document.querySelector('#screen');
const arr = ["apple","art","bell","burger","cheese","lantern","monkey_face","rocket","telephone"];
const Obj = {
  "apple" : "url(images/apple.png)",
  "art" : "url(images/art.png)",
  "bell" : "url(images/bell.png)",
  "burger" : "url(images/burger.png)",
  "cheese" : "url(images/cheese.png)",
  "lantern" : "url(images/lantern.png)",
  "monkey_face" : "url(images/monkey_face.png)",
  "rocket" : "url(images/rocket.png)",
  "telephone" : "url(images/telephone.png)"
}
const moves = document.querySelector("#mvs");
const scr = document.querySelector("#scr");
let totalMoves = 3;
let score = 0;
const heading = document.querySelector("#heading");
let boxes = document.querySelectorAll(".opton02");
const choosenBox = document.querySelectorAll(".opton");
let boxNumber;


function reset(){
  score = 0;
  totalMoves = 3;
  btn.textContent = "Start";
  scr.textContent = `Score : ${score}`;
  screen.style.backgroundImage = "none";
  boxes[0].style.backgroundImage = "none";
  boxes[1].style.backgroundImage = "none";
  heading.textContent = "Guess The Card";
  moves.textContent = `Moves : ${totalMoves}/3`;
  btn.removeEventListener("click", reset);
  btn.addEventListener("click",start);
  document.body.style.background = "linear-gradient(45deg, #000428,#23074d,#000428)";

}

function start(){
  btn.textContent = "Start";
  choosenBox[0].style.backgroundColor = "#c31432";
  choosenBox[1].style.backgroundColor = "#c31432";
 

  if(totalMoves>0){
    moves.textContent = `Moves: ${--totalMoves}/3`;
    screen.style.animationName = "shaking";
    choosenBox[0].style.pointerEvents = "auto";
    choosenBox[1].style.pointerEvents = "auto";
    let rndmImage = arr[ Math.floor(Math.random()*9)];
  
  
    setTimeout(()=>{
  
      screen.style.backgroundImage = "";
     
      screen.style.backgroundImage = Obj[rndmImage];
      heading.textContent = rndmImage;
      screen.style.animationName = "none";
      
    },1000);
  
    let randomBox = boxes[Math.floor(Math.random()*2)];
    randomBox.style.backgroundImage = Obj[rndmImage];
    
    
    if(randomBox == boxes[0]){
       boxes[1].style.backgroundImage = "url(images/cross.png)";
       boxNumber = 'A';
    }
    else{
      boxes[0].style.backgroundImage = "url(images/cross.png)";
      boxNumber = 'B';
    }  
  
    choosenBox[0].onclick = (e) =>{
      if(e.target.textContent==boxNumber){
        heading.textContent = "Right";
        scr.textContent = `Score : ${++score}`;
      }
      else{
        heading.textContent = "Wrong";
      }
      choosenBox[0].style.backgroundColor = "#c3143100";
      choosenBox[1].style.backgroundColor = "#c3143100";
      choosenBox[0].style.pointerEvents = "none";
      choosenBox[1].style.pointerEvents = "none";
      btn.textContent = "Next";
    }
  
    choosenBox[1].onclick = (e) =>{
      if(e.target.textContent==boxNumber){
        heading.textContent = "Right";
        scr.textContent = `Score : ${++score}`;
      }
      else{
        heading.textContent = "Wrong";
      }
      choosenBox[0].style.backgroundColor = "#c3143100";
      choosenBox[1].style.backgroundColor = "#c3143100";
      choosenBox[0].style.pointerEvents = "none";
      choosenBox[1].style.pointerEvents = "none";
      btn.textContent = "Next";
    }
  
  }
  else{
     if(score>1){
       heading.textContent = "You Won";
       document.body.style.background = " linear-gradient(90deg,rgba(0, 5, 1, 0.748),green,rgba(0, 5, 1, 0.748))";
     }
     else{
      heading.textContent = "Sorry You Lost";
      document.body.style.background = "linear-gradient(90deg,rgb(5, 0, 0),rgb(128, 0, 0),rgb(5, 0, 0))";
     }
     btn.textContent = "reset";
     btn.removeEventListener("click", start);
     btn.addEventListener("click",reset);
  }
}     


btn.addEventListener("click", start);









