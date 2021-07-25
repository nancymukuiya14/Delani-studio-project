//what we do section//
$(document).ready(function () {

    $("#design").click(function () {
        $(".designimage").toggle();
        $(".defination").toggle();
    });
    $("#development").click(function () {
        $(".dvtimage").toggle();
        $(".defination2").toggle();
    });
    $("#product").click(function () {
        $(".productimage").toggle();
        $(".defination3").toggle();
    });
});

    // $(".image-text").hover(function () {
    //     // over
    //     $(".layout").animate({ opacity: 1 }, 50);
    //     $(".bs").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $(".layout").animate({ opacity: 0 }, 50);
    //         $(".bs").removeClass("#portfolio-hover-effect");
    //     });
    // $(".image-text").hover(function () {
    //     // over
    //     $("#projectname2").animate({ opacity: 1 }, 50);
    //     $(".text").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $("#projectname2").animate({ opacity: 0 }, 50);
    //         $(".text").removeClass("portfolio-hover-effect");
    //     });
    // $(".image-text").hover(function () {
    //     // over
    //     $("#projectname3").animate({ opacity: 1 }, 50);
    //     $(".text").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $("#projectname3").animate({ opacity: 0 }, 50);
    //         $(".text").removeClass("portfolio-hover-effect");
    //     });
    // $(".image-text").hover(function () {
    //     // over
    //     $("#projectname4").animate({ opacity: 1 }, 50);
    //     $(".text").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $("#projectname4").animate({ opacity: 0 }, 50);
    //         $(".text").removeClass("portfolio-hover-effect");
    //     });
    // $(".image-text").hover(function () {
    //     // over
    //     $("#projectname5").animate({ opacity: 1 }, 50);
    //     $(".text").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $("#projectname5").animate({ opacity: 0 }, 50);
    //         $(".text").removeClass("portfolio-hover-effect");
    //     });
    // $(".image-text").hover(function () {
    //     // over
    //     $("#projectname6").animate({ opacity: 1 }, 50);
    //     $(".text").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $("#projectname6").animate({ opacity: 0 }, 50);
    //         $(".text").removeClass("portfolio-hover-effect");
    //     }); $(".image-text").hover(function () {
    //         // over
    //         $("#projectname7").animate({ opacity: 1 }, 50);
    //         $(".text").addClass("portfolio-hover-effect");
    //     },
    //         function () {
    //             // out
    //             $("#projectname7").animate({ opacity: 0 }, 50);
    //             $(".text").removeClass("portfolio-hover-effect");
    //         });
    // $(".image-text").hover(function () {
    //     // over
    //     $("#projectname8").animate({ opacity: 1 }, 50);
    //     $(".text").addClass("portfolio-hover-effect");
    // },
    //     function () {
    //         // out
    //         $("#projectname8").animate({ opacity: 0 }, 50);
    //         $(".text").removeClass("portfolio-hover-effect");
    //     });





// contact form validation//

//adding event listener//
var btn = document.getElementById("send-message");
btn.addEventListener("click", function () {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    //control structure//
    if (name == "" || email == "" || message == "") {
        alert("Please fill all the fields");
    }
    else
        alert("Hello!We are delighted to have you,we have received your message")
});


