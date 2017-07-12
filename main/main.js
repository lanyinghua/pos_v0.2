'use strict';
function loadAllItems() {
  return [
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: '雪碧',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: '苹果',
      unit: '斤',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: '荔枝',
      unit: '斤',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: '电池',
      unit: '个',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: '方便面',
      unit: '袋',
      price: 4.50
    }
  ];
}
var ldAllItems = loadAllItems();
// console.log(ldAllItems)
var inputItems=[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
function barCount(inputItems) {
  var outputItems = [];
  for (var i = 0; i < inputItems.length; i++) {
    var item = inputItems[i]
    if (!outputItems[item]) {
      outputItems[item] = {};
      outputItems[item].barcode = inputItems[i];
      outputItems[item].count = 1;
    } else {
      outputItems[item].count += 1;
    }
  }
  return outputItems;
}

var outputItems=barCount(inputItems);
// console.log(outputItems);


function nameUnitPrice(ldAllItems,inputItems) {
  var ldAllItems = loadAllItems();
  // console.log(ldAllItems.length);
  for(var i =0;i<ldAllItems.length;i++) {
    var outputItems=barCount(inputItems);
    var item = inputItems[i];
    if (item==ldAllItems[i][0]){
      outputItems.push(ldAllItems[i]);
    }
  }
  return outputItems;
}

var outputItems=nameUnitPrice(ldAllItems,inputItems);
console.log(outputItems);




