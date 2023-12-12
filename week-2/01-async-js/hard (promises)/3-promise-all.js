/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

//Promise.all waits for the completion of all the promises or the first rejection.

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    })

}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000);
    })

}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },3000)
    })

}

function waitForNSeconds(n){
    return new Promise(async (resolve)=>{
    let three,two,one;
    /*
    Consider you have to wait for 10 seconds, then 
    it means 3 calls to waitThreeSecond() and one call to waitTwoSeconds().
    */
    
    three = parseInt(n/3);
    if(n%3 == 2){
        two = true;
    }else if(n%3 == 1){
        one = true; 
    }
    for(let i=0;i<three;i++){
        await waitThreeSecond();
    }
    if(two){
        await waitTwoSecond();
    } else if(one){
        await waitOneSecond();
    }
    resolve();
})
    

}


// function calculateTime(a,b,c) {
    
//     let start = Date.now();
//     const promises = [waitForNSeconds(a),waitForNSeconds(b),waitForNSeconds(c)];
//     return new Promise((resolve)=>{Promise.all(promises).then((value)=>{
//         let end = Date.now();
//         resolve( (end-start));
//         console.log(end-start);
//     })})
// }

async function calculateTime(a,b,c) {
    
    let start = Date.now();
    const promises = [waitForNSeconds(a),waitForNSeconds(b),waitForNSeconds(c)];
    let value = await Promise.all(promises);
    let end = Date.now();
    console.log(end-start);
    return end-start;
    
}

//Both of them works.


// async function test(n){
//     let s = Date.now();
//     let x = await waitForNSeconds(n);
//     let e = Date.now();
//     console.log(`Waited for ${e-s} milliseconds`);
// }

// test(10);


module.exports = calculateTime;