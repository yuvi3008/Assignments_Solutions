// This is a new problem that I have tried for myself and was not in the assignment originally.



const fs = require("fs");



function read(fileName){
    return new Promise((resolve,rejects)=>{
        fs.readFile(fileName,"utf-8",(err,data)=>{
            resolve(data);
            rejects(err);
        })
    });
}

function write(fileName,data){
    return new Promise((resolve,rejects)=>{
        data = data.split(/[\s]+/).join(" ");
        fs.writeFile(fileName,data,(err)=>{
            if(err){
                rejects("The data is not written");
            }
            else{
                resolve("The data is written");
            }
        }) 
        
    })
}




async function read_Write(){
    let data =await read(fileName);
    let status = await write(fileName,data);
    console.log(status);
}
let fileName = "1-file-cleaner-2.txt";
read_Write(fileName);