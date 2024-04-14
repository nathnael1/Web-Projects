export function delete_product() {
    document.addEventListener("DOMContentLoaded", function() {
        const arrow = document.getElementById("arrowpd");
        const membersFile = document.getElementById("membersFilepd");
        const removeButtons = document.querySelectorAll('.removepd');
        const updatedRows = document.querySelectorAll(".productpd tr");
        let bool = true;

        if (updatedRows.length === 0) {
            membersFile.style.display = "none";
            bool = true;
        } else {
            membersFile.style.display ="block";
            arrow.src = "/../static/images/arrow_down.png";
            bool = false;
        }

        arrow.addEventListener("click", () => {
            if (bool) {
                arrow.src = "/../static/images/arrow_down.png";
                membersFile.style.display = "block";
                if (updatedRows.length === 0) {
                    membersFile.style.display = "none";
                    bool = true;
                } else {
                    bool = false;
                }
            } else {
                arrow.src = "../static/images/arrow_right.png";
                membersFile.style.display = "none";
                bool = true;
            }
        });

        removeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const parentRow = button.closest('tr');
                const id = parentRow.querySelector('.idpd');
                const idtext = id.innerText;

                fetch("/delete_product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ product: idtext })
                })
                .then(response => {
                    console.log("successful");
                })
                .catch(error => {
                    console.log("error: ", error);
                });

                parentRow.remove();
                if (updatedRows.length === 0) {
                    info.style.display = "block";
                    membersFile.style.display = "none";
                    bool = true;
                } else {
                    bool = false;
                }
            });
        });
    });
}
