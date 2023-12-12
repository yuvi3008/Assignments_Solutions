const fs = require("fs");

// Using promises

function callback(data){
    console.log(data);
}
function callThis(){
    return new Promise((resolve)=>{
        fs.readFile("File_to_be_read.txt","utf-8",(err,data)=>{
            resolve(data);
        })
    })
}


// Adding code to make the promis slow.
callThis().then(callback);

//Using callback

function callback_func(fn){
    fs.readFile("3-read-from-file.txt","utf-8",(err,data)=>{
            fn(data);
    });
}


callback_func(callback);


// async await helps us when we need to wait for a function to get resolved if it's results depend on the returned value.

async function async_call(){
    let ret = await callThis();
    console.log(ret);
}


async_call();