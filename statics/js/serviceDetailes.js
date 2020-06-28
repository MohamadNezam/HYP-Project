"use strict";

$(document).ready(() => {
 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const serviceID = urlParams.get('serviceID');
    console.log(serviceID);
    if(serviceID != null)
    {
             fetchServices(serviceID);
             fetch2(serviceID); 
    }
});

                   
	

function drawServiceDetailes(data) {
 
	
	
	try {
   		    document.getElementById("serviceDay").innerHTML = data[0].service_day;
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {
   		document.getElementById("servicelocation").innerHTML = data[0].location;
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {   document.getElementById("servicetitle").innerHTML = data[0].title;
	     document.getElementById("servicetitle2").innerHTML = data[0].title;
 
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {
   		    document.getElementById("servicedescription").innerHTML = data[0].description;
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {
   		
  	  document.getElementById("servicestart_time").innerHTML = data[0].start_time;	
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {  document.getElementById("serviceend_time").innerHTML = data[0].end_time;
   
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {   document.getElementById("serviceimage").style.backgroundImage = "url("+data[0].image+") ";
   
	}
	catch(err) {
	   console.log(err.message); 
	}
	try {     document.getElementById("serviceName").innerHTML = data[0].title;
   
	}
	catch(err) {
	   console.log(err.message); 
	}
    
 

  
    //document.getElementById("serviceimage").innerHTML = data[0].image;
 
    
   // document.getElementById("servicecapacity").innerHTML = data[0].capacity;

 
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
 
function fetch2(serviceId) {
    jQuery.ajax({
        url: 'https://hyp-project.herokuapp.com/api/services/'+serviceId+'/volunteers/' ,
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

