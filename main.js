$( document ).ready(function() {
// Handler for .ready() called.
	
	var prevId;
	
	$(".bigtopics1").fadeIn("slow");

	$(".bigtopics").mouseover(function() {
		var id = this.id;
		mouseOn(id);
	});
	
	$(".bigtopics").mouseout(function() {
		var id = this.id;
		mouseOut(id);
	});
	
	function mouseOn(x) {
		switch(x) {
			case "link1":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#E60000",
				"color": "#FFFFFF",
				"border": "solid #E60000 5px"
				});
				break;
			case "link2":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#FF9900",
				"color": "#FFFFFF",
				"border": "solid #FF9900 5px"
				});
				break;
			case "link3":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#FFCC00",
				"color": "#FFFFFF",
				"border": "solid #FFCC00 5px"
				});
				break;
			case "link4":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#00B800",
				"color": "#FFFFFF",
				"border": "solid #00B800 5px"
				});
				break;
			case "link5":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#0066FF",
				"color": "#FFFFFF",
				"border": "solid #0066FF 5px"
				});
				break;
			case "link6":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#A319D1",
				"color": "#FFFFFF",
				"border": "solid #A319D1 5px"
				});
				break;
			default:
				break;	
		}
	}
	
	function mouseOut(x) {
		$("#"+ x).css({
                transition : 'background-color 1s ease-in-out',
                "background-color": "gray",
				"color": "#999999"
				});
	}
	
	$(".bigtopics").on("click", function() {
		mouseOut(prevId);
		$(".bigtopics").on("mouseout", function() {
			var id = this.id;
			mouseOut(id);
		});
		/*$(".smalltopics").css({
			display : "inline"
			});*/
		$(".smalltopics").hide();
		$(".smalltopics").fadeIn("slow");
		var id = this.id;
		$("#" + id).off("mouseout");
		prevId = this.id;
	});
	
});