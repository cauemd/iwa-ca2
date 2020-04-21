//Gets the information from the forms and sends it to the API to be added to the database when the button is clicked
function addMonster(){
    let name = $("#nameInput").val();
    
    //verifying if the form is not empty
    if (name.length === 0){
        $("#errorMsg").attr("hidden",false);
    } else {
        //getting value from the type select form
        let type = $("#typeInput").val();
        //getting value from size select form
        let size = $("#sizeInput").val();

         //preparing request
         const data = {name, type, size};
         const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },    
            body:  JSON.stringify(data)
         }
         fetch("/monsters", options)
            .then(window.location.reload());
    }
}