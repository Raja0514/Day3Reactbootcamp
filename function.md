React Bootcamp Day-3 Notes

what is function ?

function is set of instructions .

why we use functions ?
function is used to repeating lines of codes. in javascript function can be stored as a local varibale passed and returned ,they are called first class citizens.

syntax of function ?

function functionname(paramaeter){
    ...some code
}  

functionname(arguments)
                    
Here-parameter is a kind of local variable and arguments is a value.

There is Two types of function 

1.Named Function
2.Ananymous Function 
3.IIFF (immediatly invoked function)


Example:

Named function 

function add(){
    ---code
}

ananymous function function means There is no names 

function(){
    ---code
}

ananymous function can be saved in local variable mostly its callback function.

IIFF-Immediatly invoked Function Expression:

a function that is called immediately after it is defined

js callback ?

"I WILL CALLBACK LATER"

what is callback ?

a callback is a function passed as an argument to another function.a callback function can run 

after another function finished.when you pass a function as a argument to another function

rebember not use parenthesis

Rightone:functionname(callbackfn)

wrong:functionname(callbackfn())

what is higher orderfunction?

* what is Higher order function ?

First-class functions are javascript functions that can behave like variables. They can also be passed as arguments

to higher order functions.

Higher-order functions are functions that return a function or take a function as a argument 

what is the differnce between HIGHER ORDER FUNCTION and CALLBACK FUNCTION

HIGHER ORDER FUNCTION:
                     The other functions which takes function as an argument are called higher order function.

CALLBACK FUNCTION:
                  in Higher order function passed argument function is called CALLBACK FUNCTION.

Example:

function data1(){
    return "hello"
}

function data2(x){
    console.log(x())
}

data2(data1)

here- data2  is higher order function
    - data1 is callback function


example of higher oreder function in javascript

setTimeout(callbackfn,milliseconds)
map(callbackfn)
reduer(callbackfn)
filter(callbackfn)
addEventLister(callbackfn)

what is higher order component in React?

higher oreder component is a function that takes a componnent and returns new component.

syntax:

const enhancedcomponent=Higerordercomponent(component);
