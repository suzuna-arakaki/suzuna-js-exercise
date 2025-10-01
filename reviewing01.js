// labDay ex01 
// updated code
function sumPrices (products) {
        return products.reduce((sum, product) => sum + (product.price ? product.price : 0), 0)
        // disjunctive operator　論理和演算子で省略可js↓
        // return products.reduce ((sum, product) => sum + (product.price || 0), 0)
}

// previous code
// function sumPrices(products) {
//   let sum = 0;
//   for (let i = 0; i < products.length; i++){
//        sum += products[i].price
//   }
//     return sum;
// }

console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60

