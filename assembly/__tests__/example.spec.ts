import { helloWorld } from "..";

describe("example", () => {
  it("should return 'Hello World'", () => {
    expect(helloWorld()).toStrictEqual("Hello World");
  }
)});
