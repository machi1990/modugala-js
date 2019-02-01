const maths = require("./maths");
const { expect } = require("chai");

describe("#modulegala", () => {
  require("./");

  context("module's paths not in look up table", () => {
    it("loads module using native require", () => {
      // GIVEN
      const modulePath = "fs";
      // WHEN
      const fs = require("fs");
      // THEN
      expect(fs).to.not.equal(null);
    });
  });

  context("module's path matches alias in confuguration", () => {
    it("loads the module using modulegala aliasing system", () => {
      // GIVEN
      const modulePath = "@maths";
      // WHEN
      const loadedModule = require(modulePath);
      // THEN
      expect(loadedModule.addition).to.eql(maths.addition);
    });
  });

  context("module's path starts with an alias that is in confuguration", () => {
    it("loads the module using modulegala aliasing system", () => {
      // GIVEN
      const modulePath = "@maths/operators/division";
      // WHEN
      const loadedModule = require(modulePath);
      // THEN
      expect(loadedModule).to.eql(maths.division);
    });
  });
});
