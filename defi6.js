// function compterVoyelles(chaine) {
//   const voyelles = "aeiou";
//   let compteur = 0;

//   for (let i = 0; i < chaine.length; i++) {
//     if (voyelles.includes(chaine[i].toLowerCase())) {
//       compteur++;
//     }
//   }

//   return compteur;
// }


// const mot = "development";
// console.log(compterVoyelles(mot));




function CompterVoyelles(chaine){
    comp=0;
    const voyelles = "aeiou";
    for(let i=0 ;i<chaine.length ;i++){
        if(chaine[i].toLowerCase() == "a" || "e" ||"i" ||"o" ||"u"){
            comp++;

        }

    }
    return comp;


}
const motVoyelle ="imane";
const NombreVoyelle =CompterVoyelles(motVoyelle);
console.log(NombreVoyelle);

