// Selecting Elements with jQuery
$(document).ready(function() {
    // Manipulating Styles with jQuery
    $('#content').css('background-color', 'lightgray');

    // Manipulating Text with jQuery
    $('#text').text('Updated Text');

    // Manipulating Attributes with jQuery
    $('#changeText').attr('disabled', true);

    // Adding Event Listeners with jQuery
    $('#changeText').click(function() {
        $('#text').text('Text Changed!');
    });

    // Adding and Removing Elements with jQuery
    $('#content').append('<p>New Paragraph</p>');
    $('#content').prepend('<p>Prepended Paragraph</p>');
    $('#content p:first-child').remove();

    // Website Animations with jQuery
    $('#animationBox').animate({marginLeft: '500px'}, 2000);
});
