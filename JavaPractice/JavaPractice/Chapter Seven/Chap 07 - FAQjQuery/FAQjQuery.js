$(document).ready(function () {
    $("#faqs h2").toggle(
        function () {
            $(this).addClass("minus");
            $(this).next().show();
            //$(this).next().removeClass("closed");
            //$(this).next().addClass("open");
        },
        function () {
            $(this).removeClass("minus");
            $(this).next().hide();
            //$(this).next().removeClass("open");
            //$(this).next().addClass("closed");
        }
    ); //end toggle
}); //end ready 