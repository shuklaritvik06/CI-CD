const { Hello } = require("./main");
test("Prints Greet Message", () => {
  expect(Hello("Hello World!")).toBe("Hello World!");
});
