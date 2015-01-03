var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'rounds' : 'bacSubmit'
  },
  bacSubmit: function(params) {
  	$('#bac-submit-btn').on('click', 
  		console.log('params'));
  }

});

var router = new Router();
Backbone.history.start();

console.log('Router');