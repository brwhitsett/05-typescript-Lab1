import { Greeter } from "../src/Greeter";
import { HtmlGreeter } from "./HtmlGreeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";

const hey: Greeter = new Greeter("Hey");
console.log(hey.greet("Brittany"));

const yo: JavaScriptGreeter = new JavaScriptGreeter("Yo");
console.log(yo.greet("Sam"));

const omg: HtmlGreeter = new HtmlGreeter("OMG");
console.log(omg.greet("Kara"));
