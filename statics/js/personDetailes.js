"use strict";

$(document).ready(() => {
 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const personID = urlParams.get('ID');
    console.log(personID);
    if(personID != null)
    {
        var temp='https://cors-anywhere.herokuapp.com/';
        var url= temp+'http://hyp-project.herokuapp.com/api/volunteers/'+personID;
        var urlevents= temp+'http://hyp-project.herokuapp.com/api/volunteers/'+personID+'/events';
        var urlservices= temp+'http://hyp-project.herokuapp.com/api/volunteers/'+personID+'/services';


        fetch(url,1);
        fetch(urlservices,2);
        fetch(urlevents,3);
    }
  
});

                   
	
///http://hyp-project.herokuapp.com/api/volunteers/7
//http://hyp-project.herokuapp.com/api//volunteers/{volunteerId}/events
//http://hyp-project.herokuapp.com/api/volunteers/{volunteerId}/services
 



function drawPersons(data,divId) {
 
 
   var s = '';  
   
        if(divId==1)
        {
            try {
                document.getElementById("personImage").src = data[0].photo;
                document.getElementById("personImage").alt = data[0].name;
                document.getElementById("personName").innerHTML = data[0].name + ' ' +data[0].surename;
            
           personName
            }
            catch(err) {
            console.log(err.message); 
            }  
            
           s = s +  '<p>'+data[0].description+'</p>' ; 
             
           return s;
        }
        else if(divId==2)
        {
            
            s = s + '<ul class="list-group">';
            for (var i = 0; i < data.length; i++) {
                
              s = s + '<a href="/serviceDetailes.html?serviceID='+data[i].id_activity+'"> <li class="list-group-item ">'+data[i].title+'</li> </a>'
            }
            
            if(data.length==0)
                {
                    s = s + '<li class="list-group-item">No Services yet</li>' 
                }
     
             s = s + '</ul>';
             return s;
        }
        else if(divId==3)
        {
             s = s + '<ul class="list-group">';
            for (var i = 0; i < data.length; i++) {
                
              s = s + '<a href="/eventDetailes.html?eventID='+data[i].id_activity+'"> <li class="list-group-item ">'+data[i].title+'</li> </a>'
            }
            
            if(data.length==0)
                {
                    s = s + '<li class="list-group-item">No Events yet</li>' 
                }
     
             s = s + '</ul>';
             return s;
        }
    
    
      
}

 
 

// https://cors-anywhere.herokuapp.com/
function fetch(url,divId) {
    jQuery.ajax({
        url: url ,
        type: 'GET',
        dataType: 'json',
        Origin: "https://hyp-project.herokuapp.com",
        success: (data) => {
            console.log('ajax success');
            
        if(divId==1)
        {
             var s = drawPersons(data,1); 
             $('#personDescription').html(s);
        }
        else if(divId==2)
        {
             var s = drawPersons(data,2); 
             $('#personServices').html(s);
        }
        else if(divId==3)
        {
             var s = drawPersons(data,3); 
             $('#personEvenst').html(s);
        }
           
           
        },
        error: ()=>{
            notifyerror("error");
        }
    });
}

 


  
 
