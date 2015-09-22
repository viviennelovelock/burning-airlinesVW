var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'flights/:id': 'index'
	},

	index: function ( id ) {
		console.log( id );
		console.log('are we here at the index?');
	}
});