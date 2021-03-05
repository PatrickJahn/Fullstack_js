

const os = require("os");
let objct = {
    platform: os.platform(),
    osType: os.type(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    EOL: os.arch()
  }

module.exports.cpu = objct;