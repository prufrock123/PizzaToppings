
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(

        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./js/pizzaProcessor.js"},
        {url: "./pizzas.js"},

        // Styles
        {url: "./bower_components/normalize.css/normalize.css"},
        {url: "./bower_components/typeplate-starter-kit/css/typeplate.css"},
        {url: "./dist/style.css"},

        // foundation js
        {url: "./bower_components/foundation/js/foundation.js"},
        {url: "./bower_components/foundation/js/foundation/foundation.offcanvas.js"},

        // Routers
        {url: "./js/routers/pizzaRouter.js"},
        
        // Views
        {url: "./js/views/appview.js"},
        {url: "./js/views/pizzaCounterView.js"},
        {url: "./js/views/pizzaFormView.js"},
        

        // Models
        {url: "./js/models/pizzaData.js"}



        
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
        var router = new app.PizzaRouter();
    })

}
    
