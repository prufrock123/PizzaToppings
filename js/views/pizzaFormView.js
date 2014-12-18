;(function(window, undefined){

	window.app = window.app || {};

	var PizzaFormView = Backbone.View.extend({
		className: "pizzaForm",
		template: "pizzaForm",
		render: function(){
			var self = this;


			$.get('./templates/' + self.template + '.html').then(function(templateString){
				// console.log(templateString)
				self.el.innerHTML = templateString
				// console.log(self.el.innerHTML);
			})

			// debugger;
		},
		initialize: function(){
		},
		events: {
			"submit form": "createPizzaJSON"
		},
		createPizzaJSON: function(event){
			var self = this;
			event.preventDefault();

			var obj = this.createObject()

			this.el.innerHTML = '';

		},
		createObject: function() {
			var input = {};

			this.$el.find(':input').each(function(){
				input[this.name] = this.value;
			});
			return input;
		}

	})

	app.PizzaFormView = PizzaFormView;

})(window, undefined);