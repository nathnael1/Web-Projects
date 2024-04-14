export function initializeBuyButton() {
    $(document).on('click', '.buy', function(e) {
        e.preventDefault();
        let productId = $(this).data("product");
        let productName  = $(this).closest(".card").find("h3").text();
        let productPrice  = $(this).closest(".card").find(".price").text();
        let src  = $(this).closest(".card").find(".imgBox img").attr("src");
        let data = {
            id: productId,
            name: productName,
            price: productPrice,
            src:src
        };
        $.ajax({
            type: "POST",
            url: "/buy",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(response) {
                // Redirect to checkout page
                window.location.href = "/checkout";
            },
            error: function(xhr, status, error) {
                console.error("Error buying product:", error);
            }
        });
       
    });
}