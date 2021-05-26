let obj = {"country" : ""};
obj.country = "Sri Lanka";
Object.freeze(obj); //if its freezed it wont change the object value.
console.log(obj);

obj.country = "USA";
console.log(obj);


// Ex 2
//Object Freeze function will only freeze the first level objects.

let flower = {
    name: "",
    price: {
        t1: 10,
        tr: 20
    }
}

flower.name = "Rose";
flower.price.t1 = 25;
console.log(flower); // {name : 'Rose', price {t1: 25, t2: 20 }}

Object.freeze(flower);

flower.name = "Lotus";
flower.price.t1 = 15;
console.log(flower); // {name : 'Rose', price {t1: 15, t2: 20 }} //Freeze wont work for second level values.