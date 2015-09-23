var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#main',

	initialize: function () {
		// console.log( this.collection );
		// this.collection.on('reset', this.render(), this);
		// this.collection.on('reset', this.render(), this);
	},

	render: function () {
		var $seatsPlan = $('#seats-plan').html();
		this.$el.html( $seatsPlan );

		var currentFlight = app.flights.get( app.pageID ).get('id');
		// console.log( app.planes.models );

		// this is 3
		var relatedPlaneID = _.where( app.planes.models, { id: currentFlight })[0].id;
		var actualFuckingPlane = _.where( app.planes.models, {id: relatedPlaneID} )[0];

		var numRows = actualFuckingPlane.get('row');
		var numColumns = actualFuckingPlane.get('column');

		app.numRows = parseInt( numRows );
		app.numColumns = parseInt( numColumns );

		// console.log( numColumns );
		// console.log( numRows );

		app.relatedReservationList = _.filter( app.reservations.models, function (child) {
			return child.get('flight_id') === app.pageID;
		});

		app.seatsTaken = _.map( app.relatedReservationList, function (child) {
			return { column: child.get( 'column' ), row: child.get( 'row') }
		} );

		// console.log( app.seatsTaken );

		$('#main ul').css('width', ( 54 * app.numColumns + app.numColumns * 2 * 4 ).toString() );

		for ( app.i = 0; app.i < numRows * numColumns; app.i++ ) {
			var seatPlanView = new app.SeatPlanView();
			seatPlanView.render();
		}
	}
});

