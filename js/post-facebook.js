var $lm_post_facebook_jquery = jQuery.noConflict();

$lm_post_facebook_jquery(document).ready(function($) {
	
	$( '.post-php, .post-new-php' ).on( 'mousedown', 'textarea#lm_fb_message, input#lm_fb_linkname, input#lm_fb_caption, textarea#lm_fb_description', function() {
		
		$( 'input[name=lm_facebook_type]' ).val( 1 );
		$( 'span.fb_default_format' ).hide();
		$( 'span.fb_manual_format' ).show();
		$( 'a#set_to_default_fb_post' ).show();
		
	});
	
	$( '.post-php, .post-new-php' ).on( 'click', 'a#set_to_default_fb_post', function( e ) {
	
		e.preventDefault();
		
		$( 'input[name=lm_facebook_type]' ).val( 0 );
		$( 'span.fb_default_format' ).show();
		$( 'span.fb_manual_format' ).hide();
		$( 'a#set_to_default_fb_post' ).hide();
		
	});
		
	$('.post-php, .post-new-php').on( 'click', 'input#lm_republish_button', function() {
		
		facebook_array = {
			'message':			$( 'textarea#lm_fb_message' ).val(),
			'linkname':			$( 'input#lm_fb_linkname' ).val(),
			'caption':			$( 'input#lm_fb_caption' ).val(),
			'description':		$( 'textarea#lm_fb_description' ).val(),
			'picture':			$( 'input[name=facebook_image]' ).val()
		};
		
		var data = {
			'action': 			'republish',
			'id':  				$( 'input#post_ID' ).val(),
			'post_author':		$( 'input#post_author' ).val(),
			'facebook_array':  	facebook_array,
			'_wpnonce': 		$( 'input#leenkme_wpnonce' ).val()
		};
		
		ajax_response( data );
		
	});
	
});