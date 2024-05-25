let permitido_copiar = true;

const aviso = document.querySelector(".conteudo-esquerda-regras p");
const input = document.querySelector(".texto");
const botao_criptografar = document.querySelector(".criptografar");
const botao_descriptografar = document.querySelector(".descriptografar");

const mensagem_titulo = document.querySelector(".conteudo-direita-mensagem h2");
const mensagem_paragrafo = document.querySelector(".mensagens p");
const texto_conteudo_direita = document.querySelector(".texto-criptografado");
const imagens_conteudo_direita = document.querySelector(".conteudo-direita-itens");
const botao_copiar = document.querySelector(".conteudo-direita-copiar");

input.addEventListener("input", function () {
    const texto = input.value;
    // Voltar a imagem padrão quando não houver texto
    if (texto == "") {
        texto_conteudo_direita.style.display = "none";
        imagens_conteudo_direita.style.display = "flex";
        botao_copiar.style.display = "none";
    }

    if (texto == "") {
        aviso.style.color = "#495057";
        mensagem_titulo.style.color = "#000000"
        mensagem_titulo.innerHTML = "Nenhuma mensagem encontrada"
        mensagem_paragrafo.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
    } else {
        aviso.style.color = "#495057";
        permitido_copiar = true;
        mensagem_titulo.style.color = "#3F6DDE"
        mensagem_titulo.innerHTML = "Mensagem encontrada com sucesso!"
        mensagem_paragrafo.innerHTML = "Pronto para criptografar ou descriptografar."
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
    let texto_desencriptografado = descriptografar(texto);

    if (texto != "") {
        if (permitido_copiar) {
            texto_conteudo_direita.style.display = "block";
            imagens_conteudo_direita.style.display = "none";
            botao_copiar.style.display = "block";

            texto_conteudo_direita.innerHTML = texto_desencriptografado;
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
