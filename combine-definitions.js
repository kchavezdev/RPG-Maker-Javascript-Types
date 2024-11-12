const fs = require("fs")
const path = require("path")

/**
 * 
 * @param  {...string} files 
 */
function combineFiles(...files) {
    let finalFile = '';
    for (const file of files) {
        finalFile += fs.readFileSync(path.resolve(file), 'utf-8');
    }
    return finalFile;
}

/**
 * 
 * @param {'mz' | 'mv'} type 
 */
function getDefs(type) {
    if (type === 'mz') {
        return combineFiles("./definitions/pixi-5.2.4.d.ts", "./definitions/rpgm-mz.d.ts", "./definitions/rpgm-common.d.ts");
    }
    else if (type === 'mv') {
        return combineFiles("./definitions/pixi-4.5.4.d.ts", "./definitions/rpgm-mv.d.ts", "./definitions/rpgm-common.d.ts");
    }
    else {
        return '';
    }
}

module.exports = {
    combineFiles,
    getDefs
}
