const Taxis = [ 
{ id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 
0 }, 
{ id: 2, position: 12, available: true, timeRemaining: 0, 
totalRides: 0 }, 
{ id: 3, position: 20, available: true, timeRemaining: 0, 
totalRides: 0 } ,
{ id: 4, position: 20, available: false, timeRemaining: 0, 
totalRides: 0 }
] ;

const Requests = [ 
{ reqId: 1, position: 10, duration: 3, time: 0 }, 
{ reqId: 2, position: 3, duration: 4, time: 2 }, 
{ reqId: 3, position: 18, duration: 2, time: 4 }, 
{ reqId: 4, position: 7, duration: 5, time: 5 } 
] ;



function CalculerDistance(){
  let plusProche;
    let distance =[];
    for(let i=0;i<Taxis.length ;i++){
    for(let j=0 ;j<Requests.length;j++){

        const d=Math.abs(Taxis[i].position - Requests[j].position);
        
        distance.push({
            idTaxi: Taxis[i].id,//1
            idRequest : Requests[j].reqId,//1
            Dis : d //5
        }) ;

     }
   }
   console.log(distance);
  
   plusProche = distance.reduce((min, curr) => (curr.Dis < min.Dis ? curr : min), distance[0]);
   console.log("la distance la plus proche est:",plusProche);

  }
  CalculerDistance();

//   //Duree Trajet
//   // fonction a verifier apres
//   // function  GererDureeTrajet(){
//   //   let NouveauTime=0 ;
//   //   let disponibilite =Taxis.available;
//   //   for(let taxi of Taxis){
//   //       if(disponibilite){
//   //            NouveauTime  = taxi.timeRemaining =taxi.duration;
//   //            NouveauTime--;



//   //       }
//   //   }
//   //   return NouveauTime;
//   // }
//   console.log(GererDureeTrajet());


  function GererDureeEtLiberer() {
  let NewTime;
  
  for (let taxi of Taxis) {
    for (let req of Requests){

    if (!taxi.available) {
       NewTime =req.duration;
       taxi.timeRemaining = true;
       console.log( "le timeRemaining devient",NewTime);//3

      taxi.timeRemaining--;

      if (taxi.timeRemaining <= 0) {
        taxi.available = true;    
        taxi.timeRemaining = 0;  
        taxi.position == req.position; 
         
         
        console.log(`Taxi ${taxi.id} a terminé sa course et le timeRemaing = ${taxi.timeRemaining}`);

      }
    }
  }
}
}


GererDureeEtLiberer();

function filedattente(req){
    let waitingQueue=[];
    for(let i=0; i<Taxis.length;i++){
        let t=Taxis[i];
        if(t.available == true){
            waitingQueue.push(req.reqId);
          }
        
    }return waitingQueue;

} for (let i = 0; i < Requests.length; i++) {
    console.log(filedattente(Requests[i]));
}


// function GererFileAttente(){
//   let WaintingQueue =[];

//   for(let  taxi of Taxis){
//     for(let req of Requests){
//       let positionDemande =req.position;
//     let disponibilite =taxi.available;
//     if(disponibilite === false){
//       WaintingQueue.push(positionDemande);
//       console.log(WaintingQueue);
      

  


//     }
    
//     }

//   }

// }
// GererFileAttente();
 

// function GererFileAttente() {
//   let waitingQueue = [];

  
//   let aucuneDispo = true;
//   for (let taxi of Taxis) {
//     if (taxi.available === true) {
//       aucuneDispo = false;
//       break;
//     }
//   }

//   if (aucuneDispo) {
//     for (let req of Requests) {
//       waitingQueue.push(req.position);
//     }
//     console.log(waitingQueue);
//   }
// }

// GererFileAttente();



