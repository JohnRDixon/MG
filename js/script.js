/* js file */
    $(document).ready(function() {
        $('.menu-link').bigSlide();
    });

    (function( window, undefined ){

})( window, undefined );

var Dropdown = function( button, nav ){

	var that = this;
	
	var respondToClick = function ( e ){
		
		if( that.isHidden ){
			
			that.show();
		}
		else{

			that.hide();
		}

		e.preventDefault();
	}; 

	
	
	this.button 	= document.getElementById( button );
	
	this.nav 		= document.getElementById( nav );

	this.isHidden 	= false;

	this.button.addEventListener( "click", respondToClick);
		
};

Dropdown.prototype.show = function(){

	var c = this.nav.className;

	this.nav.className = c.replace( " hidden", "" );

	this.isHidden = false;
	
	return this.nav.className;


};

Dropdown.prototype.hide = function(){

	
	var c = this.nav.className;

	this.nav.className = c + " hidden";

	this.isHidden = true;

	return this.nav.className;


};

var dd = new Dropdown( "dropdown_button", "dropdown_menu" );

dd. hide();


( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#dropdown_menu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#dropdown_button');

// Create responsive trigger
// menuList.prepend('<li id="dropdown_button"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#dropdown_button', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );


$(document).ready(function(){

	// Custom jQuery code goes here
    $('#cssmenu2 > ul > li:has(ul)').addClass("has-sub");
    $('#cssmenu2 > ul > li > a').click(function() {

	var checkElement = $(this).next();

	$('#cssmenu2 li').removeClass('active');
	$(this).closest('li').addClass('active');	

	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		checkElement.slideUp('normal');
	}

	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#cssmenu2 ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
	}

	if (checkElement.is('ul')) {
		return false;
	} else {
		return true;	
	}
});

});