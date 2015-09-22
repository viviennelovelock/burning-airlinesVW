var app = app || {};

app.SeatPlanView = Backbone.View.extend({
	tagName: 'li',

	render: function () {
		this.$el.text( 'seat' );
		this.$el.prependTo( '#seats-list');
	},

	events: {
		'click': 'clickclick'
	},

	clickclick: function () {
		console.log( 'i am clicked' );
	}
});


	// render: function () {
	// 	this.$el.text( this.model.get('content') );
	// 	this.$el.prependTo('#todolist');
	// }