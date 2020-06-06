"use strict";

$(document).ready(() => {
    
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventID = urlParams.get('eventID');
    console.log(eventID);
    if(eventID != null)
    fetch(parseInt(eventID));
});

                   
	

function drawEventDetailes(data) {
 
    document.getElementById("eventDay").innerHTML = data[0].event_date;
     
    document.getElementById("eventtitle").innerHTML = data[0].title;
    document.getElementById("eventdescription").innerHTML = data[0].description;
    document.getElementById("eventstart_time").innerHTML = data[0].start_time;
    document.getElementById("eventend_time").innerHTML = data[0].end_time;
    document.getElementById("eventNae").innerHTML = data[0].title;  
 
     $('#eventimage').css("background-image", "url(" + data[0].image + ")");
    $('#iFramelocation').attr('src', data[0].location);
}


function fetch(eventId) {
    jQuery.ajax({
        url: 'https://hyp-project.herokuapp.com/api/events/'+eventId ,
        type: 'GET',
        dataType: 'json',
        Origin: "https://hyp-project.herokuapp.com",
        success: (data) => {
            console.log('ajax success');
              
             drawEventDetailes(data);
             
        },
        error: ()=>{
            notifyerror("error");
        }
    });
}

 


  
 
