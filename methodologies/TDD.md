### TEST DRIVEN DEVELOPMENT

> Unit tests: Unit tests aim to individually test each individual functionality of the application.

> When we create a unit test, we guarantee that that code must work as expected, following the set of business rules established during application planning. TDD is an XP methodology, its objective is to ensure that all system functionalities work correctly, guaranteeing 100% test coverage, developing the test, making it work and then refactoring the code for improvements.

## Three steps

- RED (FAIL TEST): At this stage we write the test, at this point the test will fail because you don't have anything implemented yet
- GREEN (SUCCESS TEST): We make the test pass, in the most basic way possible, implementing its functionalities.
- BLUE (REFACTOR): We refactor the code, improve it in a cleaner, more organized way.

TDD aims to work with small scopes of code, with small parts that will gradually build a complete system. You partition the problem into smaller problems, causing code to be written, passed, and then refactored, and thus moving on to the next steps continuously. Therefore, there are three laws that must be followed.

1 - You should not write code without first having a test fail.

2 - You cannot write more than one unit test to make your test fail

3 - You cannot write more than necessary to make your test fail

After completing the test, making the basic code to pass, you refactor the features and think about new test cases to be developed, tested, improved...
