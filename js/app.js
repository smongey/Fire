App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('work', function(){
		this.resource('project', { path: ':post_id' });
	});
});


App.WorkRoute = Ember.Route.extend({
	model: function(){
		return work;
	}
});

var work = [{
	id: "1",
	title: "Project One",
	description: "This is some text"
}, {
	id: "2",
	title: "Project Two",
	description: "This is also some text"
}];