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
		var relatedPlane = _.where( app.planes.models, { id: currentFlight })[0].id;
	}
});