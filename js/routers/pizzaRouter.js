;(function(window, undefined){

	window.app = window.app || {};

	var PizzaRouter = Backbone.Router.extend({
		routes: {
			"*defaults": "page1"
		},
		page1: function(){
			// debugger;
			this.pizzaformview.render();
			this.pizzacounterview.render();
		},
		initialize: function(){
			this.appview = new app.AppView();

			// instantiate the pizza data model
			this.pizzadata = new app.PizzaData()

			// append a pizza counter API form
			this.pizzaformview = new app.PizzaFormView({model: this.pizzadata});
			// debugger;
			this.appview.$el.find("#mainContent").append(this.pizzaformview.el);

			// append a pizza counter view
			this.pizzacounterview = new app.PizzaCounterView({model: this.pizzadata})
			// debugger;
			this.appview.$el.find("#mainContent").append(this.pizzacounterview.el);

			Backbone.history.start();
		}
	})

	app.PizzaRouter = PizzaRouter;

})(window, undefined);