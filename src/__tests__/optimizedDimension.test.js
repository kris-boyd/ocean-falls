import optimizedDimensions from "../optimizedDimensions";

describe("optimizedDimensions", () => {
  describe.skip("when width and height are less than size limit", () => {});

  describe.skip("when width and height are great than size limit", () => {});

  describe.skip("when width is zero", () => {});

  describe.skip("when height is zero", () => {});

  describe("when width is greater than 1280", () => {
    it("returns width 1280", () => {
      const dimensions = { width: 1920, height: 1080 };

      const result = optimizedDimensions(dimensions);

      expect(result.width).toBe(1280);
    });
  });

  describe("when height is greater than 1280", () => {
    it("returns height 1280", () => {
      const dimensions = { width: 1080, height: 1920 };

      const result = optimizedDimensions(dimensions);

      expect(result.height).toBe(1280);
    });
  });
});
