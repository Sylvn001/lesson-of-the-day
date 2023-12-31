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

- Javascript é single-threaded, ou seja, possui apenas uma unica callstack

- Quando é feito uma chamada de uma função. Essa função será armazenada em uma pilha de chamadas, em seguida, a função é carregada.

- Qualquer outra função a ser chamada por essa função será armazenada na pilha de chamadas, uma a cima da outra

- A função após ter sua execução finalizada, o interepretador retira a função da pilha e continua a execução do programa onde ela parou

- Caso a pilha esteja lotada, será exibido o "Stack Overflow error", isto acontece pois o espaço de memoria reservado para a chamada de funções se esgotou.

No exemplo do código, todas as funções são ignoradas até chegar na função "foo()", está que é a primeira chamada de função no código escrito.

- Foo() será chamada, o js armazena a função na pilha de chamadas (callstack) e o processo segue para todas as funções.
- A função Foo() chama a função sayHi()
- Por sua vez, sayHi() chama a função bye()
- bye() é executada, não existe mais nenhuma chamada de função, então segue as instruções escrita no código da função e finaliza, após finalizar, ela é limpa da callstack e prossegue com a execução.
- sayHi() executa o restante de seu código e finaliza
- Por fim, foo() finaliza  a sua execução pois não há mais nenhum código em seguida.
- O Código se encerra com foo() sendo limpada de sua callstack

### CallStack Execution

![callstack](https://github.com/Sylvn001/lesson-of-the-day/assets/50564121/a9563884-c4b1-450f-97fe-a8f1836591a4)

### Docs

- [Callstack](https://developer.mozilla.org/pt-BR/docs/Glossary/Call_stack)
- [PT-BR :: Como javacript funciona](https://medium.com/reactbrasil/como-o-javascript-funciona-uma-vis%C3%A3o-geral-da-engine-runtime-e-da-call-stack-471dd5e1aa30)
