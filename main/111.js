/**
 * Created by root on 7/13/17.
 */

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


var targetObject = loadAllItems()
function matchh (inputs,targetObject)
{
  var example = [{}]
  var goodIfo = []
  var count = 1

  for(var i = 0; i<inputs.length;i++)
  {
    for(var j = 0; j<targetObject.length; j++)
    {
      if(inputs[i]==targetObject[j].barcode)
      {
        example[i] = {barcode: "", name: "", unit: "", price: 0.00}
        example[i].barcode = targetObject[j].barcode
        example[i].name = targetObject[j].name
        example[i].unit = targetObject[j].unit
        example[i].price = targetObject[j].price
      }
    }
  }
