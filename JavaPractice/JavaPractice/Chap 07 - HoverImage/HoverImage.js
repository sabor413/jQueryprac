$(document).ready(function () {
    $("#image_rollovers img").each(function () {
        var oldURL = $(this).attr("src");   // gets the src attribute
        var newURL = $(this).attr("id");    // gets the id attribute

        //preload images
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers
        $(this).hover(
            function () {
                $(this).attr("src", newURL);    // sets the src sttribute
            },
            function() {
                $(this).attr("src", oldURL);    // sets the src sttribute
            }
        ); // end hover
    }); // end each
}); // end ready