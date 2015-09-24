var app = app || {};

app.SearchView = Backbone.View.extend({
    el: '#main',

    render: function() {
        var $search = $('#search').html();
        this.$el.html($search);
    },

    events: {
        'click button': 'showSearch'
    },

    showSearch: function() {

        app.origin = $('#origin').val();
        app.destination = $('#destination').val();
        var flightList = _.filter(app.flights.models, function(child) {
            if (child.get('origin') === app.origin && child.get('destination') === app.destination) {
                return child
            }
        });

        _.each(flightList, function(model) {
            var flightListView = new app.SearchResultsView({
                model: model
            });
            flightListView.render();
        });
    }
});