$(document).ready(function () {
    $("#faqs h2").click(
        function () {
            $(this).toggleClass("minus");
            $(this).next().slideToggle(1000);
        }
    ); // end toggle

    $("#faqs h1").animate(
            { fontSize: "275%", opacity: 1, left: "+=175" }, 2000
            ,function () {
                $("#faqs h2").next().fadeIn(1000).fadeOut(1000);
            }
        ); // end animate
}); // end ready