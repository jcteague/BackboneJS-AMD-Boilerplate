(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'underscore',
			'backbone',
			'text!templates/main.html'
		],
		function($, _, Backbone, MainTemplate) {
			
			return Backbone.View.extend({
				template : _.template(MainTemplate),
				
				initialize : function() {
					
					this.render();
				},
				
				render : function() {
					$(this.el).append(this.template({}));
					
					return this;
				}
			});
		}
	);
})();
