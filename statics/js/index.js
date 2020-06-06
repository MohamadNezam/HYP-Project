"use strict";

$(document).ready(() => {
    

    fetchEvents('https://hyp-project.herokuapp.com/api/events?limit=4&order=event_date');
  
});

function drawEvents(data) {
    var date = '';
    var dateData = '';
    var time = '';
    var s = '';
    var shortDescription= 'hh';
    var backgroung='bg-light';
    /*
    var id_activity='';
    var location= '';
    var title= '';
    
    var start_time= '';
    var end_time= '';
    var image= '';
    var service_day= '';
    var capacity= '';
    var age= '';
    var id_category= '';
    
    */
       
         
// /eventDetailes.html?eventID='+data[i].id_activity+'
	if(data.length==0){
		s ='<div class="tt-no-result ml-5 mt-5">No results found.</div>';
	}
		
	  
  for (var i = 0; i < data.length; i++) {
        //data.length
        
         s = s +'<div class="item">'
               +'<div class="img_wrp">'
               +'<div class="img_text">'
               +'<h5><b>'+data[i].title+'</b></h5>'
               +'<p> '+data[i].description.substring(0,15)+'... <a href="/eventDetailes.html?eventID='+data[i].id_activity+'">More</a>   </p>'
               +'</div>'
               +'<img class="mt-3 img-fluid" src="'+data[i].image+'" alt="'+data[i].image+'">'
               +'</div>'
               +'</div>'

    }
     
    return s;
}

 


function fetchEvents(ApiUrl) {
    jQuery.ajax({
        url: ApiUrl ,
        type: 'GET',
        dataType: 'json',
        Origin: "https://hyp-project.herokuapp.com",
        success: (data) => {
            console.log('ajax success');
            var s = drawEvents(data);
            
            $('#LatestEvents').html(s);
        },
        error: ()=>{
            notifyerror("error");
        }
    });
}
