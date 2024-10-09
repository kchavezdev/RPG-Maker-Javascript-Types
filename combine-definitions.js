const fs = require("fs")
const path = require("path")

/**
 * 
 * @param {string} outputPath 
 * @param  {...string} files 
 */
function combineFiles(outputPath, ...files) {
  let finalFile = '';
  for (const file of files) {
    finalFile += fs.readFileSync(path.resolve(file), 'utf-8');
  }
  fs.writeFileSync(outputPath, finalFile);
}

combineFiles("./dist/rmmv-types.d.ts", "./definitions/pixi-4.5.4.d.ts", "./definitions/rpgm-mv.d.ts", "./definitions/rpgm-common.d.ts");
combineFiles("./dist/rmmz-types.d.ts", "./definitions/pixi-5.2.4.d.ts", "./definitions/rpgm-mz.d.ts", "./definitions/rpgm-common.d.ts");
