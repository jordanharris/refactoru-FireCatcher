$(function() {
	var hasChangedBackground = false;
	$(".btn-main").on("click", function(e){
		e.preventDefault();
		$(this).closest(".container").find(".active").removeClass("active");
		$(this).addClass("active");
	})

	$(".btn-default").on("click", spreadFireWater);

	function spreadFireWater(e){
		e.preventDefault();
		if($(this).closest(".container").find(".btn-danger").hasClass("active")){
			$(this).addClass("btn-danger");
			runInterval();
			runIntervals();
		}
		else if($(this).closest(".container").find(".btn-info").hasClass("active")){
			$(this).addClass("btn-info");
		}
	}

	function startBurning(){
		var landsDanger= $("#land").find(".btn-danger").parent();
		var landsWarning = $("#land").find(".btn-warning").parent();
		if(!landsDanger.prev().find(".btn-default").hasClass("btn-info") || !landsDanger.next().find(".btn-default").hasClass("btn-info")){
			landsDanger.prev().find(".btn-default").addClass("btn-warning");
			landsDanger.next().find(".btn-default").addClass("btn-warning");
			landsWarning.prev().find(".btn-default").addClass("btn-warning");
			landsWarning.next().find(".btn-default").addClass("btn-warning");
		}
		if($(".btn-warning").length > 40 && hasChangedBackground === false){
			$("body").css("background-image","url(css/Wildfire.jpeg)");
			hasChangedBackground = true;
		}
	}

	function burning(){
		var landsDanger = $("#land").find(".btn-danger").parent();
		if(!landsDanger.prev().find(".btn-default").hasClass("btn-info") || !landsDanger.next().find(".btn-default").hasClass("btn-info")){
			landsDanger.prev().find(".btn-default").addClass("btn-danger");
			landsDanger.next().find(".btn-default").addClass("btn-danger");
		}
	}

	function runInterval(){
		setInterval(function(){startBurning()},1000);
	}
	function runIntervals(){
		setInterval(function(){burning()},2000);
	}
});






My roommates and i are planning on having some drinks at our place and then heading out.


-max





