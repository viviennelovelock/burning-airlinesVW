var app = app || {};

app.SeatPlanView = Backbone.View.extend({
	tagName: 'li',

	initialize: function () {
		// debugger;
		// console.log( _.filter( app.reservations.models, function (child) {
		// 	return child.get('flight_id') === app.pageID
		// }))
	},

	//155

	render: function () {

		this.$el.attr('id', ( (app.i % app.numColumns + 1 ).toString() + ( Math.floor( app.i / app.numColumns ) + 1 ).toString() ));
		this.$el.appendTo( '#seats-list');
		// console.log( this.$el.attr('id') );
		// debugger;
		var $list = this.$el;
		_.each( app.seatsTaken, function (seat) {
			if( seat.column + seat.row === $('li').last().attr( 'id' ) ) {

	
				var rowAndColumnRegex = $('li').last().attr('id').match(/(\d)(\d+)/)
				var columnFirst = rowAndColumnRegex[1];
				var rowFirst = rowAndColumnRegex[2];

				var relatedUserID = _.where(app.seatsTaken, {column: columnFirst, row: rowFirst})[0].user_id;
				var relatedUserName = _.where( app.users.models, { id: relatedUserID })[0].get('name')
				$('li').last().css( 'background-color', 'pink' ).text(relatedUserName);

				// debugger;
			}
		});
	},

	events: {
		'click': 'clickclick'
	},

	clickclick: function (event) {
		// should prevent someone from clicking a box already reserved/coloured

		var rowAndColumnRegex = event.target.id.match(/(\d)(\d+)/)
		var columnFirst = rowAndColumnRegex[1];
		var rowFirst = rowAndColumnRegex[2];
		// console.log(columnFirst+"   "+ rowFirst);
		// this.$el.toggleClass( 'reserved' );
		// // if the square clicked is related to current user, destroy; else, create
		// var relatedUserID = _.where(app.seatsTaken, {column: columnFirst, row: rowFirst})[0].user_id;
		// var relatedUserName = _.where( app.users.models, { id: relatedUserID })[0].get('name');
		// console.log( relatedUserName );
		// debugger;
		app.reservations.create({row: rowFirst, column: columnFirst, user_id: app.currentUser, flight_id: app.pageID});
	}
});

// #  row        :text
// #  column     :text
// #  user_id    :integer
// #  flight_id  :integer

// when i wake up in the morning, i need to figure out how to .save() model. probably create a new model here then save. need to get user_id somehow. also destroy() and remove(), study that!