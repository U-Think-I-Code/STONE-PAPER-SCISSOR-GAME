let choice = document.querySelectorAll(".choice");
let you = document.querySelector(".you_div")
let computer = document.querySelector(".computer_div")
let result = document.querySelector(".msg")
let draw = new Audio("draw.mp3");
let winner = new Audio("win.mp3");
let lostS = new Audio("lose.mp3");

function startShake(){
    you.style=" animation: shake 1s linear 3 ;"

    computer.style=" animation: shake 1s linear 3 ;"
}


function stopShake(){
    you.style=" animation: none ;"

    computer.style=" animation: none;"
}


choice.forEach(choice=>{
    choice.addEventListener("click", ()=>{
        result.classList.remove("lost")
        result.classList.remove("win")
        result.classList.remove("draw")
        result.innerText=""
        winner.pause();
        lostS.pause();
        draw.pause();
        you.innerText="👊"
        computer.innerText="👊"
     startShake()
       
     let userChoice = choice.getAttribute("id")
     let option = ["stone","paper","scissor"];
     let comindex = Math.floor(Math.random()*3);
     let computerChoice = option[comindex];
     setTimeout(()=>{
        stopShake()
        playGame(userChoice,computerChoice)
     },2000)  
     
    })
})

function playGame(userChoice,computerChoice){
    if(userChoice==="stone"){
    you.innerText = "👊"
    }
    else if(userChoice==="paper"){
        you.innerText = "🤚"
        }
     else{
        you.innerText = "✌️"
     }   
     if(computerChoice==="stone"){
        computer.innerText = "👊"
        }
        else if(computerChoice==="paper"){
            computer.innerText = "🤚"
            }
         else{
            computer.innerText = "✌️"
         }   

    
    if(userChoice===computerChoice){
      result.innerText="Draw"
      result.classList.add("draw")
      draw.play()
      
    }
    else if(userChoice==="stone" && computerChoice==="scissor" || userChoice==="paper" && computerChoice==="stone" || userChoice==="scissor" && computerChoice==="paper"){
        result.innerText="Win"
        result.classList.add("win")
        winner.play()
    }
    else{
        result.innerText="Lose"
        result.classList.add("lost")
        lostS.play()


    }
}