import optimizedDimensions from "./optimizedDimensions";

test("returns width of 1280 when width is greater than 1280", () => {
  expect(optimizedDimensions({ width: 1920, height: 1080 }).width).toBe(1280);
});

test("returns height of 1280 when height is greater than 1280", () => {
  expect(optimizedDimensions({ width: 1080, height: 1920 }).height).toBe(1280);
});
