$.fn.flyTo = function(options) {
	var _settings = $.extend({
		duration : 400,
		callback : function(){ }
	}, options);

	return this.each(function() {
		var _ = $(this), _target = $(_settings.target),
			_clone = _.clone(false).height( _.height());

		_clone.find('a').remove();
		_clone.insertAfter(_).fadeTo( _settings.duration, 0);
		_.fadeTo( _settings.duration, 0.5);

		_.css({
			position:'absolute',
			top:_.position().top+'px',
			left:_.position().left+'px'
		}).animate({
				top:(_target.position().top+_target.height())+'px',
				left:_target.position().left+'px'
			},_settings.duration,'swing',function(){

				_.appendTo(_target).css({position:''});
				var _sortedItems = _target.children().sort(function(a, b) {
					var
						vA = $(a).data( _settings.orderByDataKey ),
						vB = $(b).data( _settings.orderByDataKey );
					return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
				});
				_target.append(_sortedItems);
				_clone.remove();
				_.fadeTo( 1000, 1);
				_settings.callback();
			});
	});
};
