// Without strict mode
function withoutStrictMode() {
    console.log(this); // Output (in a browser): Window object
  }
  
  // With strict mode
  function withStrictMode() {
    'use strict';
    console.log(this); // Output: undefined
  }
  
  withoutStrictMode();
  withStrictMode();
  
  /*When withoutStrictMode is called without any explicit context, the this value inside the function is bound to the global object
(Window in a browser)

when withStrictMode is called without any explicit context, the this value inside the function is set to undefined. This change in behavior was introduced in 
ECMAScript 5 to prevent accidental use of the global object and promote more predictable code.*/

// catch potential errors and encourages better coding practices by making JavaScript's behavior more explicit
