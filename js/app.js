//Global variables   
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

//Function that listens for card clicks and opens card and shows icon
var gameCards = document.querySelectorAll('.card');
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
          
//Stop timer when all cards are matched
        if (matched === 8) {
            stopTimer();
            gameOver();
            }
        }, 1000); 
    }

//Call the timer
startTimer();     


//Stop timer
function stopTimer() {
    clearInterval(myTimer);
}

//Toggle modal
let modalBox = document.querySelector('.modalBox');
let modalContent = document.querySelector('.modalContent');
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


//Game over and toggle modal box
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

//Attach to replay game button
function closeModal() {
   const modalContent = document.querySelector('.modalContent');
   modalContent.classList.add('hide');
   const modalBox = document.querySelector('.modalBox');
   modalBox.classList.add('hide');
};


/*
 * Special thanks to Mike Wales, Matt Cranford, Ryan Waite and MDN and W3schools for their time to go over various ways to approach this project. Still learning but I know so much more than when I started! :)
 */
                             