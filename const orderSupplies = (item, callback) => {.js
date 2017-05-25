const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

 const deliveryTime = Math.random()*3000 + 1000
  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

   if (foundItem) {
      callback(foundItem);
    }

 }, deliveryTime )
}

var paintFound = false;
orderSupplies('paint', print());
orderSupplies('brush', print());

function print(tool) {
  if (tool === 'paint') {
    console.log(`${tool.item} delivered! Time to ${tool.action()}`);
    paintFound = true;
  } else if (tool.item === 'brush') {
    while (!paintFound){ }
    console.log(`${tool.item} delivered! Time to ${tool.action()}`);
  }
}

function orderBrush(paint) {
    orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
    console.log(`${paint.item} delivered! Time to ${paint.action()}`)
}