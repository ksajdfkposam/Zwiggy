const fs =require("fs");
const q="Make me happy";
fs.writeFile("aww.txt",q,()=>{
    console.log("done");
});