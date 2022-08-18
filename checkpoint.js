console.log(
    "1-Pipoca 2- Macarrão 3 - Carne  4- Feijão 5 - Brigadeiro"
)

/*
 1 - Pipoca – 10 segundos (padrão);      2 - Macarrão – 8 segundos (padrão);3 - Carne – 15 segundos (padrão);4 - Feijão – 12 segundos (padrão); 5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/
let comida = 2 ;
let tempo = 15;
let situacao = 0;

switch (comida) {
    case 1:
        if (tempo >= 20 && tempo < 30) {
            console.log("A pipoca queimou")
        }else if (tempo < 10) {
            console.log ("Tempo insuficiente")
        }else if (tempo >= 30){
            console.log ("Kabuuuuuum")
        }else {
           console.log( "Pipoca pronta, bom apetite!!!")
        }
        break;
    case 2:
        if (tempo >= 16 && tempo < 24) {
            console.log("O macarrão queimou")
        }else if (tempo < 8) {
            console.log ("Tempo insuficiente")
        }else if (tempo >= 24){
            console.log ("Kabuuuuuum")
        }else {
           console.log( "Macarrão pronto, bom apetite!!!")
        }
        break;
    case 3:
        if (tempo >= 30 && tempo < 45) {
            console.log("A Carne queimou")
        }else if (tempo < 15) {
            console.log ("Tempo insuficiente")
        }else if (tempo >= 45){
            console.log ("Kabuuuuuum")
        }else {
           console.log( "Carne pronta, bom apetite!!!")
        }
        break;
    case 4:
        if (tempo >= 24 && tempo < 36) {
            console.log("Feijão queimou")
        }else if (tempo < 12) {
            console.log ("Tempo insuficiente")
        }else if (tempo >= 36){
            console.log ("Kabuuuuuum")
        }else {
           console.log( "Feijão Pronto, bom apetite!!!")
        }
        break;
        break;
    case 5:
        if (tempo >= 16 && tempo < 24) {
            console.log("O Brigadeiro queimou")
        }else if (tempo < 8) {
            console.log ("Tempo insuficiente")
        }else if (tempo >= 24){
            console.log ("Kabuuuuuum")
        }else {
           console.log( "Brigadeiro pronto, bom apetite!!!")
        }
        break;
    default:
        console.log("Prato Inexistente")

}