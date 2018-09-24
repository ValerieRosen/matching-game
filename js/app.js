  
/*
 * Create a list that holds all of your cards
 */

   
    var cardIcons = ['fa fa-diamond', 'fa fa-diamond',
                     'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
                     'fa fa-anchor', 'fa fa-anchor',
                     'fa fa-bolt', 'fa fa-bolt',
                     'fa fa-cube', 'fa fa-cube',
                     'fa fa-bomb', 'fa fa-bomb',
                     'fa fa-leaf', 'fa fa-leaf',
                     'fa fa-bicycle', 'fa fa-bicycle'];
    let matched = 0;
    var openCards = [];

    
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//Generate html for cards dynamically
    function startGame() {
         var deck = document.querySelector('.deck');
         var cardHTML = shuffle(cardIcons).map(function(card) {
             return cardCode(card);
         });
             deck.innerHTML = cardHTML.join('');
        };  
             
            
//Initialize game  
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

var gameCards = document.querySelectorAll('.card');
//Function that listens for card clicks and opens card and shows icon
    gameCards.forEach(function(card) {
       card.addEventListener('click', function(e) {
        
        if (!card.classList.contains('open') &&
            !card.classList.contains('show') &&
            !card.classList.contains('match'));
            openCards.push(card);  
            card.classList.add('open', 'show'); 
                 
//Hides cards after 1 second if they do not match
       
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
    });
});

//Count number of card clicks for moves
const movesCounter = document.querySelector('.moves');
    let moves = 0;
    function countMoves() {
         moves++;
         movesCounter.innerHTML = moves;
       //  if (moves === 1) {
        //     startTimer();
        // }
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
            starsCounter.innerHTML = '<li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></li>';
        } else if (moves > 14 && moves <= 18) {
            starsCounter.innerHTML = '<li><i class="fa fa-star"></i><i class="fa fa-star"></i></li>';
        } else {
            starsCounter.innerHTML = '<li><i class="fa fa-star"></i></li>';
            }
        }
    
//Reset Stars
function resetStars() {
    starsCounter.innerHTML = '<li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></li>';
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
    let myTimer = totalSeconds = "00";
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
            if (totalSeconds < 10) {
                clockTimer.innerHTML = totalMinutes + ":" + "0" + totalSeconds;
            } else {
                clockTimer.innerHTML = totalMinutes + ":" + totalSeconds;
        
            }
          
        //Stop timer
        if (matched === 8) {
            stopTimer();
            gameOver();
            
            }
        }, 1000); 
    }

//Call the timer
startTimer();     



function stopTimer() {
    clearInterval(myTimer);
}

let modalBox = document.querySelector('.modalBox');
let modalContent = document.querySelector('.modalContent');
//Toggle modal
function openModal() {
            const modalBox = document.querySelector('.modalBox');
              modalBox.classList.toggle('hide');
              modalBox.classList.toggle('close');
              modalBox.classList.toggle('replay');
              const modalContent = document.querySelector('.modalContent');
              modalContent.classList.toggle('hide');
              }
          openModal();
});



function gameOver() {
    const modalBox = document.querySelector('.modalBox');
    const modalContent = document.querySelector('.modalContent');
    modalBox.classList.remove('hide');
    document.querySelector('.totalMoves').innerHTML = document.querySelector('.moves').innerHTML;
    document.querySelector('.totalTime').innerHTML = document.querySelector('.timer').innerHTML;
    document.querySelector('.totalStars').innerHTML = document.querySelector('.stars').innerHTML;
    modalContent.classList.remove('close');
    modalContent.classList.remove('replay');
    modalContent.classList.remove('hide');
    
}

//Reset timer
function resetTimer() { 
    clockTimer.innerHTML = "00:00";
}
//attach to start new game button
function closeModal() {
   const modalContent = document.querySelector('.modalContent');
   modalContent.classList.add('hide');
   const modalBox = document.querySelector('.modalBox');
   modalBox.classList.add('hide');
};


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
                             