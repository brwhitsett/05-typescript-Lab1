import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("returns the composed greeting based on the greeting property and name parameter", () => {
  test("greeting set from parameter", () => {
    const yo: JavaScriptGreeter = new JavaScriptGreeter("Yo");
    expect(yo.greet("Sam")).toBe(`"console.log('Yo, Sam!')"`);
  });
  test("greeting set from parameter", () => {
    const yo: JavaScriptGreeter = new JavaScriptGreeter("Sup");
    expect(yo.greet("Cassie")).toBe(`"console.log('Sup, Cassie!')"`);
  });
});
