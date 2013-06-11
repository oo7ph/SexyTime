// Filename: clockWidget.js

define([
	'jquery',
	'creatableExt',
	'jquery-ui',
	'underscore',
], function(){
	return function(){
		
		var render = function(){
			var build = ['.clock-frame',[
				['.shine',[
					['.glow']
				]],
				['.controls',[
					['.screen',[
						['.gradient'],
						['.output',[
							['.analog',[
								['.glow'],
								['.circle',[
									['.hand1'],
									['.hand2']
								]],
							]],
							['.digital',[
								['.background-digits', '8888'],
								['.digits', '100'],
								['.glow-digits', '100']
							]],
						]]
					]],
					['.buttons'],
					['.slider-container', [
						['.slider-box'],
						['.slider', { render: function(el){
							$(el).slider({
								min: 0,
								max: 100,
								value: 0,
								slide: function(event, ui) {
							    	// setVolume(ui.value / 100);
							  	}
							});
						}}],
						['.dashes', function(n, invervalOfLongDash){
							var dashes = [];
							for(var i = 0; i < n; i++){
								dashes.push(!!(i%invervalOfLongDash) ? ['.dash'] : ['.count-dash']);
							};
							return dashes;
						}(56, 5)]
					]]
				]]
			]];
			return Creatable.create(build);
		};
		
		return {
			render: render
		}	
	}();
});