var app = app || {}

app.Reservations = Backbone.Collection.extend({
    url: '/reservations',
    model: app.Reservation,

    // Renders new view everytime a new model has been added to the collection
    setUpListeners: function() {
        this.on('add', function(reservation) {
            var reservationView = new app.AppView({
                model: reservation
            });
            reservationView.render();
        });
    },

    // Renders new view everytime an existing model has been removed from the collection
    setUpListeners2: function() {
        this.on('remove', function(reservation) {
            var reservationView = new app.AppView({
                model: reservation
            });
            reservationView.render();
        });
    }
});