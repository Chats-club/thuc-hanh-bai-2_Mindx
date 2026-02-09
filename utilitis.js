// Bai 1
export function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
// Bai 2
export function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === value) {
      count += 1;
    }
  }
  console.log(`${value} thi xuat hien ${count} lan`);
}
// Bai 3
export function removeDuplicate(arr) {
  const newArr = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
// Bai 4
export function flattenArray(arr) {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flatArr.push(arr[i][j]);
    }
  }
  console.log(flatArr);
}
// Bai 5
export function isSymmetric(arr) {
  const index = Math.floor(arr.length / 2);

  for (let i = 0; i <= index - 1; i++) {
  
    if (arr[i] !== arr.at(-i - 1)) {
 
        return false
  }
 
  }
   return true
}
// Bai 6
export function findSecondLargest(arr){
    const maxFirstValue= Math.max(...arr)
    const newArr=[]
    for(let i =0;i<=arr.length-1;i++){
        if(arr[i]!==maxFirstValue){
            newArr.push(arr[i])
        }
    }
    const maxSeconValue= Math.max(...newArr)
    console.log(maxSeconValue)
    
}
// Bai 7
export function sortProductsByPrice(products){
    products.sort((a,b)=>b.price-a.price)
    console.log(products)
}
// Bai 8
export function findMostExpensiveProduct(products){
    const itemprices=[]
    for(let i = 0 ; i<=products.length-1;i++){
        itemprices.push(products[i].price)
    }
    return products.filter((item)=>item.price===Math.max(...itemprices))
 
    
   
}
// Bai 9
export function groupByType(arr) {
  const newObj = {};

  for (let i = 0; i < arr.length; i++) {
    const type = arr[i].type;

    if (!newObj[type]) {
      newObj[type] = [];
    }

    newObj[type].push(arr[i]);
  }

  return newObj;
}
