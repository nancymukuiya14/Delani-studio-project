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

        // contact form validation//
   //adding event listener//
var btn= document.getElementById("send-message");
btn.addEventListener("click", function () {
var name = document.getElementById("fullname").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
    //control structure//
if (name=="" || email=="" || message=="") {
 alert("Please fill all the fields");
 }
 else
 alert("Hello!We are delighted to have you,we have received your message")
});
});

