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

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var entree = $(this).attr("id") - 1;
		delete_row(entree);
	})
};

function delete_row(mon)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				monster: mon
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function(){
    draw_table();
})