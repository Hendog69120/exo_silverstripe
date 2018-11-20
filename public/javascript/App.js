/**
 * API meteo
 */


    
    ajaxGet("http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/Lyon.json", function (reponse) {

        let meteo = JSON.parse(reponse);
        
        console.log(meteo);

        

            let cityElt = qs(".ville");
            cityElt.textContent = meteo.current_observation.display_location.full;
            let updateElt = qs(".update");
            updateElt.textContent = meteo.current_observation.local_time_rfc822;

            


            let tempElt = qs(".temperature");
            tempElt.textContent = meteo.current_observation.temp_c;




            console.log(meteo.current_observation.display_location.full);
            
    
    });  
    
