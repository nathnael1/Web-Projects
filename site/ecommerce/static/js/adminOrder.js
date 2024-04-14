export function order() {
    document.addEventListener("DOMContentLoaded", function() {
        const arrow = document.getElementById("arrowo");
        const membersFile = document.getElementById("membersFileo");
        const removeButtons = document.querySelectorAll('.removeo');
        const updatedRows = document.querySelectorAll(".orderbody tr");
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
                const id = parentRow.querySelector('.ido');
                const username = id.innerText;

                fetch("/delete_order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ order: username })
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
