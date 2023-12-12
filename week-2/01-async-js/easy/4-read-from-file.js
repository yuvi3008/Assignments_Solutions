const { rejects } = require("assert");
const fs = require("fs");
 //Creates a new file if there exist none.
function write(){
    return new Promise(function(resolve,reject){
        fs.writeFile("4-write-to-file.txt","Hi I am writing to this file",(err)=>{
            if(err){
                reject(err);
            } else{
                resolve();
            }
        })
    })
}

function rejected(err){
    console.log(err);
}

function resolved(){
    console.log("File has been written");
}

write().then(resolved).catch(rejected);