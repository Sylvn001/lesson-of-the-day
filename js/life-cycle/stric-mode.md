# Strict Mode

Strict mode é uma forma de limitar o javascript de forma com que sua semantica seja alterada. Primeiramente é eliminado alguns erros silenciosos do javascript, fazendo com que seja lançado exceções para códigos incompativeis com o modo strict .

## Como invocar o strict mode

Basta usar `"use strict"` antes de qualquer código javascript

```js
"use strict";
const mode = "Hii i'm strict mode code";
```

É possivel utilizar o strict mode a nivel de função

```js
function strict() {
  "use strict";

  return "i'm strict function";
}
```

### Algumas mudanças no strict mode

O comportamento da linguagem em sintaxe e em tempo de execução é alterado. As mudanças são extensas, com base na documentação é possivel ler e entender melhor todas as mudanças feitas no modo strict. Saiba mais em [mdn docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode).

### Exemplos de mudanças no strict mode

```js
"use strict";
name = "Junior";
console.log("name"); // reference error - name is not declared. by default js search a global string with the name "name", in default js this action will not give a error

const x = {p1: 2, p1: 5} // this will cause an error, in default js, the last declared variable will receive the last value

let x = 3.14
delete x // this will cause an error

const octal = 010 // this will cause an error because octal numeric literals are not allowed - the same with "\010"

delete Object.prototype // will cause an error because trying to delete an undeletable property

const eval = 3.14 // the word eval cannot be used as a variable
const arguments = "this will cause an error because the word arguments is not allowed"

let with = "same here"
```

### Docs

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [w3school](https://www.w3schools.com/js/js_strict.asp)
