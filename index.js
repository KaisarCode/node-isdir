var fs = require('fs');

// Is directory
function isdir(pth) {
    return fs.lstatSync(pth).isDirectory();
}

// Export
module.exports = isdir;
