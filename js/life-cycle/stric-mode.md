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
