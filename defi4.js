
function SommeNotNegatifs(liste){
    let somme=0;
    for(let nombre of liste){
        if(nombre <0){
            break;

        }
        somme += nombre;

    }
    return somme;

}

const nombres =[1,2,3,4,-1,2];
const NouveauSomme=SommeNotNegatifs(nombres);
console.log(NouveauSomme);




