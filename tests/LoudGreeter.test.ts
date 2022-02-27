import { LoudGreeter } from "../src/LoudGreeter";

describe("returns the composed greeting based on the greeting property and name parameter", () => {
  test("greeting set from parameter", () => {
    const aye: LoudGreeter = new LoudGreeter("Aye");
    expect(aye.greet("Kat")).toBe("Aye, Kat!!!");
  });
  test("greeting set from parameter", () => {
    const cool: LoudGreeter = new LoudGreeter("Cool");
    cool.addVolume();
    expect(cool.greet("Cassie")).toBe("Cool, Cassie!!!!");
  });
  test("greeting set from parameter", () => {
    const whatsGood: LoudGreeter = new LoudGreeter("What's Good");
    whatsGood.addVolume();
    whatsGood.addVolume();
    whatsGood.addVolume();
    whatsGood.addVolume();
    expect(whatsGood.greet("Fezco")).toBe("What's Good, Fezco!!!!!!!");
  });
});
