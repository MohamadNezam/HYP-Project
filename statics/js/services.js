"use strict";

$(document).ready(() => {
  fetchServices('https://hyp-project.herokuapp.com/api/services');
});

function drawServices(data) {
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
       
         

  for (var i = 0; i < data.length; i++) {
        //data.length
        
         s = s        +'<div class="card col-sm-3  mt-3 ml-4 mb-4 shadow-sm sechover">'				
                      +'<a href="#"> <img class="img-fluid" src="'+data[i].image+'" alt=""></a>'
                      +' <div class="card-body">'
                      +'  <h5><b>'+data[i].title+'</b></h5>'
                      +' <h6 class="card-text">'+data[i].description.substring(0,40)+'...'+' <u class="linkcolor"> <a href="#">more</a> </u></h6>'
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

 


  
 
