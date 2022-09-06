let idade = +prompt("Digite a sua idade!");
let terminouEscola = prompt("Ja terminou o Ensino Medio?");
let cursandoFaculdade = prompt("Cursa alguma faculdade?");

if (idade >= 18) {
  console.log("Voce é Maior de idade!");
} else if (idade < 18) {
  console.log("Voce nao é maior de idade!");
}
if (terminouEscola === "sim") {
  console.log("Terminou a Escola!");
  
  terminouEscola = true;
} else {
  console.log("Nao terminou a Escola!");
}
if (cursandoFaculdade === "sim") {
  console.log("Esta Cursando Faculdade!");
  
  cursandoFaculdade = true;
} else {
  console.log("Nao esta cursando Faculdade!");
}
