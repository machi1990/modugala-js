const cwd = process.cwd();
const path = require("path");
const Module = require("module");
const nativeRequire = Module.prototype.require;
const config = require(path.join(cwd, "package"))["modulegala"];

const lookUpTable = Object.keys(config).reduce((acc, alias) => {
  return {
    ...acc,
    [alias]: path.join(cwd, config[alias])
  };
}, {});

Module.prototype.require = function(modulePath) {
  for (const moduleAlias in lookUpTable) {
    const moduleLocation = lookUpTable[moduleAlias];
    const modulePathParts = modulePath.split(path.sep);
    if (modulePathParts[0] !== moduleAlias) continue;
    if (modulePathParts.length === 1)
      return nativeRequire.call(this, moduleLocation);
    return nativeRequire.call(
      this,
      path.join(moduleLocation, modulePathParts.slice(1).join("/"))
    );
  }

  return nativeRequire.call(this, modulePath);
};
