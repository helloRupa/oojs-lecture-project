# OO JS Prework
Please complete this reading before today's lecture. If you have time, also play with the code in this folder a bit.

## Good to know
JavaScript class syntax is just syntactic sugar. Technically, it adds nothing new to the language, but rather a new syntax for doing the same old things JavaScript was already able to do. Think of it like this: If you paint the exterior of an old house, you're just making it look different, maybe even a bit nicer. However, it's still the same old house inside with the same old features.

## Please open superstar.rb and superstar.js in the split editor so you can see them side by side
I want you to see how Ruby class syntax and JavaScript class syntax relate to each other. This should help you understand this syntax more easily, or so I hope.

To play with the JS code, copy and paste it into the Dev Tools console.

Most important things to look out for:
- constructor()
- instance variables
- instance methods
    - two ways to declare them
    - we'll go over the difference in lecture: `this`
- inheritance syntax

**!!Don't go any further unless you are comfortable with the list of items above!!**

## If you are comfortable with the above:
Try this out in the Dev Tools on any webpage. Notice the difference in what's logged to the console. 

Copy and paste the code snippet (Yes, it's adding to event handlers to the body for click):
```
document.body.addEventListener('click', function() {
  console.log('');
  console.log('Logging value of this in callback declared using function syntax:');
  console.log(this);
});

document.body.addEventListener('click', () => {
  console.log('');
  console.log('Logging value of this in callback declared using arrow syntax:');
  console.log(this);
});
```
**Don't forget to click the body!**