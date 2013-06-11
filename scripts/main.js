require.config({
	paths:{
		"jquery"	: "vendor/jquery/jquery.min", 
		"creatable"	: "vendor/creatable/index", 
		"jquery-ui"	: "vendor/jquery-ui/ui/minified/jquery-ui.min",
		"livequery"	: "vendor/livequery/index",
		"underscore": "vendor/underscore-amd/underscore-min", 
		"creatableExt": "libs/creatableExt", 
	}
});

require([
	'jquery',
	'clock-widget'
], function($, ClockWidget){
	$('.container').append(ClockWidget.render());
});
