var app = app || {};

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates we want it to <%= spit someting out %>
};

$(document).ready( function () {
	
	app.router = new app.AppRouter();
	Backbone.history.start( { pushState: true } );
});