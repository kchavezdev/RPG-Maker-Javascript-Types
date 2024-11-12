const fs = require("fs");
const path = require("path");
const combiner = require("./combine-definitions")

fs.writeFileSync(path.resolve("./dist/rmmv-types.d.ts"), combiner.getDefs('mv').replaceAll('\nexport, \ndeclare'));
fs.writeFileSync(path.resolve("./dist/rmmz-types.d.ts"), combiner.getDefs('mz').replaceAll('\nexport', '\ndeclare'));
