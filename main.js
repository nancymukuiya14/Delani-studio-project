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
    // portfolio hover effect//

    $("#nancy1").hover(function () {
        $(".text1").animate({ opacity: 0.8 },50);

    },
        function () {
            $(".text1").animate({ opacity: 0 },50)
        });

    $("#nancy2").hover(function () {
        $(".text2").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text2").animate({ opacity: 0 },50)
        });
    $("#nancy3").hover(function () {
        $(".text3").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text3").animate({ opacity: 0 },50)
        });
    $("#nancy4").hover(function () {
        $(".text4").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text4").animate({ opacity: 0 },50)
        });
    $("#nancy5").hover(function () {
        $(".text5").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text5").animate({ opacity: 0 },50)
        });
    $("#nancy6").hover(function () {
        $(".text6").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text6").animate({ opacity: 0 },50)
        });
    $("#nancy7").hover(function () {
        $(".text7").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text7").animate({ opacity: 0 },50)
        });
    $("#nancy8").hover(function () {
        $(".text8").animate({ opacity: 0.8 },50);
    },
        function () {
            $(".text8").animate({ opacity: 0 },50)
        });

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
        alert(name + "" + "" + ",thanks a bunch!😎,we have received your message")
});
});


