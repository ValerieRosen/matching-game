  
/*
 * Create a list that holds all of your cards
 */

    let openCards = [];
    let cardIcons = ['fa fa-diamond', 'fa fa-diamond',
                     'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
                     'fa fa-anchor', 'fa fa-anchor',
                     'fa fa-bolt', 'fa fa-bolt',
                     'fa fa-cube', 'fa fa-cube',
                     'fa fa-bomb', 'fa fa-bomb',
                     'fa fa-leaf', 'fa fa-leaf',
                     'fa fa-bicycle', 'fa fa-bicycle'];
    let moves = 0;
    let matched = 0;
   
 
    
   
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//generate html for cards dynamically
    function startGame() {
         const deck = document.querySelector('.deck');
         const cardHTML = shuffle(cardIcons).map(function(card) {
             return cardCode(card);
         });
             deck.innerHTML = cardHTML.join('');
        };  
//initialize game  
startGame();
    

    function cardCode(card) {
         return `<li class='card' data-card='${card}'><i class="fa ${card}"></i></li>`;   
};
 
// Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {

     var currentIndex = array.length, temporaryValue, randomIndex;

     while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
        return array;
}

const gameCards = document.querySelectorAll('.card');
//function that listens for card clicks and opens card and shows icon
    gameCards.forEach(function(card) {
       card.addEventListener('click', function(e) {
       
    });
});
       
        if (!card.classList.contains('open') &&
            !card.classList.contains('show') &&
            !card.classList.contains('match'));
            openCards.push(card);  
            card.classList.add('open', 'show'); 
                 
//hides cards after 1 second if they do not match
       
        if (openCards.length === 2) {
            if (openCards[0].dataset.card == openCards[1].dataset.card) {
                openCards[0].classList.add('match');
                openCards[0].classList.add('open');
                openCards[0].classList.add('show');

                openCards[1].classList.add('match');
                openCards[1].classList.add('open');
                openCards[1].classList.add('show');
                
                openCards = [];

                matched++;
              

            } else {
                 setTimeout(function() {
                 openCards.forEach(function(card) {
                 card.classList.remove('open', 'show');
             });

                openCards = [];
            }, 600);
        }
                countMoves();
        }

//Game over
      function gameOver() {
        stopTimer();
        openModal();
        resetMoves();
        resetStars();
}

//Count number of card clicks for moves
const movesCounter = document.querySelector('.moves');
    let moves = 0;
    function countMoves() {
         moves++;
         movesCounter.innerHTML = moves;
         if (moves === 1) {
             startTimer();
         }
         starRating();
}
//Reset moves
    function resetMoves() {
        movesCounter.innerHTML = 0;
}

//Stars Rating
const starsCounter = document.querySelector(".stars");
    function starRating() {
        if (moves <= 14) {
            starsCounter.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
        } else if (moves > 14 && moves <= 18) {
            starsCounter.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
        } else {
            starsCounter.innerHTML = '<li><i class="fa fa-star"></i></li>';
            }
        }
    
//Reset Stars
function resetStars() {
    starsCounter.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
}
//Restart button loads new window
        let restartButton = document.querySelectorAll('.restart');
                restartButton.forEach(function(restart) {
                    restart.addEventListener('click', function(e) {
                        location.reload();
                          startGame();
});    
       

//Start timer
    const clockTimer = document.querySelector('.timer');
    let myTimer, totalSeconds = "00";
                totalMinutes = "00";

    clockTimer.innerHTML = totalMinutes + ":" + totalSeconds;

    function startTimer() {
        myTimer = setInterval(function() {
            totalSeconds++;
            clockTimer.innerHTML = totalMinutes + ":" + totalSeconds;
            if (totalSeconds === 60) {
                totalMinutes++;
                totalSeconds = 0;
                totalSeconds++;
                clockTimer.innerHTML = totalMinutes + ":" + totalSeconds;
            }
        //Stop timer
        if (matched === 8) {
            stopTimer();
            gameOver();
            }
        }, 1000);
    } 
    //Reset timer
function resetTimer() { 
    clockTimer.innerHTML = "00:00";
}
function stopTimer() {
    clearInterval(myTimer);
}
function gameOver() {
    modal.classList.remove('hide');
    document.querySelector('.total-moves').innerHTML = document.querySelector('.moves').innerHTML;
    document.querySelector('.total-time').innerHTML = document.querySelector('.timer').innerHTML;
    document.querySelector('.total-stars').innerHTML = document.querySelector('.stars').innerHTML;
}
//Modal script

var modal = document.getElementById('gameOverModal');
//write function that triggers modal opening at end of game
function openModal() {
 
    let matched = document.getElementsByClassName('.modal');
    window.openModal
//get the span element that closes the modal
       var span = document.getElementsByClassName('close')[0];
//When x is clicked close modal
      span.onClick = function() {
          modal.style.display ="none";
        }
//clicking outside fo modal closes modal
        window.onClick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
          }

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
        }}})   