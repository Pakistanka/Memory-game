(function(){

  let Memory = {

		//init function
    init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
      this.$countMoves = $('.moves')[0];
      this.$infoMessage = $('.info-message');
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
      this.GameTimer();
      this.counter();
      this.Stars();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		//start of the game
    setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// when user choose cards
		cardClicked: function(){
			let _ = Memory;
			let $card = $(this);
      //add some classes 
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
          // Time when cards close
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},


		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
      // Congratulation message
      this.$infoMessage.text('You got ' + stars + ' with ' + moves + ' , after ' + GameTimer() + ' seconds!');
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
      this.GameTimer();
		},

//@description: shuffle function 

		shuffle: function(array){
			let counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

/*
* @description make a crid for the cards    
*/
    buildHTML: function(){
			let frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"></div></div>\
				</div>';
			});
			return frag;
		},

/*
* @description calculate time taken to complete a game
*/

	  GameTimer: function() {
		  const game_start_time = new Date().getTime(); //get the current time when user clicked the first card

		  timer = setInterval(function(){

			let current_time = new Date().getTime();
			let current_time_played = current_time - game_start_time; // calculate time elapsed
			let hrs = Math.floor((current_time_played % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let mins = Math.floor((current_time_played % (1000 * 60 * 60)) / (1000 * 60));
			let secs = Math.floor((current_time_played % (1000 * 60)) / 1000);

			time_value = hrs + ' hours ' + mins + ' mins ' + secs + ' secs '; // this is to display in the stats modal

			if (secs < 10) {
				secs = '0' + secs;
			}

			current_time_played = mins + ':' + secs;
			$('.timer-played').text(current_time_played);
		  }, 500);
	  },

/*
  WHAT'S WRONG?

*/
    counter: function() {
      let moves = $('.moves');

      moves % 2 === 0 ? moves /= 2 : null;
      moves.html(" " + 'Moves');
    },

    Stars: function() {
      let stars = 3;

      //Depending stars from moves
        if(36 > numOfMoves > 24) {
          return stars = 2;

        } else if (numOfMoves > 36) {
          return stars = 1;
        }
    }
	};

	let cards = [
		{
			name: "php",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
			id: 1,
		},
		{
			name: "css3",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
			id: 2
		},
		{
			name: "html5",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
			id: 3
		},
		{
			name: "jquery",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
			id: 4
		}, 
		{
			name: "javascript",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
			id: 5
		},
		{
			name: "node",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
			id: 6
		},
		{
			name: "rails",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
			id: 7
		},
		{
			name: "sass",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
			id: 8
		},

	];
    
	Memory.init(cards);


})();