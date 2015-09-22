var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'flights/:id': 'index'
	},

	index: function ( id ) {

		// console.log( id );
		app.pageID = parseInt( id );
		// console.log('are we here at the index?');
		// create a view somehow
		// _.where( somelist ,{id: id});
		appView = new app.AppView({collection: app.flights});
		appView.render();

	}
});