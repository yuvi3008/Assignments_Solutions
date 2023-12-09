class Product{
    static pro = 8;
    constructor(type,cost,units){
        this.type = type;
        this.cost = cost;
        this.units = units;
       
    }

    static details(){
        console.log(`The total number of products in the system are`);
    }

    getDetails(){
        console.log(`Product cost: ${this.cost} \nUnits available : ${this.units}`);
    }
}

lipstick = new Product("lipstick",500,10);
lipstick.getDetails();
// lipstick.details(); throws error
Product.details();
console.log(Product.pro);