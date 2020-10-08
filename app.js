document.addEventListener('DOMContentLoaded', ()=>{

    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png' 
        },
        {
            name: 'fries',
            img: 'images/fries.png' 
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png' 
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png' 
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png' 
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png' 
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png' 
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png' 
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png' 
        },   
        {
            name: 'milkshake',
            img: 'images/milkshake.png' 
        },
        {
            name: 'pizza',
            img: 'images/pizza.png' 
        },
        {
            name: 'pizza',
            img: 'images/pizza.png' 
        }     
    ]

cardArray.sort(()=>0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
var cardsChosen =[];
var cardsChosenId = [];
var cardsWon = [];

//creating a board
function createBoard(){
    for (let i=0 ; i < cardArray.length ; i++){
       var card = document.createElement('img');
       card.setAttribute('src','images/blank.png');
       card.setAttribute('data-id',i);
       card.addEventListener('click',flipCard);
       grid.appendChild(card);
    }
}
//flip function
function flipCard(){
   var cardId = this.getAttribute('data-id');
   cardsChosen.push(cardArray[cardId].name);
   cardsChosenId.push(cardId);
   this.setAttribute('src',cardArray[cardId].img);
   if (cardsChosen.length === 2){
       setTimeout(checkForMatch,500)
   }
}

//checking for a match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    console.log(cards);
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    console.log(optionOneId,optionTwoId,cardsChosen[0],cardsChosen[1]);
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
    }
    cardsChosen =[];
    cardsChosenId =[];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratualtions!!';
    }
}


createBoard();
})