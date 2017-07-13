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
var inputs=[
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
  var items =[];
  var item={};
  item.barcode=bar;
  item.count=0;

  for (var i=0;i<inputItems.length;i++){
    var bar = inputs[i];
    if (item.barcode==bar){
      item.count+=1;
    }else if (item.barcode!=bar){
      var item={};
      item.barcode=bar;
      item.count=1;
      items.push(item);
    }
  }
  return items;
}

var items=barCount(inputs);
// console.log(items);

function outputi(items) {
  var lai=loadAllItems();
  for(var i=0;i<items.length;i++) {
    for (var j = 0; j < lai.length; j++) {
      var item = items[i];
      if (item.barcode == lai[j].barcode) {
        item.name = lai[j].name;
        item.unit = lai[j].unit;
        item.price = lai[j].price;
        item.subtotal = item.price*item.count;
      }
    }
  }
return items;
}
var outputItems=outputi(items);
// console.log(outputi(items));

function n(outputItems) {
  var total=0;
  for (var i=0 ;i<outputItems.length;i++){
  total += outputItems[i].subtotal;
  }
   return total;
}
// console.log(n(outputItems));
var total=n(outputItems);

function printReceipt(inputs) {
  var items=barCount(inputs);
  var outputItems=outputi(items);
  var total=n(outputItems);
  var content = "***<"+"没钱赚商店>收据"+"***\n";
  for (var i=0;i<items.length;i++) {
    content += "名称："+items[i].name+"，数量："+items[i].count+items[i].unit+"，单价："+items[i].price.toFixed(2)+"(元)，小计："+items[i].subtotal.toFixed(2)+"(元)\n"
  }
   content += "----------------------\n总计：";
   content += total.toFixed(2);
   content +="(元)\n**********************";
  console.log(content);
  return content;
}

printReceipt(inputs);
