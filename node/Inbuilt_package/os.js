const os=require("os");
console.log("total",os.totalmem());
console.log("User Info", os.userInfo());
console.log("Platform", os.platform());
console.log("version", os.version());
console.log("version", os.cpus().length);