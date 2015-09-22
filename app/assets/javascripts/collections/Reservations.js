var app = app || {}

app.Resevations = Backbone.Collection.extend({
	url: '/reservations',
	
	model:app.Resevation
})