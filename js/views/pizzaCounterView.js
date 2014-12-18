;
(function(window, undefined) {

    window.app = window.app || {};

    var PizzaCounterView = Backbone.View.extend({
        className: "pizzaCounterView",
        initialize: function() {},
        render: function() {
            // console.dir(this.model)
            var test = this.count()
                // debugger;
            console.dir(test)
        },
        count: function() {
        	var self = this;
            // var countObject = {}
            // this.model.attributes.pizzas.forEach(function(element, index, array) {
            //     element.toppings.forEach(function(e, i, a) {
            //         if (!countObject[e]) {
            //             countObject[e] = 1
            //         } else {
            //             countObject[e] += 1
            //         }
            //     })
            // })
            // return countObject;

            var toppingsArray = []
            debugger;
            self.model.attributes.pizzas.forEach(function(element) {
                toppingsArray.forEach(function(e) {
                	debugger;
                    if (_.isEqual(element, e)) {
                        return
                    } else {
                        toppingsArray.push(element)
                    }
                })
            })
            return toppingsArray
        }

    })

    app.PizzaCounterView = PizzaCounterView

})(window, undefined);
