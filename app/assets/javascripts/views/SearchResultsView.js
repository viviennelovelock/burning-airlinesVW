var app = app || {};

app.SearchResultsView = Backbone.View.extend({
    el: 'table',

    render: function() {

    	// Using underscore micro templating to extrapolate data from current flight model and insert it into the erb tags that look like {{}} in search.html.erb
        var detailsListTemplate = $('#details').html();
        var detailsListHTML = _.template(detailsListTemplate);
        var detailsList = detailsListHTML(this.model.toJSON());

        this.$el.append(detailsList);
    }
});