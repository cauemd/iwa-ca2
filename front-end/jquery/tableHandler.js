
//Fetches the data from the mongo db and returns it as in json format
function fetchingData(){
    fetch("/monsters")
        .then(response => response.json())
        .then(json => draw_table(json));
    // const json = await response.json();
    // // for(let i = 0; i < json.length; i++){
    // //     console.log(json[i]);
    // // }   
    // return json;
}


function draw_table(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i].name);
    }
    
    
};

fetchingData();