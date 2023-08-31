const playertest = document.querySelector('#playertext')
const computertest = document.querySelector('#computertext')
const resulttext = document.querySelector('#resulttext')

const choicebtn = document.querySelectorAll('.choicebtn')

let player;
let computer;
let result;

choicebtn.forEach(button => button.addEventListener('click',()=>{
    player = button.textContent
    console.log(button)
    computerTurn()
    // playertest.textContent =`player :${player}`
    computertest.textContent =`computer :${computer}`
    playertest.textContent =`player :${player}`
    resulttext.textContent = checkwinner()
}))

function computerTurn(){
    const randnum = Math.floor(Math.random() * 3) + 1
        switch(randnum){
            case 1:
                computer ='rock'
                break
            case 2:
                computer ='paper'
                break
            case 3:
                computer ='scissors'
                break
        }
}


function checkwinner(){
    if(player == computer){
        return 'draw'
    }else if(computer == 'rock'){
        return (player == 'paper')?'you win':'you lose'
    }else if(computer == 'scissors'){
        result (player == 'rock')?'you win':'you lose'
    }
}