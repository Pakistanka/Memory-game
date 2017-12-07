const cards = [
  {
    name: 'diamond',
    icon: 'fa fa-diamond',
    class: 'card'
  },
  {
    name: 'diamond',
    class: 'card',
    icon: 'fa fa-diamond'
  },
  {
    name: 'plane',
    class: 'card',
    icon: 'fa fa-paper-plane-o'
  },
  {
    name: 'plane',
    class: 'card',
    icon: 'fa fa-paper-plane-o'
  },
  {
    name: 'anchor',
    class: 'card',
    icon: 'fa fa-anchor'
  },
  {
    name: 'anchor',
    class: 'card',
    icon: 'fa fa-anchor'
  },
  {
    name: 'bolt',
    class: 'card',
    icon: 'fa fa-bolt'
  },
  {
    name: 'bolt',
    class: 'card',
    icon: 'fa fa-bolt'
  },
  {
    name: 'cube',
    class: 'card',
    icon: 'fa fa-cube'
  },
  {
    name: 'cube',
    class: 'card',
    icon: 'fa fa-cube'
  },
  {
    name: 'leaf',
    class: 'card',
    icon: 'fa fa-leaf'
  },
  {
    name: 'leaf',
    class: 'card',
    icon: 'fa fa-leaf'
  },
  {
    name: 'bicycle',
    class: 'card',
    icon: 'fa fa-bicycle'
  },
  {
    name: 'bicycle',
    class: 'card',
    icon: 'fa fa-bicycle'
  },
  {
    name: 'bomb',
    class: 'card',
    icon: 'fa fa-bomb'
  },
  {
    name: 'bomb',
    class: 'card',
    icon: 'fa fa-bomb'
  }];

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
    this.cards.each(function(x, y){
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



/*  openCards: [],
    state: ['open', 'match', 'mismatch'],
    counter: 0,
    moves: 0,
    clicks: 0,
    stars: 3,
    player: undefined
};*/