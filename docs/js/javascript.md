# JavaScript (JS)

> [Comprehensive JavaScript Resource]()
>
> JS is an Object Oriented Programming Language (OOP) for the web browser. It was originally introduced to allow interaction with the Document Object Model which is rendered from an HTML file.
>
> [emgoLIB]()
>
> JavaScript (JS, Javascript, javascript) is a ["loosely-typed"]() scripting language.

## Basics

Some basic details concerning JS and its' behavior.

- A script file is read from top to bottom.
- Functions are not executed when they are declared, and where a function is called does not necessarily have to precede after it is declared.
- JS reads through the file to interpret all assignments and constructs and then again to execute all global code
- JS allows us to assign values to named identifiers called variables. These variables can store a value, and placing the variable name elsewhere in the document will use that value there.

## Data (Values)

Data in JS is information that can be used or manipulated. This data may be a sequence of characters to be understood as a string of text like a name: "Michael Goldspinner", or a sentence: "Hello World! My name is Michael.". When you surround text in quotation marks you might think you're typing a quote, but the quotation marks tells JS that this text is data. When you type text without these quotations, JS thinks you are trying to declare an identifier (variable).

Other data that you can use are numbers to do calculations such as: 1+1 will return 2 and 2*3 (* is a multiplier) will return 6. Numbers are not surrounded by quotation marks however. If you do they will be understood as a string of text, not numbers. If you try to add "1" + "1" you will get "11" instead.

It's best to only go so far into data before we move on because the other sections will bring it all together, namely understanding the different types of data, and how you can manipulate and store it.

## Operators
Operators are the symbols used when you want to perform an action on data. Here is a list of operators in JS.

- =   Equals
- ==  Equals To
- === Equals To (Strict)
- +   Plus
- -   Minus
- /   Divide
- *   Multiply
- >   Greater Than
- <   Less Than
- %   Modular
- &&  And
- ||  Or
- !   Not

For example you might want to add (5 + 2), subtract (5 - 2), multiply (5 * 2) etc. You may also want to see whether (5 < 2) which is obviously false, but when you performed the above calculations you would get the result of the calculation, what is the result of > or < ? Well five is not less than two, it's false. This data is known as a boolean.

## Statements

A statement is a single execution of code. Normally when you write a line of code in JS, you should indicate the end of your statement with a semicolon. JS is lenient with this however, so it is not required unless you write multiple statements on a single line. This is because JS interprets each line as an individual statement. If you write several statements on one line, JS has no way of telling where your statement should end.

## Expressions

An expression is a complex statement that takes place over several lines of code. These several lines of code may also be known as a code block. Expressions are usually contained in complex code blocks that execute either multiple times, or under certain conditions.

## Identifiers (Variables)

When we write out data directly in the file, it's executed and results are printed in the console. After our file is read, data that is not stored is discarded. However we can store our data and reuse it throughout a script by assigning it to an identifier. Identifiers, or variables, are names that we assign data to.

var myName = "Michael";

var: This is our keyword. It's not an operator because it isn't a symbol. It lets us know we are declaring a variable.
myName: This is the identifier name we are creating. Identifier names are not surrounded with quotation marks.
=: This is our operator here. We are declaring a variable name with var keyword, but we use this to assign a value to that identifier.
"Michael": This is our data. We are saying that myName is equal to "Michael".
;: This semicolon is used to indicate the end of our line of code. JS is lenient whether you add this or not, but it IS important if you are going to write two code statements on a single line.

There are three different types of variables we can declare with different keywords.

var: a regular variable. Global scope and may be reassigned and redeclared.
let: a scope specific variable. Only exists on the scope it is declared. May be reassigned, not redeclared.
const: a scope specific variable. Only exists on the scope it is declared. May not be reassigned or redeclared.

## Scope

The scope is a level of focus that execution takes place at. When you code, it's a good practice to indent code that is contained in an expression. In JS this would look like a block expression containing some code.

{
	2 + 3;
}

This is an expression with a single statement in it. The scope of this statement is confined to the expression. This means our statement is isolated from the rest of our code written outside of expressions.

For example, when we use our scope specific variable keyword 'let' on the global scope, that is the first indent if your are indenting properly, we can reuse that variable inside an expression.

let a = 2;

{
	console.log(a + 3);
}

This will print the result of 5 to the console. However if we do the opposite.

{
	let a = 2;
}

console.log(a + 3);

you'll get an error saying a is not defined. However if we did the same test with var, it would not matter either way, because var declared identifiers persist to the global scope after an expression is executed.

## Data Types

Values have types in JS. In other languages when declaring variables come in specific types. They are:

"undefined"
"null"
"strings"
"integers"
"boolean"
"object"

The undefined data type defines a value that cannot be found or is not assigned.
You might get an undefined in the console when a variable has been declared without having any value assigned to it.

The null data type is a placeholder for nothing. So while undefined is when a value that cannot be found, possibly when expected, null is the absence of a value.
Null is best understood as a void
