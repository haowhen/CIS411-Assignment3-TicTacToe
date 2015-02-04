$(document).ready(function () {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#registrationform").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2
            },
            lname: {
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true,
                digits: true,
                minlength: 10
            }
            
        }
    });
});