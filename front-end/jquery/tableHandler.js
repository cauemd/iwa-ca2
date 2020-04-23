
//Fetches the data from the mongo db and returns it in json format
function fetchingAllMonsterData(){
    fetch("/monsters")
        .then(response => response.json())
        .then(json => draw_table(json))
        .catch(err => console.log(err));
}

//Receives a json, select the values of each element inside it and append it to the table in index.html
function draw_table(data){
    //emptying the table
    $("tbody[id=monsterData]").empty();

    //sorting the data by monster name
    data.sort((a,b) => {
        if(a.name > b.name){
            return 1;
        } else {
            return -1;
        }
    });

    //iterating through the json and appending the data to the table
    for(let i = 0; i < data.length; i++){
        $("tbody[id=monsterData]")
            .append(" <tr><td scope=\"row\">" + data[i].name + "</td>" + 
                    "<td>" + data[i].size + "</td>" +
                    "<td> <img src=\"img/" + data[i].type + ".png\" title=\"" + 
                    data[i].type.charAt(0).toUpperCase() + data[i].type.slice(1) +   "\" height=\"32\" width=\"32\"></td></tr>");
    }
    
    
};

//Callback that sets modal title with tr data and toggles it
$("tbody[id=monsterData]").on("click", "tr", function() {
   let name = $(this).find("td:nth-child(1)").text();
   $("#modalLabel").text(name);
   $("#monsterModal").modal('toggle')
});

fetchingAllMonsterData();