const fs = require('fs');
const path = require('path');
const currentFolder = __dirname;

const bulkRename = (folder, oldName, newName) => {
    try {
        fs.readdir(folder, (err, files) => {
        for (let file of files) {
            let oldPath = path.join(currentFolder, file);
            let newPath = path.join(currentFolder, file.replaceAll(oldName, newName));
            fs.rename(oldPath, newPath, ()=>{
                console.log("Rename Successfull");
            })
        }
    })
    } catch(err) {
        console.log(err);
    }
}

bulkRename(currentFolder, 'umer', 'ali');