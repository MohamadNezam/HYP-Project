"use strict";

$(document).ready(() => {
    
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventID = urlParams.get('eventID');
    console.log(eventID);
    if(eventID != null){
        fetch(parseInt(eventID));
        fetch2(parseInt(eventID));
    }
    
});

                   
	

function drawEventDetailes(data) {
 
    document.getElementById("eventDay").innerHTML = data[0].event_date;
     
    document.getElementById("eventtitle").innerHTML = data[0].title;
    document.getElementById("eventdescription").innerHTML = data[0].description;
    document.getElementById("eventstart_time").innerHTML = data[0].start_time;
    document.getElementById("eventend_time").innerHTML = data[0].end_time;
    document.getElementById("eventName").innerHTML = data[0].title;  
     document.getElementById("eventimage").src = data[0].image;
    // $('#eventimage').css("background-image", "url(" + data[0].image + ")");
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



 

function drawEventDetailes2(data) {
 var s='';
        s = s + '<ul class="list-group">';
            for (var i = 0; i < data.length; i++) {
                
              s = s            
                +'<a href="/personDetailes.html?ID='+data[i].id_person+'"><li class="list-group-item "> '+data[i].name+' '+data[i].surename+ '</li> </a>'
            }
            
            if(data.length==0)
                {
                    s = s + '<li class="list-group-item">No Person  Assign Yet to Manage this event </li>' 
                }
     
             s = s + '</ul>';
             $('#persons').html(s);
}
function fetch2(eventId) {
    jQuery.ajax({
        url: 'https://hyp-project.herokuapp.com/api/events/'+eventId+'/volunteers/' ,
        type: 'GET',
        dataType: 'json',
        Origin: "https://hyp-project.herokuapp.com",
        success: (data) => {
            console.log('ajax success');
              
             drawEventDetailes2(data);
             
        },
        error: ()=>{
            notifyerror("error");
        }
    });
}




 


  
 
