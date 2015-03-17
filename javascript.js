$(document).ready(function(){
//FUNCTIONS
function setHeight(){	

if($(window).width() > 480)
{
var height = $(".col").width();
$(".col").height(height);
}

else{
	$(".col").height("45px");
}

}
//
window.setInterval(function(){
	setHeight();
}, 100);


});