var app = app || {};

app.SearchResultsView = Backbone.View.extend({
    el: 'table',

    render: function() {
        var detailsListTemplate = $('#details').html();
        var detailsListHTML = _.template(detailsListTemplate);
        var detailsList = detailsListHTML(this.model.toJSON());

        this.$el.append(detailsList);
    }
});