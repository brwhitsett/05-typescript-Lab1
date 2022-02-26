// In its own file, create a class named HtmlGreeter. This is a subclass of Greeter.
// Additional Properties:
// tagName (a string)
// Constructor Parameters:
// greeting (a string): sets greeting on the superclass.
// tagName (a string): sets the tagName property. This parameter is optional and has a default value of "h1".
// Override greet: Override the greet method to wrap the result in the specified HTML tag. For example, greet might return "<h1>Hello, Grant!</h1>".
// Jest Tests: Test with different greetings, names, and tagNames. Also test the default "h1" tagName when the second constructor argument is left off.

import { Greeter } from "./Greeter";

export class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(newGreeting: string, tagName: string = "h1") {
    super(newGreeting);
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>` + super.greet(name) + `</${this.tagName}>`;
  }
}
const omg: HtmlGreeter = new HtmlGreeter("OMG");
console.log(omg.greet("Rue"));
