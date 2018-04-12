// deck of all cads in game
let icons = document.querySelector(".deck");

// cardsContainer array holds all the cards
let cardsContainer = [];

// array for matched cards
const matchedCards = [];

// declaring reset variable
let reset = document.querySelector(".restart");

// declaring move variable
let moves = document.querySelector(".moves");

// add click eventListener on the icons 
icons.addEventListener("click", function(e){
    if(e.target.classList == "card" && cardsContainer.length < 2){
        e.target.classList.add("open", 'show');
        cardsContainer.push(e.target); // add array to the container 
          if (cardsContainer.length == 2){
               compareCards();
        };
    }
});


// compare two cards if they match or not
function compareCards(){
    if (cardsContainer[0].innerHTML == cardsContainer[1].innerHTML){
       

        cardsContainer[0].classList.add('match');
        cardsContainer[0].classList.remove("open","show");

        cardsContainer[1].classList.add('match');
        cardsContainer[1].classList.remove("open","show");
        
        matchedCards.push(cardsContainer[0]);
        matchedCards.push(cardsContainer[1]);
        cardsContainer = [];
        checkWinner();

    } else {
        setTimeout(function(){
            cardsContainer[0].classList.remove("open","show");
            cardsContainer[1].classList.remove("open","show");

            cardsContainer = [];
        }, 600);
    }
    moves.innerHTML++ ;           
} 


// alert when all cards match, show modal and moves
function checkWinner(){
    if (matchedCards.length == 16){

        alert("Congratulations!! Game completed!");
    }

}


// listens to any clicks made on the reset 
reset.addEventListener("click", function(){
    let selectCard = document.querySelectorAll('.card');

      for (let h = 0; h < selectCard.length; h++){
        selectCard[h].classList.remove("open","show","match");
      }
      moves.innerHTML = "0"; // reset moves;
});


