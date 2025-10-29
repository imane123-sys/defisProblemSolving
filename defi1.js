// const prompt =require("prompt-sync")();
// let n=Number(prompt("Entrer le nombre"));
// function SautEscaliers(){
//     for(let i=1 ;)

// }
function sautEscaliers(n) {
  if (n === 0 || n === 1) return 1;

  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(sautEscaliers(4)); 
