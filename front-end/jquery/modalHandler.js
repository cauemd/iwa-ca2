//Gets monster name and deletes it from database
function deletingMonster(){
    let name = $("#modalLabel").text();

    //Generating confirmation alert
    if(confirm("You are about to delete " + name + (" from the system. Proceed?"))){

        let url = "/monsters/" + name; 

        //preparing request
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }
        fetch(url, options)
        .then(window.location.reload())
        .catch(err => console.log(err));
    };
    
};

//Gets the information from the modal and updates the monster info in the database
function updatingMonster(){
    let name = $("#modalLabel").text();
    
    //getting value from the type select form
    let type = $("#typeModal").val();
    //getting value from size select form
    let size = $("#sizeModal").val();

    let url = "/monsters/" + name; 

    //preparing request
    const data = {name, size, type};
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(data)
    }
    console.log(options.body);
    fetch(url, options)
        .catch(err => console.log(err));
    window.location.reload();
    
};