;(function(window, undefined){

	window.app = window.app || {};

	var PizzaData = Backbone.Model.extend({
		initialize: function(){
			this.set({pizzas: app.pizzas})
			// console.dir(this.attributes.pizzas)
		}

	})
	
	app.PizzaData = PizzaData;

})(window, undefined);