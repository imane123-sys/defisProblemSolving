const prompt = require("prompt-sync")();

function FrequenceCaractere() {
    let resultat = {};
    const motF = prompt("Entrer le mot :");

    for (let i = 0; i < motF.length; i++) {
        let caractere = motF[i];
        if (resultat[caractere]) {
            resultat[caractere]++;
        } else {
            resultat[caractere] = 1;
        }
    }

    console.log(resultat);
}

 FrequenceCaractere();


