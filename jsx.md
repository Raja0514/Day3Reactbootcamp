JSX:

Jsx is a syntax extension of javascript or html like a syntax 

JSX Allows to write Html elements in javascript and place them in the DOM without any 

createElement() or appenchild methods.

jsx convert html tag into ReactElements.

JSX is a extension of javscript language based on ES6 , and it translated into regular javascript at run time.

Expression in JSX:

with JSX you can write expressions curly braces {} 

The expression can be React variable or property or any other valid expression.JSX will execute

the expression and return the result.

one TOP Level Elements:

The Html code must be wrapped in ONE Top Level Element.so if you like to two paragraph , you must put them inside a parent element , like a div element.

const myElement=(
    <div>
    <p>I am a Paragraph1</p>
    <p>I am a Paragraph2</p>
    </div>
)

Alternatively you can use a "Fragment" to wrap multiple lines.this will prevent unnessarily adding extra nodes to the DOM.

A fragment look like a empty html tag 

<>
<p>code</p>
<p>code</p>
</>

JSX solved this by using className instead of class.

conditions - if statements

React supports if statements, but not inside JSX.

Note that in order to emped a javascript expression inside JSX.The javascript must be wrapped

in curly braces.

