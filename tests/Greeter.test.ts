import { Greeter } from "../src/Greeter";

describe("returns the composed greeting based on the greeting property and name parameter", () => {
  test("greeting set from parameter", () => {
    const hey: Greeter = new Greeter("Hey");
    expect(hey.greet("Brittany")).toBe("Hey, Brittany!");
  });
  test("greeting set from parameter", () => {
    const hey: Greeter = new Greeter("What's up");
    expect(hey.greet("Andrew")).toBe("What's up, Andrew!");
  });
});
