### Jest guide for begginers

## Instalation

Open dir and create npm configuration file
`npm init -Y`

install dev dependencies
`npm install --save-dev jest @types/jest typescript ts-jest @types/node`

install dependencies
`npm install ts-node`

Create ts configuation file
`npx tsc --init`

add this configuration in tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": false /* Enable error reporting for expressions and declarations with an implied 'any' type. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

And then run command in terminal
`jest --init`

Jest questions:

- would you like to use Jest when running "test" script in "package.json"? **Yes**
- Would you like to use Typescript for the configuration file **Yes**
- Choose the test environment that will be used for testing **NODE**
- Do you want Jest to add coverage reports? **YES**
- Which provider should be used to instrument code for coverage? **V8**
- Automatically clear mock calls, instances, contexts and results before every test ? **Yes**

**jest.config.ts recommended configurations**

```js
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};

export default config;
```

for debug you can create a test file and run `npx jest`

## Jest Matchers

Documentation of jest matches ➡️ [EXPECT JEST API DOC](https://jestjs.io/pt-BR/docs/expect)

```js
describe("Calculator", () => {
  it("Should sum two values", () => {
    const result = sum(2, 3);
    //toBe use === operator | toEqual use == operator
    expect(result).toBe(5);
  });

  it("Sum should not be 0", () => {
    const result = sum(2, 2);
    //not matcher
    expect(result).not.toBe(0);
  });
});
```

View more in -> [jest_basic_matches.spec.ts](../app/__tests__/jest_basic_matches.spec.ts)

You can use many matches for specific true or false test with jest

- `toBeNull` #null === null = true
- `toBeUndefined` #undefined === undefined = true
- `toBeDefined` # opposite of undefined
- `toBeTruthy` # true === true = true
- `toBeFalsy` # false === false = ftrue

### Numbers

- `toBeGreaterThan(param)`
- `toBeGreaterThanOrEqual(param)`
- `toBeLessThan()`

### Strings

- You can use regex expression

```js
  test('não existe I em team', () => {
  expect('team').not.toMatch(/I/);
```

### Async/await

jest has compatibility with promises

```js
test("await the fetchData response", async () => {
  const data = await fetchData(); // returns a promise
  expect(data).toBe({});
});
```
