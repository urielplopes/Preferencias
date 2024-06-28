const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seu achocolatado preferido? ",
        alternativas: [
            {
                texto: "Nescau",
                afirmacao: "afirmação"
            },
            {
                texto: "Toddy" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Qual seu salgadinho preferido?",
        alternativas: [
            {
                texto: "Doritos",
                afirmacao: "afirmação"
            },
            {
                texto: "Cheetos",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual seu refrigerante preferido?",
        alternativas: [
            {
                texto: "Coca-cola",
                afirmacao: "afirmação"
            },
            {
                texto: "Fanta",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Escolha o seu chocolate favorito?",
        alternativas: [
            {
                texto: "Chocolate branco",
                afirmacao: "afirmação"
            },
            {
                texto: "Chocolate preto",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Qual você prefere?",
        alternativas: [
            {
                texto: "Pizza",
                afirmacao: "afirmação"
            },
            {
                texto:"Lanche",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacoes + " ";
    atual++; 
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Essas são as minhas escolhas";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
