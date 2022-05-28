$(document).ready(function () {
    $(".hamburger").click(function () {
        if ($(".hamburger").hasClass("hamburger-closed")) {
            $(".hamburger").removeClass("hamburger-closed");

            $(".bar:first").css("transform", "translateY(8px) rotate(45deg)");
            $(".bar:nth-child(2)").css("opacity", "0");
            $(".bar:last").css("transform", "translateY(-8px) rotate(-45deg)");
        }
        else{
            $(".hamburger").addClass("hamburger-closed");
            
            $(".bar:first").removeAttr("style");
            $(".bar:nth-child(2)").css("opacity", "1");
            $(".bar:last").removeAttr("style");
        }

        $(".menu").toggle(200);
    });
});