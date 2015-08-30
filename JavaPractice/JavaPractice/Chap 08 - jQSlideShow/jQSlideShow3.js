$(document).ready(function () {
    var nextSlide = $("#slides img:first-child");
    var nextCaption
    var nextSlideSource;

    // slide show function
    var slideshow = function () {
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            function () {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                nextSlideSource = nextSlide.attr("src");
                nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
                $("#caption").text(nextCaption).fadeIn(1000);
            }) // end fadeOut function which fades in next slide
    };// end slideshow function

    var timer1 = setInterval(slideshow, 3000);

    $("#slide").toggle(
        function () {
            clearInterval(timer1);
        },
        function () {
            timer1 = setInterval(slideshow, 3000);
        }
     ) // end toggle function
});// end ready function