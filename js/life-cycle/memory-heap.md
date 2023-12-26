# Memory heap

Javascript possui um sistema de dois tipos de espaços de memoria, stack e heap.
Quando criamos um objeto no javascript a sua alocação é feita de forma automatica, quando deixamos de usar um objeto criado, de forma automatica sua memoria é limpa em tempo de execução. Linguagens como "C" possuem funções de gerenciamento de memoria como `malloc()` e `free()` que são utilizadas para alocar e liberar memoria. Linguagens de alto nivel utilizam um processo chamado "Garbage Collector" para limpar a memoria não utilizada, read more here ➡️ [Garbage Collection](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_management#garbage_collection).

## Life Cycle Of The Memory

- Alocar memoria que precisa
- Utilizar a memoria alocada
- Liberar a memoria alocada quando não se é necessario

```js
const name = "Junior Barros"; // aloca memoria para armazenar o string

console.log(name); // Libera memoria após seu uso de forma automatica
```

> Código equivalente me C

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
  char *name;
  name = (char*) malloc(21 * sizeof(char)); // 20 characters string 1 char to \0
  printf("Your name: ");
  gets(name);

  printf("Name: %s \n", name);

  free(name);
  return 0;
}
```

### Recomendações e boas praticas

Algumas funções e tipos e contextos de variaveis não são limpas de forma automatica, isto é valido para funções como setInterval, setTimeout, addEventListener.

- `addEventListener` ➡️ é necessario usar o `removeEventListener` para tirar da memoria
- `setTimeout` ➡️ `clearTimeout`
- `setInterval` ➡️ `clearInterval`
- variaveis do tipo globa, ou seja `var` não são limpas, de preferencia sempre a const ou let para isso.

### Docs

- [Memory Heap](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_management#garbage_collection)
- [Memory management in javascript](https://codedamn.com/news/javascript/memory-management-complete-guide)
