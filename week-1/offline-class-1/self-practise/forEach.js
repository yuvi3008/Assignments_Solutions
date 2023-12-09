// forEach()

const arr = [1,2,3,4,5,6,7];

// There are two ways .
//1. Either write direct function

arr.forEach(
    function(item,index){
        console.log(item);
    }
)
arr.forEach(
    function(item){
        console.log(item);
    }
)
arr.forEach(
    function(item,index){
        if(index%2==0)
        console.log(item);
    }
)


//2. Give the function as a callback.


function callBack(item){
    console.log(item * 2);
}

arr.forEach(callBack);