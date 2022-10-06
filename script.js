let music = new Audio("./sounds/music.mp3");
let audioTurn = new Audio("./sounds/turn.mp3");
let gameover = new Audio("./sounds/gameover.mp3");
let turn = "X";
let isGameover = false;

//Function to change the turn
const changeTurn = () => {

    return turn === "X"?"0":"X";

}


//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2, 2.5, 4.6, 0],
        [3,4,5, 2.5, 14.7, 0],
        [6,7,8, 2.5, 24.7, 0],
        [0,3,6, -7.5, 15, 90],
        [1,4,7, 2.5, 15, 90],
        [2,5,8, 12.5, 15, 90],
        [0,4,8, 2.6, 15, 45],
        [2,4,6, 2.3, 15, 135]
    ]

    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            music.play();
            isGameover=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100px";
            document.querySelector('.line').style.width="25vw";
            document.querySelector('.line').style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })

}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', (e)=>{
        if(boxText.innerText===''){
            boxText.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            

        }
    })
})



//Reset logic

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
        music.pause();
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
        turn = "X";
        isGameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.line').style.width="0vw";
    })
})