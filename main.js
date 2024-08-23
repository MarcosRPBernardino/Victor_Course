// Escreva um codigo usando IF que verifica se um número é positivo ou negativo ou zero e mostra uma mensagem no console.log() dizendo se e positivo ou negativo.
const num = -1

if (num >= 1) {
    console.log('positivo');
} else if (num === 0) {
    console.log('É igual a zero.')
} else {
    console.log('É negativo.')
}

const result1 = num > 0 ? "positivo" : "negativo ou zero";
console.log(result1);

const result2 = num > 0 ? "positivo" : num === 0 ? "zero" : "negativo";
console.log(result2);

// Crie um array com 3 categorias: free, premium e plus e execute os seguintes procedimentos, na ordem a seguir:
// - Acesse o elemento de índice/posição 0.
// - Acesse o elemento de índice/posição 2.

const categorias = ['free', 'premium', 'plus'];

console.log(categorias[2]);

categorias.push("platinum");
console.log(categorias.length);
console.log(categorias);

// Crie uma função que recebe um valor em uma moeda e a taxa de câmbio, e retorna o valor convertido para outra moeda.

const real = 1
const euro = 5

function conversor() {
    const resultado = real * euro
    return (resultado)
};

console.log(conversor());

///////////////////////////////////////////////

const x = 1
const y = 5

function conversor(x, y) {
    return x * y
};

console.log(conversor(x, y));

const people = {
    name: "Marcos",
    surname: "Bernardino",
    age: 36,
    talk: function speak() {
        console.log('oi');
    }
}

console.log(people.surname);
console.log(people["surname"]);
console.log(people.talk);
console.log(people.talk());

// Criar uma funcao que some dois numeros e retorne o valor somado para a variavel "sum"

function soma(x2, y2) {
    return x2 + y2
}

console.log(soma(3, 5));
console.log(soma(14, 8));

// Crie uma funcao que receba o peso e a altura do usuario e faca o calculo do IMC (Indice de Massa Corporal)

// let userWeight = prompt("Escreva seu peso")

// let userHeight = prompt("Escreva sua altura")

// function calcImc(weight, height ) {
//     return weight / (height*height)
// }

// console.log(calcImc(userWeight, userHeight));

// exemplo 2

// let weight = prompt("Escreva seu peso")

// let height = prompt("Escreva sua altura")

// function calcImc2({peso, altura} ) {
//     return peso / (altura*altura)
// }

// console.log(calcImc2({ altura: height, peso: weight}));

// Função para converter uma temperatura de graus Celsius para Fahrenheit

// Escreva uma função chamada celsiusParaFahrenheit que recebe uma temperatura em Celsius como parâmetro e retorna a temperatura equivalente em Fahrenheit.

// const cel = prompt("escreva a temperatura em celsius");
// const y1 = prompt("escreva a temperatura em celsius");
// const z1 =  prompt("escreva a temperatura em celsius");

// function celsiusParaFahrenheit(x) {
//     return (x*1.8)+32
// }

// console.log(celsiusParaFahrenheit(cel));
// console.log(celsiusParaFahrenheit(y1));
// console.log(celsiusParaFahrenheit(z1));

// Criar uma funcao que receba os parametros "nome", "nomeDoMeio" e "sobrenome" e concatene cada retornando o novo valor para a variavel "nomeCompleto". Faca utilizando parametros posicionais e nao posicionais.

// Posicional

function fullName(nome, nomeDomeio, sobrenome) {
    return nome + ' ' + nomeDomeio + ' ' + sobrenome;
}

const nomeCompleto = fullName('Pedro', 'Henrique', 'Bernardino');

console.log(nomeCompleto);

// Não posicional

function concNome({ nome, nomeDoMeio, sobrenome }) {
    return nome + ' ' + nomeDoMeio + ' ' + sobrenome;
}

const nomeCompleto2 = concNome({ sobrenome: 'Pivato', nome: 'Peter', nomeDoMeio: 'Potter' });

console.log(nomeCompleto2);

// - Função para trazer a cor de acordo o status. Dado o status (doing, refused, accomplished e scheduled) deve retornar as seguintes cores
// 	- "doing" = #FFC600
// 	- 'refused' = '#D9705E'
// 	- 'accomplished' = '#75BA69'
// 	- 'scheduled' = '#75BA69'

// const status = prompt('Defina o status entre doing, refused, accomplished ou scheduled')

// function corDoStatus(status) {
//     if (status === 'doing') {
//         return '#FFC600';
//     } else if (status === 'refused') {
//         return '#D9705E';
//     } else if (status === 'accomplished' || status === 'scheduled') {
//         return '#75BA69';
//     } else {
//         return'Impossível de definir o status.';
//     }
// }

// const cor = corDoStatus(status);

// console.log(cor);

// Verificar Maioridade
// Escreva uma função chamada verificarMaioridade que recebe uma idade como parâmetro e retorna true se a idade for 18 ou mais, ou caso contrário retorne false.
// Obs.: utilize parametros nao posicionais.


function verificarMaioridade({ idade }) {
    return idade >= 18
}

const age = 18;
const age2 = 15;
const age3 = 12;
const age4 = 40;

console.log(verificarMaioridade({ idade: age }));
console.log(verificarMaioridade({ idade: age2 }));
console.log(verificarMaioridade({ idade: age3 }));
console.log(verificarMaioridade({ idade: age4 }));


// Corrija a função
// A função abaixo está com um bug que evita que ela funcione corretamente, identifique o erro e corrija

// Verificar Vogal
// A função isVogal abaixo verifica se uma letra é uma vogal ou não, retornando true ou false.

// const text = 'aeiouAEIOU'

// function isVogal() {
//   return text.includes(caractere);
// }

// // Teste
// console.log(isVogal('a')); // Deve retornar true
// console.log(isVogal('b')); // Deve retornar false

const text = 'aeiouAEIOU'

function isVogal(caractere) {
    return text.includes(caractere);
}

// Teste
console.log(isVogal('a'));
console.log(isVogal('b'));

// - Crie um array com 5 times de futebol ou frutas e execute os seguintes procedimentos, na ordem a seguir:
// 	- Acesse o elemento de índice/posição 3.
// 	- Adicione mais 2 elementos no final do array.
// 	- Delete os elementos das posições 4 e 5.
// 	- Adicione 3 elementos no início do array.
// 	- Delete o último elemento do array.
// 	- Obs.: Exibir o resultado no console da cada um dos codigos executado acima.

const frutas = ['banana', 'maçã', 'uva', 'pera', 'pessego'];

console.log(frutas[3]);

frutas.push('morango', 'abacaxi');

console.log(frutas);

frutas.splice(4, 2);

console.log(frutas);

frutas.splice(0, 0, 'blueberry', 'Jaca', 'Acai');

console.log(frutas);

frutas.pop();

console.log(frutas);

// Dado o array de numeros a seguir, faça uma função que pegue cada item desse array, multiplique por 2 e retorne um array com os números multiplicados.

const numbers = [1, 2, 3, 4];

const multipliedNumbers = numbers.map(item => item * 2);

console.log(multipliedNumbers);

// Dado o array de numeros [2, 4, 6, 8], faça uma função que pegue cada item desse array, multiplique por 2 e some +3 e retorne um array esse resultado.

const num1 = [2, 4, 6, 8];

const multSoma = num1.map((numero) => (numero * 2) + 3);

console.log(multSoma);

// Crie uma função que recebe a base e a altura de um triângulo e retorna a área.

const base = 20
const altura = 40

const areaTriangle = (x, y) => (x * y) / 2;

console.log(areaTriangle(base, altura));

// Exercicio 1
// - Criar um objeto com as seguintes propriedades e valores:
// 	- name: Gabriel
// 	- surname: Gomes
// 	- age: 18
// 	- birthdate: 16/08/1988
// 	- type: free
// - Acessar a propriedade name
// - Acessar a propriedade birthdate
// - Concatenar a propriedade name e surname adicionando o novo valor na variavel fullname
// - Modificar a propriedade type para "premium"

const user = {
    name: 'Gabriel',
    surname: 'Gomes',
    age: '18',
    birthdate: '16/08/1988',
    type: 'free',
}

console.log(user.name);

console.log(user['birthdate']);

const fullname2 = user.name + ' ' + user['surname'];

console.log(fullname2);

user.type = 'premium';

console.log(user.type);


// Crie um array com 5 nomes de cidades.
// 	- Acesse o elemento de índice/posição 3.
// 	- Adicione mais 3 elementos no final do array.
// 	- Delete os elementos das posições 1 e 2.
// 	- Adicione 1 elemento no início do array.
// 	- Delete o último elemento do array.
// 	- Exiba o resultado no console de cada um dos códigos executados acima.

const citys = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Bauru', 'Florianópolis'];

console.log(citys[3]);

citys.push('Gôiania', 'Jaú', 'Brasília');

console.log(citys);

citys.splice(1, 2);

console.log(citys);

citys.splice(0, 0, 'Manaus', 'Porto Alegre');

console.log(citys);

citys.pop();

console.log(citys);

// Crie uma função que receba o array de strings abaixo e retorne um novo array com todas as letras da string em maiúsculas.

const countries = ["Brasil", "Irlanda", "China"];

const upperCaseCountries = countries.map(country => country.toUpperCase())

console.log(upperCaseCountries);

//     Criar um objeto "animal" com as seguintes propriedades:
// - nome = Mingau
// - sobrenome = Shiro
// - idade = 6
// - miar = uma funcao que escreve a palavra "miau"

// Após criar o objeto faça:
// - Acessar o nome do animal e mostrar no console.log
// - Acessar o idade do e mostrar no console.log
// - Criar uma função chamada "descricao que mostra o nome, sobrenome e idade do animal.

const animal = {
    nome: 'Mingau',
    sobrenome: 'Shiro',
    idade: '6',
    miar: function () {
        console.log('miau!');

    }
}

console.log(animal['nome']);

console.log(animal.idade);

function descricao() {
    console.log('O nome do animal é' + ' ' + animal.nome + ' ' + animal.sobrenome + ' ' + 'e ele tem atualmente' + ' ' + animal.idade + ' ' + 'anos.');

}

descricao();

// Dado o array de objeto "people" abaixo, utilizer o array map para retornar em uma variavel "result" o nome de cada pessoa.

const pessoas = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
];

const result = pessoas.map(person => person.name);

console.log(result);

// Escreva um programa que leia a idade de uma pessoa e verifique se ela pode votar (ou seja, maior de 16 anos, no caso do Brasil). Exiba "Você pode votar" ou "Você não pode votar".

const idadeVoto = 14;

const validacao = idadeVoto >= 16 ? true : false;
console.log(validacao);

// Criar um switch para mostrar qual e o tipo de assinatura do usuario. Conforme os procedimentos abaixo:
// 	- Criar uma variavel "assinatura" com o valor "free"
// 	- Criar um Switch com 3 opcoes (free, premium e plus)
// 	- Exibir no console.log() o valor de "assinatura". Ou seja, ao mudar o valor da variavel "assinatura" o switch deve mudar o valor exibido no console.log()


const assinatura = 'premium';

switch (assinatura) {
    case 'free':
        console.log('Sua assinatura e free.');
        break;
    case 'premium':
        console.log('Sua assinatura e premium');
        break;
    case 'plus':
        console.log('Sua assinatura e plus.');
        break;
    default:
        console.log('Nao e possivel conferir sua assinatura.');
        break;
}

// Considere uma função evaluateGrade que recebe uma letra representando uma nota (A, B, C, D, F) e retorna uma mensagem apropriada (por exemplo, "Excelente" para A, "Bom" para B, etc.). Implemente essa função usando switch.

const evaluateGrade = 'F';

switch (evaluateGrade) {
    case 'A':
        console.log('Excelente');
        break;
    case 'B':
        console.log('Bom trabalho');
        break;
    case 'C':
        console.log('Na média');
        break;
    case 'D':
        console.log('Não foi o suficiente');
        break;
    case 'F':
        console.log('Estude mais');
        break;
    default: console.log('Impossivel encontrar sua avaliacao');
        break;
}

// Crie um objeto chamado livro com as propriedades titulo ("Harry Potter"), autor (J.K. Rowling) e ano (2000). Em seguida, crie uma função chamada detalhesDoLivro que retorna uma string com todos os detalhes do livro.

const livro = {
    titulo: 'Harry Potter',
    autor: 'J.K. Rowling',
    ano: '2000',
}

function detalhesDoLivro() {
    return `O nome do livro é ${livro.titulo}, da autora ${livro.autor} e foi lançado no ano  ${livro.ano}.`;
}

console.log(detalhesDoLivro());

// Dado o array de objetos abaixo, faça uma função que retorne um array com apenas as notas de cada estudantes.


const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const studentNotes = students.map ( nota => nota.grade);

console.log(studentNotes);