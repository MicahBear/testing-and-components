# Chaining Functions

## What is Chaining ? 

In this solution we are chaining with a Closure. Instead of using the traditional way of using the Function key word and then return with a call to each function I am using Arrow Functions.  It should be noted though that Arrow Functions don't have their own bindings to THIS and instructed by mdn docs Arrow Functions should not be used as methods.

## When to use Chaining ? 

We are mutating the same element within a closure, the inner functions have access to ther functions scope where the variable is declared and retains reference to functions other scope. So it is useful again for creating private variables and functions.

## Where and how to use Chaining ?

We see chaining used commonly with strings, objects, and arrays with methods.