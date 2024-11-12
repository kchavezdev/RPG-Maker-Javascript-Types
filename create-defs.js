const fs = require("fs");
const path = require("path");
const combiner = require("./combine-definitions")

fs.writeFileSync(path.resolve("./definitions/rmmv-types.d.ts"), combiner.getDefs('mv'));
fs.writeFileSync(path.resolve("./definitions/rmmz-types.d.ts"), combiner.getDefs('mz'));
