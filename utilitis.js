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
      return false;
    }
  }
  return true;
}
// Bai 6
export function findSecondLargest(arr) {
  const maxFirstValue = Math.max(...arr);
  const newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== maxFirstValue) {
      newArr.push(arr[i]);
    }
  }
  const maxSeconValue = Math.max(...newArr);
  console.log(maxSeconValue);
}
// Bai 7
export function sortProductsByPrice(products) {
  products.sort((a, b) => b.price - a.price);
  console.log(products);
}
// Bai 8
export function findMostExpensiveProduct(products) {
  const itemprices = [];
  for (let i = 0; i <= products.length - 1; i++) {
    itemprices.push(products[i].price);
  }
  return products.filter((item) => item.price === Math.max(...itemprices));
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
// Bai 10
export function isSubset(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      continue;
    }
    return false;
  }
  return true;
}

// Bai 11
export function findMaxKey(obj) {
  return Object.entries(obj).reduce(
    (maxKey, [key, value]) => (value > obj[maxKey] ? key : maxKey),
    Object.keys(obj)[0],
  );
}

// Bai 12
function mergeObjectsSumValues(obj1, obj2) {
  return Object.keys({ ...obj1, ...obj2 }).reduce((acc, key) => {
    acc[key] = (obj1[key] || 0) + (obj2[key] || 0);
    return acc;
  }, {});
}

//Bai 13
export function countElements(arr) {
  return arr.reduce((obj, ele) => {
    obj[ele] = (obj[ele] || 0) + 1;
    return obj;
  }, {});
}

// Bai 14
export function cleanObject(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] == null) {
      delete obj[key];
    }
  });
  return obj;
}
// Bai 15
export function hasDuplicate(arr) {
  return arr.reduce((acc, cur) => (acc === cur ? true : false));
}

//  Bai 16
export function sumByGroup(arr, key) {
  return arr.reduce((acc, cur) => {
    const group = cur[key]; // lấy giá trị để nhóm

    if (!acc[group]) {
      acc[group] = 0;
    }

    acc[group] += cur.price; // cộng price

    return acc;
  }, {});
}

// Bai 17
export function uniqueValues(arr1, arr2) {
  const arr = [...arr1, ...arr2];

  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

//Bai 18
export function isPermutation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2.at(-i - 1)) {
      continue;
    }
    return true;
  }
}

//Bai 19
export function findLongestString(arr) {
  return arr.reduce(
    (longStr, string) => (longStr.length > string.length ? longStr : string),

    "",
  );
}

// Bai 20
export function intersection(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  const result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (arr1.includes(newArr[i]) && arr2.includes(newArr[i])) {
      result.push(newArr[i]);
    }
  }
  return result;
}

//Bai 21

export function filterByMinValue(arr, minValue) {
  return arr.filter((item) => item < minValue);
}

//Bai 22
export function findLongestValue(obj) {
  return Object.values(obj).reduce(
    (acc, item) => (acc.length > item.length ? acc : item),
    "",
  );
}

// *Bai 23
export function groupByFirstLetter(arr) {
  return arr.reduce((result, cur) => {
    const firstLetter = cur[0];

    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }

    result[firstLetter].push(cur);

    return result;
  }, {});
}
/** Bai 24 */
export function getAdults(people) {
  return people.filter((item) => item.age > 18);
}

// Bai 25
export function convertToArray(obj) {
  return Object.entries(obj);
}

// Bai 27
export function sumByKey(arr, key) {
  return arr.reduce((total, cur) => total + cur[key], 0);
}

// Bai 28
export function countWords(str) {
  const cleanStr = str.trim();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  console.log(count + 1);
}
// Bai 29
export function findMinKey(obj) {
  return Object.keys(obj).reduce((minKey, key) =>
    obj[minKey] < obj[key] ? minKey : key,
  );
}
