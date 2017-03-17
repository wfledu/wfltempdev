$(function($) {

    "use strict";

        //For fullPage
        $("#fullpage").fullpage({
            navigation: true,
            navigationTooltips: ["Home", "Features", "About Us", "Contact Us"],
            responsiveWidth: 991
        });

        // For Word Rotator
        $("#word-rotate").Morphext({
            animation: "fadeIn",
            separator: ",",
            speed: 4000
        });

        //For countdown
        $("#countdown").countdown("2018/01/01", function(event) {
            $(this).html(event.strftime("" + "<div class='countdown-section'><span>%-w</span> week%!w </div>" + "<div class='countdown-section'><span>%-d</span> day%!d </div>" + "<div class='countdown-section'><span>%H</span> hr </div>" + "<div class='countdown-section'><span>%M</span> min </div>" + "<div class='countdown-section'><span>%S</span> sec </div>"));
        });

        // For Typer
        $("[data-typer-targets]", "#home").typer();

        // For Background Slideshow
        $(".slideshow-div", "#fullpage").backstretch([
            "images/Image_02.jpg",
            "images/Image_01.jpg",
            "images/Image_03.jpg"
        ], {duration: 3000, fade: 750});
        // Duration is the amount of time in between slides,
        // and fade is value that determines how quickly the next image will fade in

        // For Mailchimp Form
        function callbackFunction (resp) {
            if (resp.result === "success") {
                swal("Good job!", resp.msg, "success");
            }
            else {
                swal({ title: "Error!", text: resp.msg, type: "error", confirmButtonText: "Cool" });
            }
        }
        $(".mc-form", "#home").ajaxChimp({
            url: "//themesease.us13.list-manage.com/subscribe/post?u=159f503811a2da9752c412bdb&amp;id=618ff52303",
            callback: callbackFunction
        });

        // For Contact Us Form
        var options = {
            success: function() {
                $("#form").clearForm();
                swal("Thank You!", "We will get back to you as soon as possible!", "success");
            }
        };
        $("#form").ajaxForm(options);

        // For Small Screens - We use normal scrooling instead of fullpage.js on small devices
        var width = $(window).width();
        if (width < 991) {
            $(window).on("scroll resize", function() {
                if ($(window).scrollTop() >= 75) {
                    $("body").addClass("fixed-header");
                }
                else {
                    return $("body").removeClass("fixed-header");
                }
            });
        }


        //For Switcher
        $(".handle", "#switcher").on("click", function(){
            var clicks = $(this).data("clicks");
            if (clicks) {
                $(".switcher").css("left", "-200px");
            } else {
                $(".switcher").css("left", "0px");
            }
            $(this).data("clicks", !clicks);
        });

        //Switch Color
        $(".color", "#switcher").on("click", function(){
            var color = $(this).data("color-class");
            $("head").append("<link rel='stylesheet' href='styles/" + color + ".css' type='text/css'>");
        });

        // Switch Header
        $(".switch-header.light", "#switcher").on("click", function(){
            $("body").removeClass("dark-header").addClass("light-header");
        });
        $(".switch-header.dark", "#switcher").on("click", function(){
            $("body").removeClass("light-header").addClass("dark-header");
        });

        // For page transitions
        $(".animsition").animsition();

});
