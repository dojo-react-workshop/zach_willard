const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

 const deliveryTime = Math.random()*7000 + 0

  return new Promise((resolve,reject) => {
    
    setTimeout( () => {
      const foundItem = warehouse.find((obj) => obj.item === item);

     if (foundItem) {
        resolve(foundItem);
      }
    }, deliveryTime);

  })
}

function printItem(item) {
  console.log(`${item.item} delivered! Time to ${item.action()}`);
}

let brushPromise = orderSupplies('brush'); // starts the fetching of brush
orderSupplies('paint')  // starts the fetching of paint
  .then(function (item){ // once paint is ready
    printItem(item); //prints paint when ready
    return brushPromise;
  })
  .then(function (item){ // once brush is ready
    printItem(item) // prints brush when ready
  });

// var paintReceived = false;
// var paint = null;
// orderSupplies('paint', (item) => {
//   printItem(item);
//   paintReceived = true;

//   if (paint) {
//     printItem(brush);
//   }
// })

// orderSupplies('brush', (item) => {
//   if (paintReceived) {
//     printItem(item);
//   } else {
//     brush = item;
//   }
// });
// Promise --- pending >> to Resolved, reject --- never go backwards in state 



// receipt 