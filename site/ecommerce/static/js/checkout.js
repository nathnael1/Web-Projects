export function checkout(){
    $(document).ready(function() {
        $("#checkoutSubmit").on('click', function(){
            let phone = $("#phone").val();
            console.log("Phone number:", phone); // Check if phone value is captured correctly
            let data = {phone: phone};
            $.ajax({
                type: "POST",
                url: "/checkout",
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function(response){
                  
                    if(response.success) {
                        
                        $(".successcheckout").addClass("successAbsolute");
                        $(".successcheckout").html(response.message);
                        setTimeout(() => {
                            $(".successcheckout").removeClass("successAbsolute");
                            $(".successcheckout").html("");   
                            window.location.href = "/";
                        }, 2000);

                    } else {
                        $(".errorcheckout").addClass("errorAbsolute");
                        $(".errorcheckout").html(response.message);
                        setTimeout(() => {
                            $(".errorcheckout").html("");
                            $(".errorcheckout").removeClass("errorAbsolute"); 
                            
                        }, 2000);

                    }
                },
                error: function(xhr, status, error) {
                    console.error("error: ",error)
                }
            });
        });
    });
}

