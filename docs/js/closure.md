# Closure

Closure is an inner-functions access to an outer functions variables and parameters. Closure separates the instantiation of variables within scopes.

The below example is taken from http://javascriptissexy.com/understand-javascript-closures-with-ease/

```js
function showName (firstName, lastName) { 
    ​var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, including the parameter​
    ​function makeFullName () {         
    ​return nameIntro + firstName + " " + lastName;     
    }
    ​
    ​return makeFullName (); 
    } 
    ​
    showName ("Michael", "Jackson"); // Your name is Michael Jackson 
```