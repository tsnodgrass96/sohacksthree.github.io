$(document).ready(function() {	$('#signup').submit(function() {		// update user interface		$('#response').html('Adding email address...');				// Prepare query string and send AJAX request		$.ajax({			url: 'inc/store-address.php',			data: 'ajax=true&email=' + escape($('#email').val()),			success: function(msg) {				$('#response').html(msg);			}		});			return false;	});});