var textoEntrada = document.querySelector(".entrada-texto");
var textoSaida = document.querySelector(".saida-texto");
var string = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function criptografar() {
    textoEntrada.value = mensagemMinuscula(textoEntrada.value);
    textoSaida.value = encriptar(textoEntrada.value);
    textoSaida.style.backgroundImage = "none";
}

function descriptografar() {

    textoSaida.value = desencriptar(textoEntrada.value);
    textoSaida.style.backgroundImage = "none";
}

function mensagemMinuscula(mensagem) {
    return mensagem.toLowerCase();
}

function encriptar(mensagem) {
    for (i = 0; i < string.length; i++) {
        if (mensagem.includes(string[i][0])) {
            mensagem = mensagem.replaceAll(string[i][0], string[i][1]);
        }
    }
    return mensagem;
}

function desencriptar(mensagem) {
    for (i = 0; i < string.length; i++) {
        if (mensagem.includes(string[i][0])) {
            mensagem = mensagem.replaceAll(string[i][1], string[i][0]);
        }
    }
    return mensagem;
}

function copiar(){
    textoSaida.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}