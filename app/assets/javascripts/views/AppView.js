var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#main',

	// initialize: function () {
	// 	console.log( this.collection );
	// },

	render: function () {
		var $seatsPlan = $('#seats-plan').html();
		this.$el.html( $seatsPlan );
		var currentFlight = app.flights.models[ app.pageID - 1].get('id');
		console.log( app.planes.models );

		// this is 3
		var relatedPlaneID = _.where( app.planes.models, { id: currentFlight })[0].id;
		var actualFuckingPlane = _.where( app.planes.models, {id: relatedPlaneID} )[0];

		var numRows = actualFuckingPlane.get('row');
		var numColumns = actualFuckingPlane.get('column');

		console.log( numColumns );
		console.log( numRows );

		for ( var i = 0; i < numRows * numColumns; i++ ) {
			var seatPlanView = new app.SeatPlanView();
			seatPlanView.render();
		}
	}
});