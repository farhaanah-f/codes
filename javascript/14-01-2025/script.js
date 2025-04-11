// Global Scope
// Var is a global Scope.

var a = 5;
var a = 6;
for(i=2;i<=10;i++){
    console.log(a*i);
}
console.log(a);
// var can be redeclared and reinitialize within or outside the scope without an error but last variable will lead in Var.

// Block scope or Functional scope
// Let  is a block scope.

let b = 5;
for(i=2;i<=10;i++){
    console.log(b*i);
}
console.log(b);
 // Let can be redeclared but can't be reinitialized. And it is also a script scope.

 // const is a script scope

 const c  =8;
 console.log(c);
 // const can't be reassigned and reinitialized.
