const memoryModel = {
  cards: [
  //  A list that holds all cards
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
  }],
    openCards: [],
    state: ['open', 'match', 'mismatch'],
    counter: 0,
    moves: 0,
    clicks: 0,
    stars: 3
  };
  
const memoryFunction = {
  init() {
    View.init();
  },

  //get all cards from list of cards
  getAllCards() {
    return memoryModel.cards;
  },

  //create a list of open cards
  getOpenCards(){
    return memoryModel.openCards;
  },

  //create a function which return number of stars
  getStars() {
    return memoryModel.stars;
  },

  //count a number of Moves if user click of different cards 2 times
  showNumberOfMoves() {
    let moves = memoryModel.moves;
    moves % 2 === 0 ? moves /= 2 : null;
    return moves;
  },

  openCard() {
    return memoryModel.state[0];
  },

  matchedCard() {
    return memoryModel.state[1];
  },

  mismatchCard() {
    return memoryModel.state[2];
  },
 

 // Shuffle function from http://stackoverflow.com/a/2450976
  shuffle: function(array) {
    let currentIndex = array.length, 
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }
};

const View = {
  init() {
    this.deck = document.getElementsByClassName('deck')[0];
    this.movesCount = document.getElementsByClassName('moves')[0];

    const restartButton = document.getElementsByClassName('restart')[0];
    restartButton.addEventListener('click', () => memoryFunction.reloadGame()); 

    this.workWithDeckAndCards();   
  },

  workWithDeckAndCards: function() {
    //card list
    const cards = memoryFunction.getAllCards();
    const OpenCards = memoryFunction.getOpenCards();

    //shuffle Cards
    memoryFunction.shuffle(cards);

    //card states
    const open = memoryFunction.openCard();
    const match = memoryFunction.matchedCard();
    const mismatch = memoryFunction.mismatchCard();

    for (let card of cards) {
      // create li and i elements
      let liElem = $('li');
      let iElem = $('i');

      // Assigns different values (classes, names...)
      liElem.classList.add(card.class, card.name);
      //iElem.className = card.icon;

      //Append elements
      liElem.appendChild(iElem);
      this.deck.appendChild(liElem);

      //Sets up an event listener to a card
      liElem.addEventListener('click', function(){

        //Get a number of stars
        let stars = memoryFunction.getStars();

        //Get a number of moves
        let numOfMoves = memoryFunction.showNumberOfMoves();

        //Depending stars from moves
        if(36 > numOfMoves > 24) {

        } else if (numOfMoves > 36) {

        }
        liElem.classList.add('open');

        //Add card to a list of openCards
        openCards.push(liElem);

        //Check if the cards similar of not
        if(OpenCards.length === 2) {
          let card1 = openCards[0];
          let card2 = openCards[1];

          if(card1.classList.contains(card.name) && card2.classList.contains(card.name)) {
            card1.classList.add('match');
            card2.classList.add('match');
            memoryFunction.clearList(openCards);

            View.movesCount.textContent = memoryFunction.showNumberOfMoves();
          } else {
            View.movesCount.textContent = memoryFunction.showNumberOfMoves(); 
          }
        }
      });
    }
};



  