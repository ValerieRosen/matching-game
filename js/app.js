  
/*
 * Create a list that holds all of your cards
 */

    var openCards = [];
    var cardIcons = ['fa fa-diamond', 'fa fa-diamond',
                     'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
                     'fa fa-anchor', 'fa fa-anchor',
                     'fa fa-bolt', 'fa fa-bolt',
                     'fa fa-cube', 'fa fa-cube',
                     'fa fa-bomb', 'fa fa-bomb',
                     'fa fa-leaf', 'fa fa-leaf',
                     'fa fa-bicycle', 'fa fa-bicycle'];
    var moves = 0;
    var moveCounter = document.querySelector('moves');
   

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//generate html for cards dynamically

    function startGame() {
         var deck = document.querySelector('.deck');
         var cardHTML = shuffle(cardIcons).map(function(card) {
             return cardCode(card);

    });
            // moves = 0;
          //   moveCounter.innerText = moves;

             deck.innerHTML = cardHTML.join('');
}
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

let gameCards = document.querySelectorAll('.card');
//function that listens for card clicks and opens card and shows icon
    gameCards.forEach(function(card) {
       card.addEventListener('click', function(e) {
        card.classList.add('open', 'show'); 
          
        if (!card.classList.contains('open') &&
            !card.classList.contains('show') &&
            !card.classList.contains('match'));
            openCards.push(card);  
            
//hides cards after 1 second if they do not match

        if (openCards.length == 2) {
            if (openCards[0].dataset.card == openCards[1].dataset.card) {
                openCards[0].classList.add('match');
                openCards[0].classList.add('open');
                openCards[0].classList.add('show');
                openCards[1].classList.add('match');
                openCards[1].classList.add('open');
                openCards[1].classList.add('show');

                openCards = [];

            } else {
                 setTimeout(function() {
                 openCards.forEach(function(card) {
                 card.classList.remove('open', 'show');

                 });

                openCards = [];
                              
            }, 1000);
        };
       // moves += 1;
       // moveCounter.innerText = moves;
};

//game over
    function gameOver() {
        stopTimer();
        toggleModal();

    }
    let resetGame = document.querySelectorAll('.restart');
//restart button 
    function restartGame() {
             resetGame.forEach(function(restart) {
             restart.addEventListener('click', startGame);
             openCards = [];
             });
            } 
            

    restartGame();


                  
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
    })})           
