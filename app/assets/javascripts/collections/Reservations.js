var app = app || {}

app.Reservations = Backbone.Collection.extend({
    url: '/reservations',
    model: app.Reservation,

    initialize: function() {},

    setUpListeners: function() {
        this.on('add', function(reservation) {
            var reservationView = new app.AppView({
                model: reservation
            });
            reservationView.render();
            // console.log('added');
        });
    },

    setUpListeners2: function() {
        this.on('remove', function(reservation) {
            var reservationView = new app.AppView({
                model: reservation
            });
            reservationView.render();
            // console.log('added');
        });
    }
});