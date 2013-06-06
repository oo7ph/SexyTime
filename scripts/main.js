var ClockWidget = function(){
	
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
							['.digits', '100']
						]],
					]]
				]],
				['.buttons'],
				['.slider']
			]]
		]];
		return Creatable.create(build);
	};
	
	return {
		render: render
	}
}();


$('.content').livequery(function(){
	$('.content').append(ClockWidget.render());
})