//Callback that sets modal title with tr data and toggles it
$("tbody[id=monsterData]").on("click", "tr", function() {
   let name = $(this).find("td:nth-child(1)").text();
   $("#modalLabel").text(name);
   $("#monsterModal").modal('toggle')
});

//Gets monster name and deletes it from database
function deletingMonster(){
    let name = $("#modalLabel").text();
    let url = "/monsters/" + name; 

    //preparing request
    const options = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
    }
    fetch(url, options)
    .then(window.location.reload())
    .catch(err => console.log(err));
    
};