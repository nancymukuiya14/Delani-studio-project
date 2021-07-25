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

    $(".text1").hover(function () {
        $(".text1").animate({ opacity: 0.8 },1000);

       });

    $(".text2").hover(function () {
        $(".text2").animate({ opacity: 0.8 },1000);

       });

    $(".text3").hover(function () {
        $(".text3").animate({ opacity: 0.8 },1000);

       });

    $(".text4").hover(function () {
        $(".text4").animate({ opacity: 0.8 },1000);

       });

    $(".text5").hover(function () {
        $(".text5").animate({ opacity: 0.8 },50);

       });

    $(".text6").hover(function () {
        $(".text6").animate({ opacity: 0.8 },1000);

       });

    $(".text7").hover(function () {
        $(".text7").animate({ opacity: 0.8 },1000);

       });

    $(".text8").hover(function () {
        $(".text8").animate({ opacity: 0.8 },1000);

       });
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


