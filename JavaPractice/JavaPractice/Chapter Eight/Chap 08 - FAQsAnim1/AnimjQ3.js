$(document).ready(function () {
    $("#faqs h2").toggle(
        function () {
            $(this).toggleClass("minus");
            $(this).next().slideDown(1000, "easeOutBounce");
        },
        function () {
            $(this).toggleClass("minus");
            $(this).next().slideUp(1000, "easeInBounce");
        }
    ); // end toggle 

    // Queued Animations - pg 261
    $("#faqs h1").click(function () {
        $(this).animate(
                    { fontSize: ["650%", "easeInExpo"], opacity: [1, "swing"], left: ["+=275", "easeOutExpo"] }, 2000);
        $(this).animate(
                    { fontSize: "175%", opacity: 1, left: "-=100" }, 1000);
    }); // end click function
}); // end ready