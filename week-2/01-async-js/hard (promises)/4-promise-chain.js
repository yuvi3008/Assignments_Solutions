/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

/*
Promise chain
Executes one by one 
(synchronous).
● Result of one execution 
can be passed to the 
next step.
● Execution time to 
fulfill all the promise 
is comparatively high.
● Chaining after an error 
is possible.

Promise.all
● Executes in parallel 
(asynchronous).
● Result of one promise 
cannot be passed to an 
another promise.
● Parallel execution 
guarantees in reduced 
time.
● It rejects with the 
reason of the first 
promise that rejects.


*/

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
        },3000);
    })

}

async function calculateforNseconds(n){   
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
        // resolve(`Resolved for ${n} seconds`);
        resolve();
    })
    

}
async function calculateTime(a,b,c) {

    let start = Date.now();
    await calculateforNseconds(a)
    .then((resolve)=>{
        return calculateforNseconds(b);
    })
    .then(()=>{
        return calculateforNseconds(c);
    })
    end = Date.now();
    return end - start;
}





 console.log(calculateTime(3,4,1));

module.exports = calculateTime;