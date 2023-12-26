# Prototype Chain

Em javascript a palavra `class` foi introduzida a partir do ecmascript ES2015. Sendo apenas uma nomeclatura moderna para heranças, javascript é baseado em prototype.

Cada array, objecto, função no javascript é derivado de uma cadeia de prototipos, através da propriedade `__proto__`, essa propriedade é como se fosse uma especie de link que a leva para outro objeto, sendo possivel acessar outras propriedades especificas que são existentes em outro objeto (neste caso estou usando o termologia objeto, mas isso se aplica para array, função e outros tipos de dados derivativos).

- Function, Array, Object possuem o mesmo nivel hierarquico dentro da prototype chain

- Javascript é uma linguagem orientada a prototipos, em javascript as classes não são classes, e sim prototipos.

Já parou para pensar de onde o javascript reconhece suas funções herdadas baseada em um tipo de dado? por exemplo a função `push()` de um tipo array, ou `map()` de um objeto ou array, essas funções são herdadas de uma "classe" pai chamada

> Em seu computador, abra o console ou algum edito de preferencia para executar os comandos javascript

```js
const obj = { name: "literal object" };
console.log(obj);

const arr = [];
console.log(arr);

const myFunction = () => {};
console.log(func);
```

Repare que em toda a saida de cada uma variavel você encontrará o atributo `__proto__` esse atributo é reponsavel por fazer a cadeia de prototipos, sendo assim, cada objeto no javascript aponta para outro objeto, ou seja seu prototipo anterior, ou melhor, o seu objeto "pai". Quando não se tem mais nenhuma herança, quando se chega ao final, o retorno do `__proto__` será null

basta fazer o teste

```js
const obj = {};
console.assert(obj.__proto__.__proto__ === null, "returned false");
```

`console.assert(boolean_expression, errorMsg)` retorna uma mensagme em caso de erro, em caso de sucesso nada acontece.

O mesmo se aplica para todos os outros tipos, levando em consideração que em ambos os casos o cada tipo de dado referencial herda de um tipo especifico que herda de um Object.prototype

Vamos entender melhor o assunto com base em imagens

### Object

`myObject.__proto__ => Object.prototype`

### Function

`myFunction.__proto__ => Function.prototype`

### Array

`arr.__proto__ => Array.prototype`
(o conteudo de `arr.__proto__` possui funções como map, filter, reduce, etc.. )

### Objeto é apenas uma referencia ao valor armazenado no heap

Quando tentamos copiar um objeto, copiamos apenas a sua referencia em memoria, e não objeto ao todo. Para isso, utilizamos uma funcionalidade disponivel no ES2015. `Object.create(objToClone)`

vejamos o código a seguir

```js
const obj = { name: "Junior", age: 22, occupation: "Developer" };

const obj2 = (obj.age = 23);

console.log(obj); // returns  {name: "Junior", age: 23, occupation: "Developer"}
console.log(obj2); // returns {name: "Junior", age: 23, occupation: "Developer"}
```

Se vc deseja copiar o objeto, retornando cada valor igual porém com referencias de memorias diferentes, isto é, objetos distintos mas com atributos semelhantes, ou iguais, vc pode usar o `Object.create()` no lugar

```js
const obj = { name: "Junior", age: 22, occupation: "Developer" };
const newObject = Object.create(obj);

newObject.age = 50;
newObject.name = "Zé";

console.log(obj); //  { name: "Junior", age: 22, occupation: "Developer" };
console.log(newObject); // { name: "Zé", age: 50, occupation: "Developer" };
```

### Aprofundando em prototype chain

```js
const array = [1, 2, 3, 4, 5];

console.log(array.hasOwnProperty("1")); // true
console.log(array.hasOwnProperty("map")); // false
console.log(array.__proto__.hasOwnProperty("map")); // true
```

## Docs

Creditos ao Luiz Celso criador do artigo na qual as imagens foram utilizadas

- [O que é prototype chain em javascript](https://imasters.com.br/javascript/o-que-e-prototype-chain-em-javascript)
  [Prototype Chain MDN DOCS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
