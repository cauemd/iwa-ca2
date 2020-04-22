
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

    //iterating through the json and appending the data to the table
    for(let i = 0; i < data.length; i++){
        $("tbody[id=monsterData]")
            .append(" <tr><td scope=\"row\">" + data[i].name + "</td>" + 
                    "<td>" + data[i].size + "</td>" +
                    "<td> <img src=\"img/" + data[i].type + ".png\" title=\"" + 
                    data[i].type.charAt(0).toUpperCase() + data[i].type.slice(1) +   "\" height=\"32\" width=\"32\"></td></tr>");
    }
    
    
};

fetchingAllMonsterData();