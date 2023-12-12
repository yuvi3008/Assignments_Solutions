
const fs = require("fs");

//Make sure to update the file before running this code.
 // Using both the functions inside the same promise
function clean_using_one_promise(){
    return new Promise((resolve,rejects)=>{
        fs.readFile("1-file-cleaner.txt","utf-8",(err,data)=>{

            // Remove the spaces from the incoming file.
            data = data.split(/[\s]+/); // Split if more than one space encountered. 
            // if we change the + to * , all the characters will be separated by a space since it considers "" to be a valid split condition(i.e 0 spaces.)
            // Equivalent to splitting on " ","  ","   ","    ","     ","      " and so on.

            data = data.join(" ");
            console.log(data);
            fs.writeFile("1-file-cleaner.txt",data,(err)=>{
                if(err){
                    rejects(err);
                }
                else{
                    resolve();
                }
            })
        })
    })
}


function error(err){
    console.log("Error writing to the file.");
}

function wrote(){
    console.log("Written");
}

clean_using_one_promise().then(wrote).catch(error);


