var app = app || {};

app.SeatPlanView = Backbone.View.extend({
    tagName: 'li',

    render: function() {

        // Crazy maths logic to assign each <li> with different id's given app.i which is a for loop iterator
        this.$el.attr('id', ((app.i % app.numColumns + 1).toString() + (Math.floor(app.i / app.numColumns) + 1).toString()));
        this.$el.appendTo('#seats-list');

        var $list = this.$el;

        // To mark the reserved seats
        _.each(app.seatsTaken, function(seat) {

            // When rendering each individual seat, check if id = id of app.seatsTaken
            if (seat.column + seat.row === $('li').last().attr('id')) {

                // To break apart id into column and row: assumption made, max column = 9
                var rowAndColumnRegex = $('li').last().attr('id').match(/(\d)(\d+)/)
                var columnFirst = rowAndColumnRegex[1];
                var rowFirst = rowAndColumnRegex[2];

                // This commented code below shows how code performanced is enhanced by returning first element found instead of all elements
                // var relatedUserID = _.where(app.seatsTaken, {column: columnFirst, row: rowFirst})[0].user_id;

                // To find the user_ID of the reserved seat by finding the element that matches the current column and row
                var relatedUserID = _.findWhere(app.seatsTaken, {
                    column: columnFirst,
                    row: rowFirst
                }).user_id;

                // Again, optimized code below
                // var relatedUserName = _.where( app.users.models, { id: relatedUserID })[0].get('name')
                // Given the relatedUserID, find the related name and each time a new <li> is rendered that belongs to a reserved seat, <li> will have color pink and userName attached
                var relatedUserName = _.findWhere(app.users.models, {
                    id: relatedUserID
                }).get('name')
                $('li').last().css('background-color', 'pink').text(relatedUserName);

            }
        });
    },

    events: {
        'click': 'clickclick'
    },

    clickclick: function(event) {

        // Allows us to find row and column the user just clicked on
        var rowAndColumnRegex = event.target.id.match(/(\d)(\d+)/)
        var columnFirst = rowAndColumnRegex[1];
        var rowFirst = rowAndColumnRegex[2];

        // If a user clicks on an already seat reserved by him/herself, destroy the model as user wants to cancel reserved seat
        if (app.currentUserName === $('#' + event.target.id).text()) {

            // To find the model related to the reserved seat by comparing the user_id, row, column and flight_ID
            todelete = _.filter(app.reservations.models, function(child) {
                if (child.get('user_id') === app.currentUser && child.get('row') === rowFirst && child.get('column') === columnFirst && child.get('flight_id') === app.pageID) {
                    return child;
                }
            })

            // Destroy that MUDDA and render a new view
            todelete[0].destroy();
            var newView = new app.AppView();
            newView.render();
        } else if ($('#' + event.target.id).text() === '') {
            app.reservations.create({
                row: rowFirst,
                column: columnFirst,
                user_id: app.currentUser,
                flight_id: app.pageID
            });
        } else {
            return;
        }
    }
});