
export function extendProduct(){
    const arrowp = document.getElementById("arrowp");
    const membersFilep = document.getElementById("membersFilep");
    membersFilep.style.display = "none"
    let boolp = true;
  
    arrowp.addEventListener("click", () => {
        if (boolp) {
            arrowp.src = "/../static/images/arrow_down.png";
            membersFilep.style.display = "block";
            boolp = false;
        } else {
            arrowp.src = "../static/images/arrow_right.png";
            membersFilep.style.display = "none";

            boolp = true;
        }
    });
}
export function addingProduct(){
    document.getElementById("error").style.display="none"
    document.getElementById("success").style.display = "none"
    document.getElementById("membersFilep").addEventListener("submit", (event) => {
    event.preventDefault();
    const dropdown = document.getElementById("category");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    const formData = new FormData(document.getElementById("membersFilep"));
    formData.append('text_data', selectedOption)
    fetch("/admin_manager", {
        method: "POST",
        body:formData

   
    })
    .then(response => response.json())
       
    .then(data => {
        if(data.success){
            document.getElementById("error").style.display="block"
            document.getElementById("success").style.display = "block"
            document.getElementById("error").innerHTML = ""
            document.getElementById("error").classList.remove("success")
            document.getElementById("success").innerHTML = data.message;
            document.getElementById("success").classList.add("success")
        }else{
            document.getElementById("error").style.display="block"
            document.getElementById("success").style.display = "block"
            document.getElementById("success").innerHTML = ""
            document.getElementById("success").classList.remove("success")
            document.getElementById("error").classList.add("error")
            document.getElementById("error").innerHTML = data.message
        }
    })
});
}