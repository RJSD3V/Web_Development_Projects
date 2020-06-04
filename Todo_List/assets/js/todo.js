$("ul").on("click","li",function(){

  $(this).toggleClass("completed");
	
});

$("ul").on("click",".trash",function(event){

	$(this).parent().fadeOut(function(){
      $(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	console.log("Key Press");
	if(event.which === 13){
		var data= $(this).val();
		$("ul").append("<li class=\"item\"><span  class=\"material-icons trash\">delete</span><span id=\"text\">"+data+"</span></li>");
		$(this).val(""); 
	}

})

$(".add").click(function(){
	$(".data").slideToggle();
});



