/*To create a grid, 
create an array that has 8 different icons twice (total of 16 entries in the array).
The, use the shuffle function to clear deck and recreate <li> tags.
Use jQuery. That'll get you started. 
In this project, I will not code but will only guide you. 
Don't fear failure at all. 
Failures will come, frustrations will come, 
and I know you will go through the failures and frustrations 
nd get through this project.*/

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
  

// create grid
const deck = $('.deck')[0];

for (let card of cards) {
  // create li and i elements
  let liElem = $('li');
  let iElem = $('i');

  // Assigns different values (classes, names...)
  liElem.classList.add('match', 'open', 'show');
  //iElem.className = card.icon;

  //Append elements
  liElem.appendChild(iElem);
  deck.appendChild(liElem);

  //Sets up an event listener to a card
  liElem.on('click', function(){

  });

}

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
},