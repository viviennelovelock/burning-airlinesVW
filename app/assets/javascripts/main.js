var app = app || {};

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates we want it to <%= spit someting out %>
};


$(document).ready( function () {

	app.currentUser = ~~($('h6').html());
	app.currentUserName = $('h5').html();

	app.users = new app.Users();
	app.users.fetch().done( function() {
		app.flights = new app.Flights();
		app.flights.fetch().done( function() {
			app.planes = new app.Planes();
			app.planes.fetch().done( function() {
				app.reservations = new app.Reservations();
				app.reservations.fetch().done( function() {
					app.router = new app.AppRouter();
					Backbone.history.start( { pushState: true } );

				});
			});
		});
	});

	setInterval( function () {

		app.flights.fetch().done( function() {
			app.planes.fetch().done( function() {
				app.reservations.fetch().done( function() {
					app.reservations.setUpListeners();
				});
			})
		})
	
	}, 1000);

	// app.planes = new app.Planes();
	// app.planes.fetch();

	// we wait for the document to be ready, start router

});