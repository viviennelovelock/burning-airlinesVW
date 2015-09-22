var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#main',

	render: function(){
		var $seatPlan = $('#seats-plan').html();
		this.$el.html($seatPlan);
		var currentFlight =  app.flights.models[app.pageID -1 ].get('id')
	}
})