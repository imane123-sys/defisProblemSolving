// function SupprimerDoublons (){
//     return [...new Set]
// }



function SupprimerDoublons(tableau){
    resultat = [];
    for(let i=0 ;i<tableau.length ;i++){
        if(!resultat.includes(tableau[i])){
            resultat.push(tableau[i]);
        }
        

    }
    return resultat
    


}
const entree=[1,2,3,4,5,6,6];
const sortie = SupprimerDoublons(entree);
console.log(sortie);

