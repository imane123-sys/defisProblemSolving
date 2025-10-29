const prompt=require("prompt-sync")();

function FizzBuzz(){
 NombreRepetition = +prompt("combien de note voules vous entrez :");
for(let i=1;i<=NombreRepetition;i++){
 N = +prompt("entrez un nombre");

    if(N % 3 === 0 && N % 5 === 0){
        console.log("TechLead");
    }else if(N % 3 === 0){
        console.log("Tech");
    }else if(N % 5 === 0){
        console.log("Lead");
    }else{
        console.log(N);
    }

}
}
FizzBuzz();

    
