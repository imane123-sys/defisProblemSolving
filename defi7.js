// const prompt = require("prompt-sync")();

// function VerificationPalindrome() {
//     let motP = prompt("Entrer le mot :");
//     let isPalindrome = true;

//     for (let i = 0; i < motP.length; i++) {
//         if (motP[i] !== motP[motP.length - 1 -i]) {
//             isPalindrome = false;
//             break;
//         }
//     }

//     return isPalindrome;
// }

// console.log(VerificationPalindrome());




const prompt =require("prompt-sync")();

function VerifierPalindrome(){
    let isPalindrome =false;
    let mot =prompt("Entrer le mot :");
    for(let i=0 ;i<mot.length ;i++){
        if(mot[i] === mot[mot.length-1-i]){
            isPalindrome = true;

        }

    }
    return isPalindrome;

}
console.log(VerifierPalindrome());












