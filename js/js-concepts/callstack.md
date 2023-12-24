# Call Stack

A pilha de chamadas no js trata-se do comportamento de uma linguagem de programação quando se é chamado varias funções o interpretador da linguagem possui um comportamento especifico para esses casos. Vamos analisar o seguinte código.

```js
function foo() {
  sayHi();
  console.log("Foo start");
  //code here
  //more code here
  console.log("Foo end");
}

function sayHi() {
  bye();
  //code here
  console.log("say hii");
}

function bye() {
  console.log("Byee");
}

foo();
```

Como será a saida no console ao final da chamada? A resposta é:

```
"Byee"
"say hii"
"Foo start"
"Foo end"

```

### Conceitos importantes quando falamos de call stack em javascript.

- Quando é feito uma chamada de uma função. Essa função será armazenada em uma pilha de chamadas, em seguida, a função é carregada.

- Qualquer outra função a ser chamada por essa função será armazenada na pilha de chamadas, uma a cima da outra

- A função após ter sua execução finalizada, o interepretador retira a função da pilha e continua a execução do programa onde ela parou

- Caso a pilha esteja lotada, será exibido o "Stack Overflow error", isto acontece pois o espaço de memoria reservado para a chamada de funções se esgotou.

No exemplo do código, todas as funções são ignoradas até chegar na função "foo()". Em seguida

### Docs

- [Callstack](https://developer.mozilla.org/pt-BR/docs/Glossary/Call_stack)
- [PT-BR :: Como javacript funciona](https://medium.com/reactbrasil/como-o-javascript-funciona-uma-vis%C3%A3o-geral-da-engine-runtime-e-da-call-stack-471dd5e1aa30)
