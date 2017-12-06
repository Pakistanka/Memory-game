/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



let Game = {

  init: function(cards){
      //this.game = $(".game");
      this.cardsArray = $.merge(cards, cards);
      this.shuffleCards(this.cardsArray);
      this.setup();
    },

  //Greate HTML for each card
  buildHTML: function() {
    let fragment = "";
    this.$cards.each(function(x, y){
      fragment += $('.card')
    });
    return fragment;
  },

  counter: function() {
    let moves = $('.moves');
    if(restart() && setup()){
      moves = null;
      moves += 1;
    }
  },

  restart: function() {
    let restartButton = $(".fa-repeat");
    restartButton.on('click', function(){
      this.reset();
      console.log('New game!');
    });
  },

  finishGame: function() {

  },

  // Shuffle function from http://stackoverflow.com/a/2450976
  shuffle: function(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
},


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


let cards = [
{
  name: 'fa-diamond',
  id: 1
}, 
{
  name: 'fa-paper-plane-o',
  id: 2
},
{
  name: 'fa-anchor',
  id: 3
},
{
  name: 'fa-bolt',
  id: 4
},
{
  name: 'fa-cube',
  id: 5
},
{
  name: 'fa-leaf',
  id: 6
},
{
  name: 'fa-bicycle',
  id: 7
},
{
  name: 'fa-bomb',
  id: 8
}];