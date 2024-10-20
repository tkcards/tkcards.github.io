$(document).ready(function () {
    var pablo_button = $('.pablo_button');
    var kcup_button = $('.kcup_button');
    var pablo_content = $('.pablo_content');
    var kcup_content = $('.kcup_content');
    var current_game = "";

    // select/unselect pablo 
    pablo_button.click(function() {
        if (pablo_content.is(':visible')) {
            pablo_content.hide();
        } else {
            pablo_content.show();
        }
    });

    // select/unselect kcup 
    kcup_button.click(function() {
        if (kcup_content.is(':visible')) {
            kcup_content.hide();
        } else {
            kcup_content.show();
        }
    });
});