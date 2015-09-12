$(document).ready(function () {
    $("#faqs h2").click(
        function () {
            $(this).toggleClass("minus");
            $(this).next().slideToggle(1000);
        }
    ); // end toggle

    // Initial Animate Example --
    //$("#faqs h1").animate(
    //        { fontSize: "275%", opacity: 1, left: "+=175" }, 2000
    //        ,function () {
    //            $("#faqs h2").next().fadeIn(1000).fadeOut(1000);
    //        } // end call back function
    //    ); // end animate

    //// Chained Animations - pg 261
    //$("#faqs h1").click(function () {
    //    $(this).animate(
    //                { fontSize: "650%", opacity: 1, left: "+=275" }, 2000 )
    //           .animate(
    //                { fontSize: "175%", opacity: 1, left: "-=100" }, 1000
    //           ) // end animate
    //}); // end click function

    // Queued Animations - pg 261
    $("#faqs h1").click(function () {
        $(this).animate(
                    { fontSize: "650%", opacity: 1, left: "+=275" }, 2000);
        $(this).animate(
                    { fontSize: "175%", opacity: 1, left: "-=100" }, 1000);
    }); // end click function

    // Queued Animations - pg 261
    $("#faqs h1").click(function () {
        $(this).animate(
                    { fontSize: "650%", opacity: 1, left: "+=275" }, 2000,
            function() {
                $(this).animate(
                    { fontSize: "175%", opacity: 1, left: "-=100" }, 1000);
            } // end call back function
        ); // end animate call with call back function
    }); // end click function
}); // end ready