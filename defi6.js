
function CompterVoyelles(chaine){
    let voyelles ="aeiou";
    let comp =0;
    for(let i=0 ;i<chaine.length ;i++){
        if(voyelles.includes(chaine[i].toLowerCase())){
            comp++;
        }
    }
    return comp;
}
const mot ="ali";
const NombreVoyelle =CompterVoyelles(mot);
console.log(NombreVoyelle);






// function CompterVoyelles(chaine){
//     comp=0;
//     const voyelles = "aeiou";
//     for(let i=0 ;i<chaine.length ;i++){
//         if(chaine[i].toLowerCase() == "a" || "e" ||"i" ||"o" ||"u"){
//             comp++;

//         }

//     }
//     return comp;


// }
// const motVoyelle ="imane";
// const NombreVoyelle =CompterVoyelles(motVoyelle);
// console.log(NombreVoyelle);





