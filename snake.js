const gameboard = document.querySelector('#gameboard');
const ctx = gameboard.getContext('2d');
const scoretext = document.querySelector('#scoretext');
const resetbtn = document.querySelector('#resetbtn');
const gamewidth = gameboard.width;
const gameheight = gameboard.height;
const boardbackground ='white'
const snakecolor='lightgreen'
const snakeborder ='black'
const foodcolor='red'
const unitsize =25
let running = false
let xvelocity = unitsize
let yvelocity = 0
let foodx;
let foody;
let score = 0

let snake =[
    {x:unitsize * 4,y:0 },
    {x:unitsize * 3,y:0 },
    {x:unitsize * 2,y:0 },
    {x:unitsize ,y:0 },
    {x:0 ,y:0 },
]

window,addEventListener('keydown',changedirection)
resetbtn.addEventListener('click',resetgame)

gamestart()

function gamestart(){
    running = true
    scoretext.textContent=score
    createfood()
    drawfood()
    nexttick()
}
function nexttick(){
    if(running){
        setTimeout(()=>{
            clearboard()
            drawfood()
            movesnake()
            drawsnake()
            checkgameover()
            nexttick()
        },100)
    }else{
        displaygameover()
    }
}
function clearboard(){
    ctx.fillStyle=boardbackground
    ctx.fillRect(0,0,gamewidth,gameheight)
}
function createfood(){
    function randomfood(min,max){
        const randNum = Math.round((Math.random() *(max -min) + min) / unitsize) * unitsize
        return randNum
    }
    foodx = randomfood(0, gamewidth - unitsize)
    foody = randomfood(0, gamewidth - unitsize)
    console.log(foodx)
}
function drawfood(){
    ctx.fillStyle = foodcolor;
    ctx.fillRect(foodx,foody,unitsize,unitsize)
}
function movesnake(){
    const head ={
        x:snake[0].x + xvelocity,
        y:snake[0].y + yvelocity,
    }
    snake.unshift(head)
    if(snake[0].x == foodx && snake[0].y == foody){
                score +=1;
                scoretext.textContent =score
                createfood()
    }else{
            snake.pop()
        }
    
}
function drawsnake(){
    ctx.fillStyle=snakecolor
    ctx.strokeStyle=snakeborder
    snake.forEach(snakePart =>{
        ctx.fillRect(snakePart.x,snakePart.y,unitsize,unitsize)
        ctx.strokeRect(snakePart.x,snakePart.y,unitsize,unitsize)
    })
}
function changedirection(event){
    const keyPressed =event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOwN = 40;

    const goingUp =(yvelocity == -unitsize)
    const goingDown =(yvelocity == unitsize)
    const goingRight =(xvelocity == unitsize)
    const goingLeft =(xvelocity == -unitsize)

    switch(true){
        case(keyPressed == LEFT && !goingRight && !goingLeft):
        xvelocity =-unitsize;
        yvelocity=0
        break;
        case(keyPressed == UP && !goingDown):
        xvelocity =0;
        yvelocity=-unitsize
        break;
        case(keyPressed == RIGHT && !goingLeft):
        xvelocity =unitsize;
        yvelocity=0
        break;
        case(keyPressed == DOwN && !goingUp):
        xvelocity =0;
        yvelocity=unitsize
        break;
    }
}
function checkgameover(){
    switch(true){
        case (snake[0].x < 0):
            running=false;
            break
        case (snake[0].x >= gamewidth):
            running=false;
            break
        case (snake[0].y < 0):
            running=false;
            break
        case (snake[0].y>= gameheight):
            running=false;
            break
    }
    for(let i = 0; i < snakes.length; i++){
        if(snake[i].x >= snake[0].x && snake[i].y >= snake[0].y){
            running=false
        }

    }
}
function displaygameover(){
    ctx.font='50px MV Boli'
    ctx.fillStyle='black'
    ctx.textAlign= 'center'
    ctx.d=fillText('Game Over',gamewidth/2,gameheight/2)
    running = false;
}
function resetgame(){
    score =0
    xvelocity= unitsize
    yvelocity =0
    snake =[
        {x:unitsize * 4,y:0 },
        {x:unitsize * 3,y:0 },
        {x:unitsize * 2,y:0 },
        {x:unitsize ,y:0 },
        {x:0 ,y:0 },
    ]
 gamestart()
}