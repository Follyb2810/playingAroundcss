const cells = document.querySelectorAll('.cell')
const statustext = document.querySelector('#statustext')
const restartbtn = document.querySelector('#restartbtn')

const winCondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options =['','','','','','','','','']

let currentplayer = 'x'
let running = false
initializegame()
function initializegame(){
    cells.forEach(cell =>cell.addEventListener('click',cellclicked))
    restartbtn.addEventListener('click',restartGame)
    statustext.textContent =`${currentplayer}'s turn`
    running=true
}
//!
function cellclicked() {
    const cellindex = this.getAttribute("cellindex");
    if (options[cellindex] !== "" || !running) {
      return;
    }
    updatecell(this, cellindex);
    checkwinner();
    changeplayer();
  }

// function cellclicked() {
//     const cellindex = this.getAttribute("cellindex");
//     if (options[cellindex] != "" || !running) {
//       return;
//     }
//     updatecell(this, cellindex);
//     checkwinner();
//     changeplayer();
//   }
  
  function updatecell(cell, index) {
    options[index] = currentplayer;
    cell.textContent = currentplayer;
  }

function changeplayer(){
    currentplayer =(currentplayer == 'x')  ? '0': "x"
    statustext.textContent= `${currentplayer}'s turn`
}
function checkwinner(){
     let roundwon = false
     for(let i = 0; i < winCondition.length;i++){
         const condition = winCondition[i]
         const cellA=options[condition[0]]
         const cellB=options[condition[1]]
         const cellC=options[condition[2]]
         console.log(cellA)
         console.log(cellB)
         console.log(cellC)


        if(cellA == '' || cellB == '' || cellC == ''){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundwon = true;
            break;
        }
     }
     if(roundwon){
        statustext.textContent= `${currentplayer} win`
        running= false
     }else if(!options.includes(' ')){
        statustext.textContent= `draw`
        running= false
     }else{
        changeplayer()
     }
}
function restartGame(){
    currentplayer ='x'
    options =['','','','','','','','','']
    statustext.textContent =`${currentplayer}'s turn`
    cells.forEach(cell =>cell.textContent =='')
    running = true

}