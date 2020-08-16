$(function() {
	Cufon.replace('a, span').CSS.ready(function() {
		var $menu 		= $("#slidingMenu");

		/**
		* the first item in the menu,
		* which is selected by default
		*/
		var $selected	= $menu.find('li:first');

		/**
		* this is the absolute element,
		* that is going to move across the menu items
		* It has the width of the selected item
		* and the top is the distance from the item to the top
		*/
		var $moving		= $('<li />',{
			className	: 'move',
			top			: $selected[0].offsetTop + 'px',
			width		: $selected[0].offsetWidth + 'px'
		});

		/**
		* each sliding div (descriptions) will have the same top
		* as the corresponding item in the menu
		*/
		$('#slidingMenuDesc > div').each(function(i){
			var $this = $(this);
			$this.css('top',$menu.find('li:nth-child('+parseInt(i+2)+')')[0].offsetTop + 'px');
		});

		/**
		* append the absolute div to the menu;
		* when we mouse out from the menu
		* the absolute div moves to the top (like initially);
		* when hovering the items of the menu, we move it to its position
		*/
		$menu.bind('mouseleave',function(){
				moveTo($selected,400);
			  })
			 .append($moving)
			 .find('li')
			 .not('.move')
			 .bind('mouseenter',function(){
				var $this = $(this);
				var offsetLeft = $this.offset().left - 20;
				//slide in the description
				$('#slidingMenuDesc > div:nth-child('+ parseInt($this.index()) +')').stop(true).animate({'width':offsetLeft+'px'},400, 'easeOutExpo');
				//move the absolute div to this item
				moveTo($this,400);
			  })
			  .bind('mouseleave',function(){
				var $this = $(this);
				var offsetLeft = $this.offset().left - 20;
				//slide out the description
				$('#slidingMenuDesc > div:nth-child('+ parseInt($this.index()) +')').stop(true).animate({'width':'0px'},400, 'easeOutExpo');
			  });;

		/**
		* moves the absolute div,
		* with a certain speed,
		* to the position of $elem
		*/
		function moveTo($elem,speed){
			$moving.stop(true).animate({
				top		: $elem[0].offsetTop + 'px',
				width	: $elem[0].offsetWidth + 'px'
			}, speed, 'easeOutExpo');
		}
	}) ;
});



// Subpage Nav Menu Functions



function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }



  // Show & Tell Image Functions

function myFunction(img) {
	// Get the expanded image
	var expandImg = document.getElementById("expandedImg");

	var x = document.getElementsByClassName("closebtn")[1];

	x.style.visibility = "visible";
	// Get the image text
	var imgText = document.getElementById("imgtext");

	imgText.style.visibility = "visible";
	// Use the same src in the expanded image as the image being clicked on from the grid
	expandImg.src = img.src;
	// Use the value of the alt attribute of the clickable image as text inside the expanded image
	imgText.innerHTML = img.alt;
	// Show the container element (hidden with CSS)
	expandImg.parentElement.style.display = "block";
}