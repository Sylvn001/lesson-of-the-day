### Mutable and Immutable JS

## Mutable

If the value can change, the object is called mutable.

> In js. All primitive types are mutable.

- Strings
- Numbers
- Boolean symbol
- null
- undefined

```js
let x = 20;
let y = x;

y = y + 1;

console.log(x); // will return 20
console.log(y); // will return 21
```

## Immutable

If the value cannot change the object is called immutable

> In js all array, objects are immutable. If you try to change the value, you are chaging the memory reference of this opbject

- Arrays
- Objects
- Functions

```js
let a = ["A", "B", "C"];
let b = a;

b.push("D");
console.log(b); // returns ['A', 'B', 'C', 'D']
console.log(a); // returns ['A', 'B', 'C', 'D']
```

## Callstack and Memory Heap

**Primitive types** are stored in callstack, any variable declared with primitive types are atomic. stored aas value to a variable.
**Reference type (object, array, ...)** are stored as references in memory, consist of multiple properties

## Docs

- [Mutability vs Immutability](https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/)
