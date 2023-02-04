// 1 - crie uma função que exiba uma mensagem no console:
function mensagem() {
  console.log("Um espírito nobre engrandece o menor dos homens.");
}
mensagem();

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console:
function meuNome(nome) {
  console.log(nome);
}
meuNome("Samuel");

// 3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console:
function dados(nome, idade, musica) {
  console.log(`Nome: ${nome}, Idade: ${idade}, Estilo musical: ${musica}`);
}
dados("Samuel", 18, "Pop-Rock");

// 4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console:
function musicaFilme(filme, musica) {
  console.log(`Filme: ${filme}, Música: ${musica}`);
}
musicaFilme("Homem-Aranha", "New Person, Same Old Mistakes");

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função:
function triplo(numero) {
  console.log(numero * 3);
}
triplo(14);

// 6 - crie uma função que verifique se uma variável é true ou false:
let dia = true;

function tOrF() {
  if (dia == true) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
tOrF();
