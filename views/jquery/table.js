//This code is a copy gotten in https://github.com/mikhail-cct/CA1-In-class-Demo
function draw_table(){
    $("#results").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
            }
        });
    };
    $.getJSONuncached("/get/html")
}
$(document).ready(function(){
    draw_table();
})