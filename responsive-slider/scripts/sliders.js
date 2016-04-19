$('.slider').each(function(){
	var $this =$(this);
	var $group = $this.find('.slide-group');
	var $slides =$this.find('.slide');
	var buttonList = [];
	var currIndex = 0;
	var timeout;


	function move(newIndex){
		var animateLeft, slideLeft;

		advance();

    	//Do nothing if current slide is showing or slide is animating
		if ($group.is)(':animated') || currIndex === newIndex) {
		return;
    	}

    	buttonList[currIndex].removeClass('active'); //Remove class from item
    	buttonList[newIndex].addClass('active'); //Add class to new item

    	if (newIndex > currIndex){
    		slideLeft = '100%';
    		animateLeft = '-100%';
    	} else {
    		slideLeft = '-100%';
    		animateLeft = '100%';
    	}

    	$slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    	$group.animate( {left: animateLeft} , function() {
    		$slides.eq(currIndex).css({display: 'none'});
    		$slides.eq(newIndex).css( {left: 0} );
    		$group.css( {left:0} );
    		currIndex = newIndex;
    	});
	}

	function advance(){
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			if (currIndex < ($slides.length - 1)) {
				move(currIndex + 1);
			} else {
				move(0);
			}
		}, 4000);
	}

	$.each($slides, function(index){
		var $button = $('<button type="button" class="slide-btn">&bull;</button>');
		if (index === currIndex {
			$button.addClass('active');
		}
		$button.on('click', function(){
			move(index);
		}).appendTo('.slide-buttons');
		buttonArray.push($button);
	});

	advance();
});