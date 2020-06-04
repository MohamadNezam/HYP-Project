"use strict";

$(document).ready(() => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const serviceID = urlParams.get('CategoryId');
    console.log(serviceID);
    if(serviceID != null)
    fetchServices('https://hyp-project.herokuapp.com/api/categories/'+serviceID+'/services');
    else{
        fetchServices('https://hyp-project.herokuapp.com/api/services');
    }
});

function drawServices(data) {  
    var s = '';
  for (var i = 0; i < data.length; i++) {
       
         s = s        +'<div class="card col-sm-3  mt-3 ml-4 mb-4 shadow-sm sechover">'				
                      +'<a href="/serviceDetailes.html?serviceID='+data[i].id_activity+'"> <img class="img-fluid" src="'+data[i].image+'" alt="'+data[i].image+'"></a>'
                      +' <div class="card-body">'
                      +'  <h5><b>'+data[i].title+'</b></h5>'
                      +' <h6 class="card-text">'+data[i].description.substring(0,40)+'...'+' <u class="linkcolor"> <a href="/serviceDetailes.html?serviceID='+data[i].id_activity+'">more</a> </u></h6>'
                      +'<div class="d-flex justify-content-between align-items-center">  '
                      +' <small class="text-muted">'+data[i].service_day+'</small>'
                      +'</div></div>  </div>'
                            
                                 

    }
     
    return s;
}


        

function servicesDropdownSelector(sel) {
 var x = document.getElementById("validationCustom03").value;
 
  var text=$("#validationCustom03 option:selected").text();  
  document.getElementById("servicesSelector").innerHTML =  text +  " Services";
    if(x == 0 )
          fetchServices('https://hyp-project.herokuapp.com/api/services');
    else
        fetchServices('https://hyp-project.herokuapp.com/api/categories/'+x+'/services');
}

                            
                                    
	



function fetchServices(ApiUrl) {
    jQuery.ajax({
        url: ApiUrl ,
        type: 'GET',
        dataType: 'json',
        Origin: "https://hyp-project.herokuapp.com",
        success: (data) => {
            console.log('ajax success');
            var s = drawServices(data);
            
            $('#services').html(s);
        },
        error: ()=>{
            notifyerror("error");
        }
    });
}

 


  
 
