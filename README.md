# Object-Oriented JavaScript
Here's what we'll be building together today using JS class syntax:
![](assets/example.gif)

Some of this has already been built out. We'll be adding some functionality to the parent class and creating one child class to practice our OO JS skills.

## By the end of the lesson, you should be able to:
Declare a class in JavaScript - including instance methods, class methods, and instance variables - and instantiate new objects from it. 

We also have two secondary goals:
- Declare a child class
- Be able to explain context (`this`) at a high level and recognize errors that occur when `this` is no longer what we expect it to be. You are not expected to walk away today having fully understood `this`. It takes practice, a lot of experimenting with code, and reading to fully grasp, so be kind to yourself if you find `this` confusing.

## Wait, but why?
- Easier to organize our code
- Easier to share, reuse, and edit code at a later date
- Necessary for React development (aka MOD 4)
- Don't have a dumpster fire of functions and variables floating around

## How we'll get there:
- Declare a class, including instance variables, instance methods, and class methods
- Distinguish between `this` in JS and `self` in Ruby
- Declare a child class and get familiar with `super` (`super` is the same in Ruby)
- Finish the silly webpage using class syntax
    - You can see the completed code here: https://github.com/helloRupa/oojs-lecture-project

## Declaring a class in JS
In Ruby, we place any functionality which we want to run as soon as an object is instantiated inside of #initialize. In JS, we use constructor(). Similar to Ruby, constructor() is optional. You only include it when you need it.
```
class Superstar {
  constructor(name, talent) {
    // public instance variables can be accessed from outside
    // the class
    this.name = name;
    this.talent = talent;
  }
}
```

We don't need to add special methods for accessing instance variables defined like this: `this.name = 'my name'`. They are automatically available for reading and writing to in JS.
```
star.name = 'Jarvis Cocker';
console.log(star.name);
```

We declare instance methods like so (However, _the proper name in JS is prototype methods_):
```
class Superstar {
  speak() {
    console.log(`My name is ${this.name}`);
  }

  moreSpeak = () => {
    console.log(`You can use arrow syntax too!`);
  }
}
```

We declare class methods like so (However, _the proper name in JS is static methods_):
```
class Superstar {
  static about() {
    console.log('Call me on the class just like I want you to.');
  }
}
```

## JS's `this` vs Ruby's `self`

## Declaring a child class (inheritance)

## MDN reference
[MDN class reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#:~:text=JavaScript%20classes%2C%20introduced%20in%20ECMAScript,oriented%20inheritance%20model%20to%20JavaScript)

## Nice to know if you have the time one day:
- [JS Prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
    - notice how `function Person` relates to class syntax - this is what the new class syntax is sugaring
- Private instance variables (in MDN link above)
- Class expression (also in MDN link)
    - Like a function expression! You know like how you store a function in like a variable and like all that jazz and stuff!
- Closing over a class (closure)
- Four pillars of object-oriented programming
    - [Dev.to Article on Four Pillars](https://dev.to/austinbh/the-four-pillars-of-object-oriented-programming-5bda)
    - [More Info on Polymorphism as the article above is too simplistic](https://thoughtbot.com/blog/back-to-basics-polymorphism-and-ruby)
