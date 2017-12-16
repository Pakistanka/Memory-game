$(document).ready(function(){
  const app = {
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
    ],
      init: function() {
        app.shuffle();
        app.assignCards();
        app.clickHandlers();
        app.restartButton();
        //app.checkMatch();
      },


     shuffle: function(array) {
      let random = 0;
      let temp = 0;
      for(i = 1; i < app.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.cards[i];
        app.cards[i] = app.cards[random];
        app.cards[random] = temp;
      };  
  },

      assignCards: function() {
        $('.card').each(function(index){
          $(this).attr('data-card-value', app.cards[index]);
          app.cards[index];
        });
      },

      clickHandlers: function(){
      $('.card').on('click', function(){
        $(this).addClass('open show');
        });
      },

      restartButton: function() {
        $('.restart').on('click', function(){
          location.reload();  
          //$(this).shuffle(cards);
        });
      },




    }
  app.init();
});


/*
      // Shuffle function from http://stackoverflow.com/a/2450976
    shuffle(array) {
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

        checkMatch: function() {
        if(app.cards.length ===2) {
          let counter =
        }
      },

    */