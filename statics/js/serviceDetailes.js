"use strict";

$(document).ready(() => {
 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const serviceID = urlParams.get('serviceID');
    console.log(serviceID);
    if(serviceID != null)
    fetchServices(serviceID);
});

                   
	

function drawServiceDetailes(data) {
 
    document.getElementById("serviceDay").innerHTML = data[0].service_day;
    document.getElementById("servicelocation").innerHTML = data[0].location;
    document.getElementById("servicetitle").innerHTML = data[0].title;
    document.getElementById("servicedescription").innerHTML = data[0].description;
    document.getElementById("servicestart_time").innerHTML = data[0].start_time;
    document.getElementById("serviceend_time").innerHTML = data[0].end_time;
    //document.getElementById("serviceimage").innerHTML = data[0].image;
    document.getElementById("serviceimage").style.backgroundImage = "url("+data[0].image+") center/cover no-repeat";
    
    document.getElementById("servicecapacity").innerHTML = data[0].capacity;
  document.getElementById("serviceName").innerHTML = data[0].title;
 
}


function fetchServices(serviceId) {
    jQuery.ajax({
        url: 'https://hyp-project.herokuapp.com/api/services/'+serviceId ,
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

 


  
 
