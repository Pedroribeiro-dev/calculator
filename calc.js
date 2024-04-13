const calculadora = document.querySelector('.calc-geral');
const botoes = document.querySelector('.botoes-geral');
const visor = document.querySelector('#calc-visor');





botoes.addEventListener('click', function (evento) {
    if (evento.target.matches('button')) {
        const botao = evento.target
        const action = botao.dataset.action
        const conteudoDoBotao = botao.textContent
        const MostrandoValor = visor.textContent
        Array.from(botoes.children).forEach((item) => item.classList.remove('is-depressed'));
        console.log(botoes.children)
        const primeiroValor = calculadora.dataset.primeirovalor
        const operador = calculadora.dataset.operador
        const segundoValor = MostrandoValor
        const calculo = (n1, operador, n2) => {
            let result = ''
            if (operador === 'adicao') {
                result = parseFloat(n1) + parseFloat(n2)
            }
            if (operador === 'subtracao') {
                result = parseFloat(n1) - parseFloat(n2)
            }
            if (operador === 'divisao') {
                result = parseFloat(n1) / parseFloat(n2)
            }
            if (operador === 'multiplicacao') {
                result = parseFloat(n1) * parseFloat(n2)
            }
            if (operador === 'porcentagem') {

                result = parseFloat((n1 / 100)) * parseFloat(n2)
            }
            if (operador === 'potencia') {
                result = parseFloat(n1) ** parseFloat(n2)
            }

            return result
        };
        if (!action) {
            if (MostrandoValor === '0' || calculadora.dataset.teclaprevclicada === 'operador') {
                visor.textContent = conteudoDoBotao
            } else {
                visor.textContent = MostrandoValor + conteudoDoBotao

            }
            calculadora.dataset.teclaprevclicada = ''
            console.log(calculadora.dataset)
        };
        if (
            action === 'adicao' ||
            action === 'subtracao' ||
            action === 'multiplicacao' ||
            action === 'divisao' ||
            action === 'porcentagem' ||
            action === 'potencia'
        ) {
            calculadora.dataset.igualdade = 'acaoclicada'
            console.log(calculadora.dataset.primeirovalor)
            if (calculadora.dataset.teclaprevclicada === '' && calculadora.dataset.primeirovalor !== undefined && calculadora.dataset.igualclicado !== 'null') {
                visor.textContent = calculo(primeiroValor, operador, segundoValor)
                console.log('esse 1')
            };
            if (visor.textContent !== '0') {
                calculadora.dataset.primeirovalor = visor.textContent
                console.log('esse')
                calculadora.dataset.igualclicado = undefined
            } else {

                calculadora.dataset.primeirovalor = MostrandoValor
            }
            botao.classList.add('is-depressed')
            calculadora.dataset.teclaprevclicada = 'operador'
            calculadora.dataset.operador = action
            console.log(calculadora.dataset)
        };
        if (action === 'clear') {
            calculadora.dataset.primeirovalor = undefined
            calculadora.dataset.segundovalor2 = ''
            calculadora.dataset.operador = ''
            calculadora.dataset.teclaprevclicada === ''
            calculadora.dataset.igualdade = undefined
            visor.textContent = '0'
            console.log('botao de limpar')
            console.log(calculadora.dataset)
        };
        if (action === 'decimal') {
            visor.textContent = MostrandoValor + '.'
            if (MostrandoValor.includes('.')) {
                visor.textContent = MostrandoValor
            };
            if (calculadora.dataset.teclaprevclicada === 'operador') {
                visor.textContent = '0' + '.'
                calculadora.dataset.teclaprevclicada = ''
                console.log(calculadora.dataset)
            }
        };
        if (action === 'calculate') {
            let segundoValor2 = null
            console.log(calculadora.dataset.igualdade)
            if (calculadora.dataset.primeirovalor === undefined) {
                console.log('entrei no 1')
                visor.textContent = MostrandoValor
            }
            if(calculadora.dataset.teclaprevclicada === 'operador'){
                console.log('entrou aqui')
                calculadora.dataset.segundovalor2 = MostrandoValor
                console.log(calculadora.dataset)
                segundoValor2 = calculadora.dataset.segundovalor2
                console.log(segundoValor2)
                visor.textContent = calculo(primeiroValor, operador, segundoValor2);
                console.log(segundoValor2)
                console.log(primeiroValor)
            }
            if (visor.textContent !== undefined && segundoValor2 === null && calculadora.dataset.igualdade === 'acaoclicada') {
                const calcular = calculo(primeiroValor, operador, segundoValor);
                visor.textContent = calcular
                botao.classList.add('is-depressed')
                calculadora.dataset.igualdade = ''
                calculadora.dataset.segundovalor2 = MostrandoValor
                console.log('entrei no 2')
                calculadora.dataset.primeirovalor = visor.textContent
                console.log(calculadora.dataset)
            }
            else if (calculadora.dataset.igualdade === '' && calculadora.dataset.teclaprevclicada ==='') {
                segundoValor2 = calculadora.dataset.segundovalor2
                console.log('entrei no 3')
                console.log(calculadora.dataset)
                console.log(segundoValor2)
                visor.textContent = calculo(primeiroValor, operador, segundoValor2)
                calculadora.dataset.primeirovalor = visor.textContent
                
            };
            calculadora.dataset.igualclicado = null
        }
    };
});


