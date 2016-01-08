$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
		    url: "http://formspree.io/vernooy.n@gmail.com",
		    method: "POST",
		    data: formData,
		    dataType: "json"
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text("Thank you for your message");

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');

			setTimeout(function(){
				$(formMessages).text("");
				$(formMessages).removeClass('success');
			}, 2000)
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			$(formMessages).text('An error occured and your message could not be sent');
		});

	});

});
