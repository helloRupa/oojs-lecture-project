# Object-Oriented JavaScript
Here's what we'll be building together today using JS class syntax:
![](assets/example.gif)

Some of this has already been built out. We'll be adding some functionality to the parent class and creating one child class to practice our OO JS skills.

## By the end of the lesson, you should be able to:
Declare a class in JavaScript - including prototype (instance) methods, static (class) methods, and instance properties (variables) - and instantiate new objects from it. 

We also have two secondary goals:
- Declare a child class
- Be able to explain context (`this`) at a high level and recognize errors that occur when `this` is no longer what we expect it to be. You are not expected to walk away today having fully understood `this`. It takes practice, a lot of experimenting with code, and reading to fully grasp, so be kind to yourself if you find `this` confusing.

## Wait, but why?
- Easier to organize our code
- Easier to share, reuse, and edit code at a later date
- Necessary for React development (aka MOD 4)
- Don't have a dumpster fire of functions and variables floating around, unless you're into that sort of thing

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
In Ruby, we have `self`, which refers to the specific instance of an object. `self` never changes. It knows who it is and who it will be in the future. It doesn't need to go on any personal journeys to discover who it is.
```
class IamWhoIAm
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def say_name
    # We're using self.name in place of @name
    # In this method, they're the same thing
    # I just needed to put self somewhere
    puts "I am #{self.name}"
  end
end

honey_badger = IamWhoIAm.new('Honey Badger')
puts honey_badger.say_name # I am Honey Badger
```
In Ruby, it doesn't matter where or how or where we call honey_badger.say_name, it always prints the name in the object you expect it to be associated with: 'Honey Badger'

In JS, there is no `self` of even anything truly like it. Instead we have `this`. `this` refers to the context in which a function was called. The value of `this` can change depending on how/where it was called as well as which syntax was used to define the function (function syntax or arrow syntax). 

Think of it like this: You go to a restaurant called Subways Fancy Feasts and are served by a waiter...let's call him Cire. In Ruby, Cire only works at Subways Fancys Feasts, and he only offers items off of that restaurant's menu. In JS, Cire can be a waiter anywhere: Maybe you see him at Truffle Village, Subways Fancy Feasts, and Black Cat Cafe. He's a bit of a chameleon, and what he offers you off of the menu, depends upon which restaurant you see him in, aka the context in which you see him. If you see him sitting down to eat, you get an error, because he isn't even a waiter anymore.

Let's check out some code examples where we log the value of `this`:
```
function justLogThis() {
  console.log(this);
}

justLogThis(); // Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}
```
`justLogThis()` was called from the global scope, so the value of `this` is Window (the global object in the browser).

```
class Cat {
  constructor() {
      this.name = 'Kits McGee';
  }
    
  meow() {
    console.log(`${this.name} says Meeeow`);
    console.log(this);
  }
}

const kits = new Cat();
kits.meow();
// Kits McGee says Meeeow
// Cat {name: "Kits McGee"} <- this
```
`meow()` was called from/by `kits`. In this case, `this` equals the instance of the Cat that called it. Pretty normal stuff so far.

> Shortcut to figuring out what the value of `this` is in many cases (not all though): Was the method called from another object using the dot operator `.` like in the example above. `this` refers to the object before the dot.


### What you absolutely need to know about `this` for Mod 4
Please plan on getting a grasp on `this` and context in JS before or shortly after you graduate. It's an important concept that will help you become a proficient JS programmer and delight your interviewers.

***Here's the shortest story: In React, when using class syntax, declare prototype methods using arrow syntax. There's an example further below.***

The important thing to know for Mod 4 is that if you define prototype (instance) methods using standard syntax, you will get an error if you forget to bind the context (the value of `this`) before using it as a callback to an event handler inside of `render()`. The code below creates a paragraph element and adds a click handler to it. When the paragraph is clicked, the user should see an alert with a greeting. Don't worry about understanding all of the below code, I just want you to see the error, so you can debug it when/if it happens.
```
class Greeting extends React.Component {
  constructor() {
    super();
    this.name = 'Bear Party';
  }

  greeting() {
    alert(`My most beautiful name is ${this.name}`);
  }

  render() {
    return (
      <p onClick={ this.greeting }>Click Me!!</p>
    )
  }
}
```

In the above code, clicking on the paragraph in the DOM will cause the following error: `Uncaught TypeError: Cannot read property 'name' of undefined`
Think about what that error means. What might have changed or gotten lost between attaching the handler, running the code and clicking on the paragraph?

The answer is that the context, aka the value of `this`, changed, because the context in this case, depends on from where the function is called.

**Note: If we had just run `greeting()`, we would not have gotten an error. `<p>{ this.greeting() }</p>` would not have caused an error. Just be aware that the error occurs when we use prototype methods as callbacks.**

There are a few ways to resolve this error and ensure that the context is bound to `greeting()`. Let's go over the two most popular ways of ensuring this error does not occur:

Bind the context to the method in the constructor: 
```
class Greeting extends React.Component {
  constructor() {
    // some code
    super();
    this.name = 'Bear Party';
    this.greeting = this.greeting.bind(this);
  }
  // more code
}
```

OR declare your prototype methods using arrow syntax:
```
class Greeting extends React.Component {
  constructor() {
    super();
    this.name = 'Bear Party';
    // No need to bind when using arrow syntax!
  }

  // automatically bind the context to the method using
  // arrow syntax
  greeting = () => {
    alert(`My most beautiful name is ${this.name}`);
  }

  render() {
    return (
      <p onClick={ this.greeting }>Click Me!!</p>
    )
  }
}
```

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
