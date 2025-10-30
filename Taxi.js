const Taxis = [ 
{ id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 
0 }, 
{ id: 2, position: 12, available: true, timeRemaining: 0, 
totalRides: 0 }, 
{ id: 3, position: 20, available: true, timeRemaining: 0, 
totalRides: 0 } 
] ;

const Requests = [ 
{ reqId: 1, position: 10, duration: 3, time: 0 }, 
{ reqId: 2, position: 3, duration: 4, time: 2 }, 
{ reqId: 3, position: 18, duration: 2, time: 4 }, 
{ reqId: 4, position: 7, duration: 5, time: 5 } 
] ;

// function CalculerDistance(){
//     let distance = 0;
//     let positionTaxi =Taxis.position;
        
//     let disponibilite=Taxis.available;
//     let positionDemande=Requests.position;

//     if(disponibilite === true){
//         if(positionTaxi >positionDemande){
//             distance =positionTaxi -positionDemande;
//             console.log("la distance entre position du taxi et position de demande est :",distance);

//         }else if(positionTaxi <positionDemande){
//             distance = positionDemande - positionTaxi;
//             console.log("la distance entre position du taxi et position de demande est :",distance);

//         }else if (positionTaxi === positionDemande){
//             distance =0;
            

        
//         }

        
//     }
//     return distance;

// }
// CalculerDistance();

// function CalculerDistance(){
//     const distance = Math.abs(Taxis.position - Requests.position);
//     let disponibilite =Taxis.available;
//     if(disponibilite ===true){

//     }

     
    
    
// }
   /* for(let taxi of Taxis){
        let distance = Math.abs(Taxis.position - Requests.position);
        console.log("la distance est :",distance[taxi]);
        

    }
*/



function CalculerDistance(){
     let distance =[];
    for(let i=0;i<Taxis.length ;i++){
    for(let j=0 ;j<Requests.length;j++){

        const d=Math.abs(Taxis[i].position - Requests[j].position);
        
        distance.push({
            idTaxi: Taxis[i].id,
            idRequest : Requests[j].reqId,
            Dis : d 
        }) ;

     }
   }
   console.log(distance);
  }
  CalculerDistance();

  function TrouverTaxiPourRequest(request) {
  if (Taxis.length === 0) {
    console.log("Aucun taxi disponible !");
    return null;
  }

  let taxiPlusProche = null;
  let distanceMin = Infinity;

  for (let taxi of Taxis) {
    if (taxi.available === true) {
      let distance = Math.abs(request.position - taxi.position);
      if (distance < distanceMin) {
        distanceMin = distance;
        taxiPlusProche = taxi;
      }
    }
  }

  return taxiPlusProche;
}

let taxi = TrouverTaxiPourRequest(Requests[0]);
if (taxi) {
  console.log("Le taxi le plus proche est l'ID ", taxi.id, " à la position ", taxi.position);
} else {
  console.log("Aucun taxi trouvé.");
}



// CalculerDistance();

    //  if(Taxis[i].available === true){
    //     let distanceProche = Math.min(d)
    //     console.log( "la distance proche est:",distanceProche);
    //     }


//     function CalculerDistance() {
//     for (let i = 0; i < Taxis.length; i++) {
//         for (let j = 0; j < Requests.length; j++) {

//             let d = Math.abs(Taxis[i].position - Requests[j].position);
//             console.log("Distance entre Taxi", i, "et Request", j, "=", d);

//             if (Taxis[i].available === true) {
//                 if (Requests[j].distanceMin === undefined || d < Requests[j].distanceMin) {
//                     Requests[j].distanceMin = d;
//                     Requests[j].taxiProche = Taxis[i];
//                 }
//             }
//         }
//     }

//     for (let j = 0; j < Requests.length; j++) {
//         console.log(
//             "Le taxi le plus proche pour la demande",
//             j,
//             "est:",
//             Requests[j].taxiProche,
//             "avec une distance de:",
//             Requests[j].distanceMin
//         );
//     }
// }

CalculerDistance();

        



   
    
    

