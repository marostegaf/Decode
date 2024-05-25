let permitido_copiar = true;
let linguagem = "pt";

const input = document.querySelector(".texto");
const botao_criptografar = document.querySelector(".criptografar");
const botao_descriptografar = document.querySelector(".descriptografar");

const mensagem_titulo = document.querySelector(".conteudo-direita-mensagem h2");
const mensagem_paragrafo = document.querySelector(".conteudo-direita-mensagem p");
const texto_conteudo_direita = document.querySelector(".texto-criptografado");
const imagens_conteudo_direita = document.querySelector(".conteudo-direita-itens");
const botao_copiar = document.querySelector(".conteudo-direita-copiar");

const botao_pt = document.querySelector(".pt");
const botao_en = document.querySelector(".en");

botao_pt.addEventListener("click", function() {
    linguagem = "pt";
    botao_criptografar.innerHTML = "Criptografar";
    botao_descriptografar.innerHTML = "Descriptografar"
    input.placeholder = "Digite seu Texto"
    mensagem_titulo.innerHTML = "Nenhuma mensagem encontrada"
    mensagem_paragrafo.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
    botao_copiar.innerHTML = "Copiar"
});

botao_en.addEventListener("click", function() {
    linguagem = "en"
    botao_criptografar.innerHTML = "Encrypt";
    botao_descriptografar.innerHTML = "Decrypt";
    input.placeholder = "Enter your Text"
    mensagem_titulo.innerHTML = "No messages found"
    mensagem_paragrafo.innerHTML = "Enter text that you want to encrypt or decrypt."
    botao_copiar.innerHTML = "Copy"
});

input.addEventListener("input", function () {
    const texto = input.value;
    // Voltar a imagem padrão quando não houver texto
    texto_conteudo_direita.style.display = "none";
    imagens_conteudo_direita.style.display = "flex";
    botao_copiar.style.display = "none";

    if (texto == "") {
        mensagem_titulo.style.color = "#000000"
        if (linguagem == "pt") {
            mensagem_titulo.innerHTML = "Nenhuma mensagem encontrada"
            mensagem_paragrafo.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
        } else {
            mensagem_titulo.innerHTML = "No messages found"
            mensagem_paragrafo.innerHTML = "Enter text that you want to encrypt or decrypt."
        }

    } else {
        permitido_copiar = true;
        mensagem_titulo.style.color = "#3F6DDE"
        if(linguagem == "pt") {
            mensagem_titulo.innerHTML = "Mensagem encontrada com sucesso!"
            mensagem_paragrafo.innerHTML = "Pronto para criptografar ou descriptografar."
        } else {
            mensagem_titulo.innerHTML = "Message found successfully!"
            mensagem_paragrafo.innerHTML = "Ready to encrypt or decrypt."
        }
    }
});

botao_criptografar.addEventListener("click", function () {
    const texto = input.value;
    let texto_criptografado = criptografar(texto);

    if (texto != "") {
        if (permitido_copiar) {
            texto_conteudo_direita.style.display = "block";
            imagens_conteudo_direita.style.display = "none";
            botao_copiar.style.display = "block";

            texto_conteudo_direita.innerHTML = texto_criptografado;

        } else {
            texto_conteudo_direita.style.display = "none";
            imagens_conteudo_direita.style.display = "flex";
            botao_copiar.style.display = "none";
        }
    }
});

botao_descriptografar.addEventListener("click", function () {
    const texto = input.value;
    let texto_descriptografado = descriptografar(texto);

    if (texto != "") {
        if (permitido_copiar) {
            texto_conteudo_direita.style.display = "block";
            imagens_conteudo_direita.style.display = "none";
            botao_copiar.style.display = "block";

            texto_conteudo_direita.innerHTML = texto_descriptografado;
        } else {
            texto_conteudo_direita.style.display = "none";
            imagens_conteudo_direita.style.display = "flex";
            botao_copiar.style.display = "none";
        }
    }
});

function criptografar(texto) {
    const mapeamento = {
        'e': 'enter',
        'é': 'éntér',
        'ê': 'êntêr',
        'i': 'imes',
        'í': 'îmês',
        'a': 'ai',
        'á': 'âi',
        'â': 'âî',
        'ã': 'ãî',
        'o': 'ober',
        'ó': 'ôbér',
        'ô': 'ôbêr',
        'õ': 'õbêr',
        'u': 'ufat',
        'ú': 'ûfât',
        'E': 'ENTER',
        'É': 'ÊNTÉR',
        'Ê': 'ÊNTÊR',
        'I': 'IMES',
        'Í': 'ÎMÊS',
        'A': 'AI',
        'Á': 'ÂI',
        'Â': 'ÂÎ',
        'Ã': 'ÃÎ',
        'O': 'OBER',
        'Ó': 'ÔBÉR',
        'Ô': 'ÔBÊR',
        'Õ': 'ÕBÊR',
        'U': 'UFAT',
        'Ú': 'ÛFÂT'
    };

    return texto.split('').map(char => mapeamento[char] || char).join('');
}


function descriptografar(texto) {
    const mapeamentoReverso = {
        'enter': 'e',
        'éntér': 'é',
        'êntêr': 'ê',
        'imes': 'i',
        'îmês': 'í',
        'ai': 'a',
        'âi': 'á',
        'âî': 'â',
        'ãî': 'ã',
        'ober': 'o',
        'ôbér': 'ó',
        'ôbêr': 'ô',
        'õbêr': 'õ',
        'ufat': 'u',
        'ûfât': 'ú',
        'ENTER': 'E',
        'ÊNTÉR': 'É',
        'ÊNTÊR': 'Ê',
        'IMES': 'I',
        'ÎMÊS': 'Í',
        'AI': 'A',
        'ÂI': 'Á',
        'ÂÎ': 'Â',
        'ÃÎ': 'Ã',
        'OBER': 'O',
        'ÔBÉR': 'Ó',
        'ÔBÊR': 'Ô',
        'ÕBÊR': 'Õ',
        'UFAT': 'U',
        'ÛFÂT': 'Ú'
    };

    let textoDescriptografado = texto;

    for (const [key, value] of Object.entries(mapeamentoReverso)) {
        textoDescriptografado = textoDescriptografado.split(key).join(value);
    }

    return textoDescriptografado;
}


botao_copiar.addEventListener("click", function () {
    const textoCriptografado = texto_conteudo_direita.textContent;
    navigator.clipboard.writeText(textoCriptografado)
});
