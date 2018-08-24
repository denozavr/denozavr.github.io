/**
 * Created by Denis on 23.07.2015.
 */
$(document).ready(function() {
    $('#msg-submit').click(function() {
        //Disable button after clicking to prevent send many messages from one user
        var enableSubmit = function(ele) {
            $(ele).removeAttr("disabled");
        }
        var that = this;
        var validForm = $("#milo").val().length>0 && ($('#mesa').val().length>0 && isEmail($('#milo').val()));

        if(validForm){
            $(this).attr("disabled", true);
        }
        
        setTimeout(function() { enableSubmit(that) }, 60000);
        
        if(validForm){
            emailjs.send("gmail9129","template_n5ExgOcP",{
                to_name: $("#milo").val(),
                from_name: $("#senderName").val(),
                message_html: $("#mesa").val()
              })
              .then(
                function(response) {
                  console.log("SUCCESS", response);
                  document.getElementById("senderName").value = '';
                  document.getElementById("milo").value = '';
                  document.getElementById("mesa").value = '';
                  swal("Thank you!", "Your message was successfully sent. We will answer you within 24 hours! If you want send another message please wait 60 seconds.", "success");
                }, 
                function(error) {
                  console.log("FAILED", error);
                }
              );

            
            // $.ajax((emailjs.send("gmail9129", "template_n5ExgOcP", {
            //     to_name: $("#milo").val(),
            //     from_name: $("#senderName").val(),
            //     message_html: $("#mesa").val()
            // }))
            // ).done(function(response) {
            //     console.log(response); // if you're into that sorta thing
            //     document.getElementById("senderName").value = '';
            //     document.getElementById("milo").value = '';
            //     document.getElementById("mesa").value = '';
            //     swal("Thank you!", "Your message was successfully sent. We will answer you within 24 hours! If you want send another message please wait 60 seconds.", "success");
            // });
        }else{
            swal("Attention!","You didn't fill required field(s) to send the message!","warning");
            //swal({   title: "Attention!",   text: "You didn't fill required field(s) to send the message!", imageUrl: "warning192.png" });
            //swal({   title: "Attention!",   text: "You didn't fill required field(s) to send the message!", imageUrl: "warning2.png" });

        }



        function isEmail(emailV){
            if(emailV != null && emailV != undefined){
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailV);    
            }
            else{
                return false;
            }
        
        }
    });
});
