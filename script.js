let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("resetNow");
let newGame=document.getElementById("newGame");
let playAgain=document.getElementById("playAgain");
let submit=document.getElementById("submitNow");
let form=document.getElementById("forms");
let container=document.getElementById("container");
let result=document.getElementById("result");
let nPlayer1=document.getElementById("player1");
let nPlayer2=document.getElementById("player2");
let winner=document.getElementById("winner");
let turn0=true;
// All winning patterns
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//To check weather the name given by user is correct or not
submit.addEventListener("click",()=>{
     if(nPlayer1.value && nPlayer2.value == ""){
        alert("Enter  players Name");
        }
    else if(nPlayer1.value === nPlayer2.value){
        alert("Enter different player Name");
        }
        else if(/\d/.test(nPlayer1.value) && /\d/.test(nPlayer2.value)){
            alert("Numbers are not allowed");
           
        }
        else{
    form.style.display="none";
    container.style.display="block";
        }
})

//logic to check the player's turn 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
            
        }
        else{
            box.innerText="X";
            turn0=true;
        }
    box.disabled=true;
    
        
        
        checkWinner();
    })
})

//checking winner
const checkWinner=()=>{
    for(let pattern of winningPattern){
        // console.log(pattern);
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;


       if(pos1 && pos2 && pos3 !=""){
        if(pos1==pos2 && pos2 ==pos3){
            // console.log("winner");
            boxes.disabled=true;
            form.style.display="none";
            container.style.display="none";
            result.style.display="block";
            winner.innerText=`Winner is "${pos1}"`;
        }
       }
    }
}


//To reset the game

reset.addEventListener("click",()=>{
    turn0=true;
    enableBoxes();
    console.log("Reset done");
   
})

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   }

   //To play again with same player
   playAgain.addEventListener("click",()=>{
    container.style.display="block";
    result.style.display="none";
    turn0=true;
    enableBoxes();
    console.log("Reset done");
   
})

//To play again with different players
newGame.addEventListener("click",()=>{
    
    enableBoxes();
    form.style.display="flex";
    container.style.display="none";
    result.style.display="none";
})

