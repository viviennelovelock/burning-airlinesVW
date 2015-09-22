var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'flights/:id': 'index'
	},

	index: function ( id ) {
		console.log( id );
		console.log('are we here at the index?');
		console.log(app.flights)

		app.pageID = parseInt(id);

		appView = new app.AppView({collection: app.flights})
	}
});