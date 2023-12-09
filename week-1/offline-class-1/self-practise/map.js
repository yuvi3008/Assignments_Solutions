//map()

//Method 1

let arr = [3,4,5,2,3,4];

let arr_new = arr.map(
    function(item){
        return item* 3;
    }
)
console.log(arr_new);

//Method 2
function callBack(item){
    return item*2;
}

arr_new = arr.map(callBack);
console.log(arr_new);

//Method 3

arr_new = arr.map(function(val,index){
    if(index%2!=0){
        return val*3;
    }
    else{
        return val*2;
    }
})

console.log(arr_new);