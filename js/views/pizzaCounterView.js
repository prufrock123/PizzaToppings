;
(function(window, undefined) {

    window.app = window.app || {};

    var PizzaCounterView = Backbone.View.extend({
        className: "pizzaCounterView",
        template: "<div class='row'><div class='large-12 columns'><h4>Topping:</h4><p>{topping}</div></div><hr/>",
        initialize: function() {},
        render: function() {
        	var self = this;
            // console.dir(this.model)
            var test = this.count()
                // debugger;
            console.dir(test)
            test.forEach(function(element){
            	self.$el.append(_.template(self.template, element))
            })

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

            // var toppingsArray = []
            // debugger;
            // self.model.attributes.pizzas.forEach(function(element) {
            //     toppingsArray.forEach(function(e) {
            //     	debugger;
            //         if (_.isEqual(element, e)) {
            //             return
            //         } else {
            //             toppingsArray.push(element)
            //         }
            //     })
            // })
            // return toppingsArray
            
            var pizzaArray = self.model.attributes.pizzas

            var toppingsArray = []
            pizzaArray.forEach(function(element) {
                toppingsArray.push(element.toppings)
            })

            	// console.dir(toppingsArray)

            var flattenedToppingsArray = _.flatten(toppingsArray, true)

            	// console.dir(flattenedToppingsArray)

			var unitedToppingsArray = _.union.apply(_, toppingsArray)

            	// console.dir(unitedToppingsArray)

            // var uniqueToppingsArray = _.uniq(toppingsArray)

            // 	console.dir(uniqueToppingsArray)

            // var sortedToppingsArray = []
            // toppingsArray.forEach(function(element){
            // 	sortedToppingsArray.push(element.sort())
            // })
            // console.dir(sortedToppingsArray);
            toppingsArray.forEach(function(element){
            	element.sort();
            })


            

            var countObject = {}
            var uniqueToppingsArray = []
            for (var i = 0, l = toppingsArray.length; i < l; i++){
            	var key = toppingsArray[i].join('|');
            	if (!countObject[key]) {
            		uniqueToppingsArray.push(toppingsArray[i]);
            		countObject[key] = 1
            	} else {
            		countObject[key] += 1
            	}
            }
            // console.dir(countObject);
            // console.dir(uniqueToppingsArray);

            sortedToppingsArray = [];
            for (var key in countObject){
            	sortedToppingsArray.push([key, countObject[key]])
            }
            sortedToppingsArray.sort(function(a, b) {
            	return b[1] - a[1]
            })

            // console.dir(sortedToppingsArray);

            var topTwentyCombos = sortedToppingsArray.slice(0, 19);

            // console.dir(topTwentyCombos);

            arrayOfObjects = []

            // topTwentyCombos.forEach(function(element, i){
            // 	var x = {}
            // 	x[element[0]] = element[1]
            // 	arrayOfObjects.push(x);
            // })
            
            topTwentyCombos.forEach(function(element, i){
            	var x = {}
            	x["topping"] = element[0] + " count: " +element[1]
            	arrayOfObjects.push(x);
            })

            // console.dir(arrayOfObjects);
            
            // objectTopTwentyCombos = _.object(topTwentyCombos);

            // var objectTest = {}
            // topTwentyCombos.forEach(function(element, i){
            // 	objectTest["topping "+i] = "topping: "+element[0] + "count: " + element[1]
            // })
            // var objectTest = {}
            // topTwentyCombos.forEach(function(element, i){
            // 	objectTest[element[0]] = element[1]
            // })



            // console.log(objectTest)

            // var TEST = $('topTwentyCombos').serializeArray()
            // console.dir(TEST);

            // console.log(objectTopTwentyCombos);

            // return topTwentyCombos;
            return arrayOfObjects;
        }

    })

    app.PizzaCounterView = PizzaCounterView

})(window, undefined);



// array.forEach(function(element){
// 	_.countBy(element.toppings, function(x){
// 		if(countObject[x])
// 	}
// })


// emptyArray = []
// _.uniq(array, function(element) {
//     if
// })

// var pizzaArray = self.model.attributes.pizzas

// for (var i = 0; i < pizzaArray.length; i++) {
//     _.union(pizzaArray[i])
//     }

//     var toppingsArray = []
//     pizzaArray.forEach(function(element) {
//         toppingsArray.push(element.toppings)
//     })

//     console.dir(toppingsArray)
