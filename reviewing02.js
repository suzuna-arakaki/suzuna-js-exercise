// labDay ex02
// updated code


// previous code
// function filterByCategory(products, category) {
//   const result = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].category === category){
//       result.push(products[i]);
//     }
//     return result;
//   }
// }

console.log(filterByCategory(
        [{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }], 'Fruit'))
        // [{ name: 'Apple', category: 'Fruit' }]