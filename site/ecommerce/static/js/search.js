let words = []
export function upload(){
    

    fetch("/fetchdata")
    .then(response => response.json())
    .then(data =>{
        data.allNames.forEach(element => {
            if (!words.includes(element["name"])) {
                words.push(element["name"]);
            }
        });
    })
    .catch(error => console.error(error))
  
}
export function search(){

    let dropdown = $(".searchDropdown");
    dropdown.hide();
    function createSearchDropdown(searchTerm) {
        
        dropdown.empty(); 

        let filteredWords = words.filter(function(word) {
            return word.toLowerCase().includes(searchTerm.toLowerCase());
        });


        filteredWords.forEach(function(word) {
            let item = $("<div>").addClass("searchDropdownItem").text(word);
            dropdown.append(item);
        });

        if (filteredWords.length > 0) {
            dropdown.show();
        } else {
            dropdown.hide();
        }
    }
    $("#searchInput").keyup(function() {
        let searchTerm = $(this).val();
        createSearchDropdown(searchTerm);
    });
    $(document).click(function(event) {
        if (!$(event.target).closest(".searchDropdown").length) {
            $(".searchDropdown").hide();
        }
    });

}
export function getting(){
    $(".searchDropdown").click(function(event){
        let value = event.target.innerHTML;
        $("#searchInput").val(value); // Use val() to set the value of an input field
        $(".searchDropdown").hide();
    });
}
