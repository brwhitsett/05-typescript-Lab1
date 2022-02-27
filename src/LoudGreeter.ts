// LoudGreeter Class
// In its own file, create a class named LoudGreeter. This is a subclass of Greeter.
// Additional Properties:
// extra (a string): Use the private modifier. This property keeps track of the extra exclamation points. Hard code an initial value.
// Additional Methods:
// addVolume: No parameters. Returns void. Every time this is called, it adds an additional exclamation point to extra.
// Override greet: Override the greet method to add the extra exclamation points to the end. For example, greet might return "Hello, Grant!!!". Note, the original greet method already has one exclamation point, so LoudGreeter starts with two exclamation points even before calling addVolume.
// Jest Tests: Test with and without calling addVolume. Test calling addVolume different numbers of times.

// QUESTIONS FOR CLASS: #1 WHATS THE DIFFERENCE BETWEEN SETTING AN INITIAL VALUE IN THE PROPERTY VS CONSTRUCTOR?
// #2 STEP 4 SAID TO HARD CODE A VALUE FOR THE PROPERTY EXTRA, HOWEVER THAT DIDN'T DO ANYTHING AND I ENDED UP SPINNING MY WHEELS TRYING TO WRITE A METHOD THAT CALLED ON EXTRA'S PROPERTY VALUE. WHAT ARE THE LIMITATIONS OF HARDCODING A VALUE INTO BOTH THE PROPERTY AND THE CONSTRUCTOR?

import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";
  addVolume(): void {
    this.extra += `!`;
  }
  greet(name: string) {
    return `${this.greeting}, ${name}!!${this.extra}`;
  }
}
