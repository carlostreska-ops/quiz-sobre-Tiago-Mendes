const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao encontrar um mapa antigo no sótão de seu avô, Tiago Mendes descobre a localização de uma cidade perdida na selva. Qual o seu primeiro passo?",
        alternativas: [
            {
                texto: "Montar uma expedição imediatamente com o mínimo de recursos.",
                afirmacao: "Sua coragem impulsiva o levou a enfrentar perigos sem hesitação. "
            },
            {
                texto: "Estudar o mapa detalhadamente e planejar cada equipamento necessário.",
                afirmacao: "Sua preparação minuciosa garantiu que a equipe estivesse pronta para qualquer imprevisto. "
            }
        ]
    },
    {
        enunciado: "Na entrada da selva, Tiago se depara com um rio tempestuoso e uma ponte de cordas visivelmente danificada. Como ele decide atravessar?",
        alternativas: [
            {
                texto: "Arriscar a travessia pela ponte antiga, confiando em sua agilidade.",
                afirmacao: "Mostrou-se um destemido amante do risco em momentos críticos. "
            },
            {
                texto: "Construir uma jangada improvisada para cruzar as águas com segurança.",
                afirmacao: "Demostrou habilidade prática e capacidade de adaptação com recursos da natureza. "
            }
        ]
    },
    {
        enunciado: "Dentro das ruínas, Tiago encontra duas passagens: uma iluminada por fungos bioluminescentes e outra totalmente escura, mas com marcas misteriosas na parede. Qual caminho escolher?",
        alternativas: [
            {
                texto: "Seguir pelo caminho iluminado pelos fungos.",
                afirmacao: "Sua intuição o guiou por caminhos surpreendentes e cheios de descobertas visuais. "
            },
            {
                texto: "Investigar as marcas na parede da passagem escura usando sua lanterna.",
                afirmacao: "Sua curiosidade arqueológica revelou segredos antigos esquecidos pelo tempo. "
            }
        ]
    },
    {
        enunciado: "Na câmara principal, há um artefato sagrado protegido por um enigma numérico entalhado na pedra. O que Tiago faz?",
        alternativas: [
            {
                texto: "Tentar resolver o enigma decifrando os símbolos com base na sua experiência.",
                afirmacao: "Sua inteligência e conhecimento histórico foram a chave para superar grandes desafios. "
            },
            {
                texto: "Procurar por algum mecanismo escondido ao redor da câmara que desative a armadilha.",
                afirmacao: "Sua observação apurada permitiu encontrar atalhos e soluções criativas. "
            }
        ]
    },
    {
        enunciado: "Ao pegar o artefato, o templo começa a desmoronar! Tiago precisa tomar uma decisão rápida na fuga. O que ele escolhe?",
        alternativas: [
            {
                texto: "Usar uma corda com gancho para escapar pelo teto que está se abrindo.",
                afirmacao: "E se tornou uma lenda entre os exploradores por suas fugas inacreditáveis."
            },
            {
                texto: "Correr pelo túnel principal ajudando seus companheiros a saírem em segurança.",
                afirmacao: "E provou que o valor de um verdadeiro aventureiro está na lealdade e proteção aos seus parceiros."
            }
        ]
    }
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O destino de Tiago Mendes...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
