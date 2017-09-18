$(document).ready(function(){
    $(".button1").click(function(){
        $(".div1").addClass("divOption1");
        	$(".div2").removeClass("divOption2");	
    });
});

$(document).ready(function(){
    $(".button2").click(function(){
        $(".div2").toggleClass("divOption2");
        	$(".div1").removeClass("divOption1");
    });
});