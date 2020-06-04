"use strict";

$(document).ready(() => {
  fetchServices(5);
});

                   
	

function drawServiceDetailes(data) {
 
    document.getElementById("serviceDay").innerHTML = data[0].service_day;
    document.getElementById("servicelocation").innerHTML = data[0].location;
    document.getElementById("servicetitle").innerHTML = data[0].title;
    document.getElementById("servicedescription").innerHTML = data[0].description;
    document.getElementById("servicestart_time").innerHTML = data[0].start_time;
    document.getElementById("serviceend_time").innerHTML = data[0].end_time;
    //document.getElementById("serviceimage").innerHTML = data[0].image;
    document.getElementById("serviceimage").style.backgroundImage = "url("+data[0].image+")";
    
    document.getElementById("servicecapacity").innerHTML = data[0].capacity;
 
 
}


function fetchServices(serviceId) {
    jQuery.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://hyp-project.herokuapp.com/api/services/'+serviceId ,
        type: 'GET',
        dataType: 'json',
        Origin: "https://hyp-project.herokuapp.com",
        success: (data) => {
            console.log('ajax success');
              
             drawServiceDetailes(data);
            //$('#serviceDay').html(data.service_day);
           // $('#serviceTime').html(s);
           // $('#services').html(s);
        },
        error: ()=>{
            notifyerror("error");
        }
    });
}

 


  
 
