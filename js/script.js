  
$(document).ready(function(){

 
	console.log($(".st0"))
    var pathArray = $(".st0")



   $.each(pathArray, function(i, d) {
       console.log(i, d);


       var pathLength = d.getTotalLength()
       console.log(pathLength)

       $(d).css("stroke-dasharray", pathLength + " " + pathLength)
       $(d).css("stroke-dashoffset",pathLength)

   });


   	console.log($(".st1"))
    var pathArray = $(".st1")



   $.each(pathArray, function(i, d) {
       console.log(i, d);


       var pathLength = d.getTotalLength()
       console.log(pathLength)

       $(d).css("stroke-dasharray", pathLength + " " + pathLength)
       $(d).css("stroke-dashoffset",pathLength)

   });

    console.log($(".st2"))
    var pathArray = $(".st2")



   $.each(pathArray, function(i, d) {
       console.log(i, d);


       var pathLength = d.getTotalLength()
       console.log(pathLength)

       $(d).css("stroke-dasharray", pathLength + " " + pathLength)
       $(d).css("stroke-dashoffset",pathLength)

   });

    console.log($(".st3"))
    var pathArray = $(".st3")



   $.each(pathArray, function(i, d) {
       console.log(i, d);


       var pathLength = d.getTotalLength()
       console.log(pathLength)

       $(d).css("stroke-dasharray", pathLength + " " + pathLength)
       $(d).css("stroke-dashoffset",pathLength)

   });







})
 


