function customSort(arr) {
    let valuesMap = mapValuesToOccurrences(arr)
    // console.log(valuesMap);
    const storeArray = sortByOccurrences(valuesMap)
    // console.log(storeArray);
    const newArr = groupValuesByOccurrences(storeArray)
    printResult(newArr);
}

function mapValuesToOccurrences(arr) {
    let store = {};
    for (let i = 0; i < arr.length; i++) {
        if (store[arr[i]]) {
            store[arr[i]]++;
        } else {
            store[arr[i]] = 1;
        }
    }
    return store
}

function sortByOccurrences(arr) {
  let entries = Object.entries(arr).sort((a, b) => a[1] == b[1] ? a[0] > b[0] : a[1] > b[1])
  return entries
}

function groupValuesByOccurrences(dict) {
  let flattenedResult = []
    for (let j = 0; j < dict.length; j++){
      let value = dict[j][0]
      let occurrences = dict[j][1]
      for (var i = 0; i < occurrences; i++) {
        flattenedResult.push(value)
      }
    }
    return flattenedResult
}

function fillArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}

function printResult(arr) {
    const joinedArray = arr.join('\n') 
    console.log(joinedArray);
    // for(let i = 0; i < joinedArray.length; i++){
      // console.log(joinedArray[i]);
    // }
}

// customSort([-1,-1, -1, 1,2,3,4,5,6,7,8,8,2,3,1,1,9,3,3,3]);