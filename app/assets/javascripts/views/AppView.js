var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#main',

    render: function() {
        // To render the seat plan of the plane related to current flight
        var $seatsPlan = $('#seats-plan').html();
        this.$el.html($seatsPlan);

        // To find the current flight ID then the related plan ID then the plane model
        var currentFlight = app.flights.models[app.pageID - 1].get('id');
        var relatedPlaneID = app.flights.models[app.pageID - 1].get('plane_id');
        var actualFuckingPlane = _.where(app.planes.models, {
            id: relatedPlaneID
        })[0];

        // Given the plane model, find the number of rows and columns
        var numRows = actualFuckingPlane.get('row');
        var numColumns = actualFuckingPlane.get('column');

        app.numRows = parseInt(numRows);
        app.numColumns = parseInt(numColumns);

        // List of reservations related to this current flight
        app.relatedReservationList = _.filter(app.reservations.models, function(child) {
            return child.get('flight_id') === app.pageID;
        });

        // A custom object giving information of all seats already taken that belong to this flight
        app.seatsTaken = _.map(app.relatedReservationList, function(child) {
            return {
                column: child.get('column'),
                row: child.get('row'),
                user_id: child.get('user_id')
            }
        });

        // To make <li>s look like <div>s by setting the <ul> width
        $('#main ul').css('width', (54 * app.numColumns + app.numColumns * 2 * 4).toString());

        // To render individual seats; could be improved with _.each (http://underscorejs.org/#each)
        for (app.i = 0; app.i < numRows * numColumns; app.i++) {
            var seatPlanView = new app.SeatPlanView();
            seatPlanView.render();
        }

        // Calculate number of seats available each time someone reserves/cancels
        var $seatsAvailable = $('#seats-available');
        var totalSeats = parseInt(numRows) * parseInt(numColumns);
        app.remainingSeats = totalSeats - app.seatsTaken.length;
        $seatsAvailable.text(app.remainingSeats + ' seats left');

    }
});