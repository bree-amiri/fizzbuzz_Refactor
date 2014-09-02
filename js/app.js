$(document).ready(function(){
var finalString="";
var result="";
var starVal;
	
	 $('input').keydown(function (enter) {
            if (enter.keyCode == 13) {
	 	endi=+$('input').val();
	 	
	 	if (Test(endi)){
	 		fb(endi);
	 		}else{ 
	 			alert("OOO! Come on! Stop Monkey Business and Input an Appropriate Number!");
	 			}
	 	}

	 });
	 
});
 
var fb=function(lastNum){
	var i=1;	 
		 	 while (i<=lastNum){
	  if (!(i%3==0|i%5==0)){
	  	result=i+"  ,";
	  }else if(i%3==0 & i%5!=0){
	  	result="Fizz  ,"
	  	
	  }else if(i%3!=0 & i%5==0){
	  	result="Buzz  ,"
	  	
	  }else if (i%3==0 & i%5==0){
	  	result="FizzBuzz  ,"
	  }
	  $("<p style='display:inline-block'> result </p>").appendTo("#counting").html( "<p style='display:inline-block'>" +result +"</p>");
	  	i++
	  }
	 	
}
var Test= function(startVal){
    
      return ((startVal - Math.floor(startVal)) == 0) ;
}