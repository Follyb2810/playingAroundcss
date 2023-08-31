const gameboard =document.querySelector('#gameboard');
const ctx = gameboard.getContext('2d');
const scoretext = document.querySelector('#scoretext');
const resetbtn = document.querySelector('#resetbtn');
const gameWidth=gameboard.width;
const gameHeight=gameboard.height;
const boarderBackground ='green';
const paddle1Color = 'red'
const paddle2Color = 'black'
const paddleborder='black'
const ballcolor='yellow';
const ballbordercolor='black'
const ballradius=12.5
const paddlespeed = 50
let intervalid;
let ballspeed = 1
let ballx =gameWidth/2
let bally =gameHeight/2
let ballxdirection=0
let ballydirection=0
let player1score = 0
let player2score = 0
let paddle1 ={
    width:25,
    height100,
    x:0,
    y:0
}
let paddle2  ={
    width:25,
    height100,
    x:gameWidth -25,
    y:gameHeight -100
}

window.addEventListener('keydown',changedirection)
resetbtn.addEventListener('click',resetgame)

gamestart()
function resetgame(){
    createball()
    nexttick()
 }
function nexttick(){ 
    intervalid=setTimeout(()=>{
        clearboard()
        drawpaddles()
        moveball()
        drawball(ballx,bally)
        checkcollision()
        nexttick()
    },10)
}
function clearboard(){ 
    ctx.fillStyle =boarderBackground
    ctx.fillRect(0,0,gameWidth,gameHeight)
}
function drawpaddles(){ }
function createball(){ }
function moveball(){ }
function drawball(){
    ctx.strokeStyle=paddleborder
    ctx.fillStyle=paddle1Color
    ctx.fillRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height)
    ctx.strokeRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height)
 
    ctx.strokeStyle=paddleborder
    ctx.fillStyle=paddle2Color
    ctx.fillRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height)
    ctx.strokeRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height)
 }
function checkcollision(){ }
function changedirection(){ }
function updatescore(){ }
function resetscore(){ }