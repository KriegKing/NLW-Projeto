const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 5;",
            "variable myVar = 5;",
            "myVar = 5;",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo ID?",
        respostas: [
            "getElementById()",
            "selectElementById()",
            "queryElementById()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console JavaScript?",
        respostas: [
            "console.print()",
            "log.print()",
            "console.log()",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'document.querySelector()' faz em JavaScript?",
        respostas: [
            "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
            "Seleciona todos os elementos que correspondem a um seletor CSS especificado",
            "Seleciona o elemento raiz do documento",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída da expressão '5 + '5' em JavaScript?",
        respostas: [
            "10",
            "'55'",
            "Erro",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'Array.push()' faz em JavaScript?",
        respostas: [
            "Remove o último elemento de um array",
            "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array",
            "Inverte a ordem dos elementos de um array",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador de concatenação de strings",
            "Operador de ou lógico",
            "Operador de e lógico",
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 5; i++) { }",
            "loop (let i = 0; i < 5; i++) { }",
            "for (i = 0; i < 5; i++) { }",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector("h3").textContent = item.pergunta
     
     for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta
           
           corretas.delete(item)
           if(estaCorreta) {

           corretas.add(item)
           }
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
     }
     quizItem.querySelector('dl dt').remove()


     quiz.appendChild(quizItem)
}

