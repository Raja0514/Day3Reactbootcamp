/* 

FUNCTION IS HEART OF THE JAVASCRIPT- FALL IN LOVE WITH JAVASCRIPT 

what is function in javascript ?

function is set of instructions.

why we use function ?

function is used to stop writing repeating lines of codes 

in javascript function can be stored as a local variable , passed and returned, they

are called first class citizens.

syntax of function

how to define the function

function nameoffunction(parameter){

  ........code-----
}

calling function

nameoffunction(arguments)

here--->parameter is kind of local variable
        arguments is a value


 type of function

1.named function

example :

function add(){

}

2.ananoymous function ==>mostly callback function

function(){

}

we can save the ananymous function as a local varibale

const value= function(){ 
    
}

2.IIF Function

what is Higher order function ?

Function that takes another function as a argument(CALLBACK FUNCTION) is known as higher order function.


js callbacks?

"I  will callback later"

a callback is a function passed as an argument

to another function.

a callback function can run after another function

has finished.

Note:

when you pass a function as an argument rebember not use parenthesis.

Right:functionname(callbackfn)

wrong:functionname(callbackfn())

*/

//named function

function data12() {
  console.log("test");
}

//data12();

function data0() {

  return "welcome";

  console.log("welcome");

//return statement stop the function excution and return the value

}

// if you have return statement in your function you can't call directly you have to save

//in local function then call the function

const value = data0();

//console.log(value);

function data1() {
  return "hello";
}

function data2(x) {
  console.log(x());
}

//data2(data1); //data1() -->don't call like this - here we can pass the value only


function x(){
    return function(){
      return 10;
    }
}

x();

let result=x();

//console.log(result);

//console.log(result());


function y(){
  return function(){
    return 40;
  }
}

//console.log(y()());

let result1=y();

//console.log(result1);

//console.log(result1());

//console.log("welcome")



function x1(){

  return "welcome to MLC"

}

function x2(fn){

  return fn()

  console.log("welcome")

}


//console.log(x2(x1))


let z=10;

//console.log(z);

let a=function(){

 return 20

}

a();

//console.log(a());

function a1(a,b){
  return a+b
}

let as=a1(1,1);

//console.log(as)

//console.log(a1(2,3))

//console.log("welcome")


function dataop(){

  console.log("welcome to chennai");
}

//dataop();



//function declartion

function x1(){
return 20
}

function y1(callbackfn){
return callbackfn();
}

//y1(x1) Higher order function

//x1()-we can not call the function like this

//console.log(y1(x1))

//function initialization

let func1=function(){
  return 30
}

//console.log(func1());

//methods

const obj={
  name:"raja",
  fn:function(){
    return "welcome"
  }
}
//console.log(obj.name);
//console.log(obj.fn())

//calling inside function to another function

let test={
  init:function(){
    return test.run()
  },
  run:function(){
    return "calling inside function"
  }
}

//console.log(test.init())

function z1(a,b){
  return a+b
}

let s=z1(2,5)

//console.log(s)












//fn dec

function x4(){

  return 25

}

console.log(x4());

//fun init

const test1=function(){
  console.log("test..");

}

console.log(test1());

function x5(x6){

  return x6();
  
}

console.log(x5(x4)); 




