
let sum =0;
let cards = []

let hasblackjack = false;
let isalive = false;

console.log(sum);

let message = "";
let messageEl = document.getElementById("messege-el");
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
     name : "Anil : ",
     chips : 145
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + "$" + player.chips

function getRandom(){
    let n = Math.floor(Math.random()*13)+1
    if(n==1) return 10
    if(n>10) return 11
    return n;
}

function rendergame(){

    sumEl.textContent = "Sum = " + sum;
    cardEl.textContent = "Cards : ";

    for(let i=0 ; i<cards.length ; i++){
        cardEl.textContent += cards[i] + " ";
    }

    if(sum<21){
        message = "Do you want to draw a new card";
    }
    else if(sum===21){
        message = "You got the blackjack";
        hasblackjack = true
    }
    else{
        message = "Better luck next time";
        isalive = false
    }
    
    messageEl.textContent = message;
    // console.log(message);
}        

function Startgame(){
    let fc = getRandom();
    let sc = getRandom();

    cards = [fc,sc]
    sum = fc+sc

    isalive = true
    rendergame()
}


function newcard(){
    if(isalive==true && hasblackjack == false){
    console.log("Drawing a new card")
    let card = getRandom()
    cards.push(card)
    sum+=card;
    rendergame();}
    else{

    }
}