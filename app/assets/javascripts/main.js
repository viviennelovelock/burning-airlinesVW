var app = app || {};

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates we want it to <%= spit someting out %>
};


$(document).ready( function () {

	app.flights = new app.Flights();
	app.flights.fetch();

	app.planes = new app.Planes();
	app.planes.fetch();

	// we wait for the document to be ready, start router
	app.reservations = new app.Reservations();
	app.reservations.fetch().done( function() {
		app.router = new app.AppRouter();
		Backbone.history.start( { pushState: true } );
	});

});