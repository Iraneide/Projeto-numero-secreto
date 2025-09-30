alert('Boas Vindas ao jogo numero secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt("Escolha um numero entre 1 e 10")

// Se o chute for igual ao numero secreto 
if (chute == numeroSecreto){
    console.log('Isso ai! Você descobiu o numer secreto (5)');
}else{
    alert('Você errou!')
}
