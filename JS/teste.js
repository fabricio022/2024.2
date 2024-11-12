// ANOTAÇÔES - JS

/*
Variáveis:
 - var :  pode redeclarar uma determinada variável no decorrer do código por mais de uma vez.  var n2 = 5
 var n2 = 5

 - let : MAIS UTILIZADO, não é possível a redeclaração.
 let n1 = 7.7

 - const : não se pode declarar um novo valor pois ele será sempre constante.
 const media = (n1+n2)/2
*/

// COMANDOS IMPORTANTES

/*
- typeof - mostra o tipo de variável;
console.log(typeof n1)

- toFixed(2) - deixa apenas dois algarismos após a vírgula;
console.log(media.toFixed(2))

- .toString() - passa a variável para o tipo string;
var num = num.toString()

- .charAt(2) - exibe a letra que esta no índice 2. Caso não tenha, será retornado o valor nulo;
const escola = "cod3r"
console.log(escola.charAt(2))

- .charCodeAt(3) - mostra o valor associado ao caractere na tabela UNICODE;
const escola = "cod3r"
console.log(escola.charCodeAt(3))

- .indexOf('3') - mostra em que índice aquele dígito está na palavra;
const escola = "cod3r"
console.log(escola.indexOf('3'))

.substring(1) - mostra a partir do índice 1 até o final; caso queira delimitar, use como mostra
o segundo código;
const escola = "cod3r"
console.log(escola.substring(1))

const escola = "cod3r"
console.log(escola.substring(0, 3))

.concat() - usado para concatenar os valores;
const escola = "cod3r"
console.log('Escola '.concat(escola).concat('!'))

.replace() - usado para substituir um dado elemento por outro;
const escola = "cod3r"
console.log(escola.replace(3, 'e'))

templateString - usado para melhor concatenar frases ou valores 
mantndo a boa aparência do código. Tal função permite maior maneabilidade 
das Strings na formação das linhas;
const nome = 'Rebeca'
const template = `
    olá 
    ${nome}!`
    console.log(concatenacao, template)

    Ainda sobre a ferramenta, também é possível chamar uma função dentro 
    do templateString, como por exemplo deixar as letras em caixa alta...

        const up = texto => texto.toUpperCase()
        console.log(`ei... ${up('cuidado')}!`)

*/

//ÁREA DE TESTE

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)