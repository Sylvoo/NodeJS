const fs = require('fs');

data = "kupa";

fs.writeFile("file.txt",data,(err) => {
    if(err) console.log(err);
    else {
        console.log("File written succesfully")
        console.log(fs.readFileSync("file.txt", "utf8"))
    }
})