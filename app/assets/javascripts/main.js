var app = app || {};

_.templateSettings = {
    evaluate: /\{\[([\s\S]+?)\]\}/g, // {[ console.log("Hello"); ]} - runs
    interpolate: /\{\{([\s\S]+?)\}\}/g // {{ key }} - interpolates we want it to <%= spit someting out %>
};


$(document).ready(function() {

    app.currentUser = ~~($('h6').html());
    app.currentUserName = $('h5').html();

    // Ensure all important data is loaded before router starts
    app.users = new app.Users();
    app.users.fetch().done(function() {
        app.flights = new app.Flights();

        // Sort app.flights by date
        app.flights.comparator = 'date';
        app.flights.fetch().done(function() {
            app.planes = new app.Planes();
            app.planes.fetch().done(function() {
                app.reservations = new app.Reservations();
                app.reservations.fetch().done(function() {
                    app.router = new app.AppRouter();
                    Backbone.history.start({
                        pushState: true
                    });

                });
            });
        });
    });

    // Send AJAX request to server every 1 second
    setInterval(function() {

        app.flights.fetch().done(function() {
            app.planes.fetch().done(function() {
                app.reservations.fetch().done(function() {

                    // Rendering new view whenever someone adds or removes reservation
                    app.reservations.setUpListeners();
                    app.reservations.setUpListeners2();
                });
            })
        })

    }, 1000);

});