$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:5,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:5
            },
            emailAddress:{
                required:true,
                email:true

            },
            password:{
                minlength:6
            },
            day:{
                required:true,


            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
            required:"enter first name",
            minlength:"enter atleast 4 char"
            }
        }
    })
})