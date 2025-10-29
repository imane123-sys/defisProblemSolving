//tableau miroir

function MirroirTableaus(tab){
    let resultat =[];
    for(let i=0;i<tab.length ;i++){
        resultat.push(tab[i]);
    }
    for(let i=tab.length -1;i >=0 ;i--){
        resultat.push(tab[i]);
    }
    return resultat;

}
let tableauEntree =[1,2,3];
let NouveauTableau =MirroirTableaus(tableauEntree);
console.log(NouveauTableau);
