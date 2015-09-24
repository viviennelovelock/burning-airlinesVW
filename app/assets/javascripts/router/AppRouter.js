var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        'flights/:id': 'index',
        'search': 'search'
    },

    index: function(id) {

        // console.log( id );
        app.pageID = parseInt(id);
        // console.log('are we here at the index?');
        // create a view somehow
        // _.where( somelist ,{id: id});
        appView = new app.AppView({
            collection: app.flights
        });
        appView.render();

    },

    search: function() {
        searchView = new app.SearchView({
            collection: app.flights
        });
        searchView.render();

        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        matches.push(str);
                    }
                });

                cb(matches);
            };
        };

        var origin = _.uniq(app.flights.pluck('origin'));
        var destination = _.uniq(app.flights.pluck('destination'));

        $('#origin').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'origin',
            source: substringMatcher(origin)
        });

        $('#destination').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'destination',
            source: substringMatcher(destination)
        });
    }
});