const mensagem = document.querySelector(".mensagem");
const mensagemFinal = document.querySelector(".mensagem-criptografada");
const matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function btncriptografar() {
    mensagem.value = mensagemMinuscula(mensagem.value);
    mensagemFinal.value = encriptar(mensagem.value);
    mensagemFinal.style.backgroundImage = "none";
}

function btpdescriptografar() {
    mensagemFinal.value = descriptografar(mensagem.value);
    mensagemFinal.style.backgroundImage = "none";
}

function mensagemMinuscula(mensagem) {
    return mensagem.toLowerCase();
}

function encriptar(mensagem) {
    for (var i = 0; i < matriz.length; i++) {
        if (mensagem.includes(matriz[i][0])) {
            mensagem = mensagem.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return mensagem;
}

function descriptografar(mensagem) {
    for (var i = 0; i < matriz.length; i++) {
        if (mensagem.includes(matriz[i][1])) {
            mensagem = mensagem.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return mensagem;
}


