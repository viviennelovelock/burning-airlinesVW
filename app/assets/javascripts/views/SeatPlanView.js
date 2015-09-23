var app = app || {};

app.SeatPlanView = Backbone.View.extend({
	tagName: 'li',

	initialize: function () {
		// debugger;
		// console.log( _.filter( app.reservations.models, function (child) {
		// 	return child.get('flight_id') === app.pageID
		// }))
	},

	render: function () {

		this.$el.text( 'seat' ).attr('id', ( (app.i % app.numColumns + 1 ).toString() + ( Math.floor( app.i / app.numColumns ) + 1 ).toString() ));
		this.$el.appendTo( '#seats-list');
		// console.log( this.$el.attr('id') );
		// debugger;
		var $list = this.$el;
		_.each( app.seatsTaken, function (seat) {
			if( seat.column + seat.row === $('li').last().attr( 'id' ) ) {
				$('li').last().css( 'background-color', 'black' );
			}
		});
	},

	events: {
		'click': 'clickclick'
	},

	clickclick: function (event) {
		// should prevent someone from clicking a box already reserved/coloured
		debugger;
		console.log( event.target.id );
		// console.log(@current_user.id);
		this.$el.toggleClass( 'reserved' );

		// debugger;
	}
});

// #  row        :text
// #  column     :text
// #  user_id    :integer
// #  flight_id  :integer

// when i wake up in the morning, i need to figure out how to .save() model. probably create a new model here then save. need to get user_id somehow. also destroy() and remove(), study that!