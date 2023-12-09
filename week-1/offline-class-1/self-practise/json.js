const prod = '{"name":"lipstick","price":200,"units":20}';
 // 

 converted = JSON.parse(prod)
console.log(converted);
console.log(converted.name);


console.log(Object.keys(converted));

console.log(Object.values(converted));

console.log(Object.entries(converted));

console.log(Object.hasOwnProperty("name"));
console.log(Object.hasOwnProperty("class"));

let obj = Object.assign({},converted, {clas: "Job"})  // Returns a new object after assigning that property 
console.log(obj);

console.log(converted);

converted= JSON.stringify(prod)
console.log(converted);
console.log(converted[7]);

