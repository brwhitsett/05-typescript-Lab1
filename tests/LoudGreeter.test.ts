import { LoudGreeter } from "../src/LoudGreeter";

describe("returns the composed greeting based on the greeting property and name parameter", () => {
  test("greeting set from parameter", () => {
    const yo: LoudGreeter = new LoudGreeter("Hah", "!");
    expect(yo.greet("Kat")).toBe("Hah, Kat!!");
  });
  test("greeting set from parameter", () => {
    const yo: LoudGreeter = new LoudGreeter("Coo", "!");
    yo.addVolume();
    expect(yo.greet("Cassie")).toBe("Coo, Cassie!!!");
  });
});
