import { HtmlGreeter } from "../src/HtmlGreeter";

describe("returns greeting inside tag brackets", () => {
  test("test tag with no tagline", () => {
    const omg: HtmlGreeter = new HtmlGreeter("OMG");
    expect(omg.greet("Maddie")).toBe("<h1>OMG, Maddie!</h1>");
  });
  test("test tag with default tagline written in", () => {
    const omg: HtmlGreeter = new HtmlGreeter("What's good", "h1");
    expect(omg.greet("Fezco")).toBe("<h1>What's good, Fezco!</h1>");
  });
  test("test tag with non default tagline", () => {
    const omg: HtmlGreeter = new HtmlGreeter("Wow", "p");
    expect(omg.greet("Nate")).toBe("<p>Wow, Nate!</p>");
  });
});
