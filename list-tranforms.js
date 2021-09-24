const _ = {
    each: function (list, callbackFn) {
        if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
                callbackFn(list[i], i, list);
            }
        } else {
            for (let prop in list) {
                callbackFn(list[prop], prop, list);
            }
        }
    }
};

_.filter = function (arr, cb) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr === true)) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

_.from = arr => {
    return Array.prototype.slice.call(arr);
    /*
        const newArr = [];
        for(let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    */
}

_.forEachRight = function(collection, cb) {
    // Loops through collection from right to left calling the passed function as cb
    let colLength = collection.length - 1;
    for(let i = colLength; i >= 0; i--) {
      cb(collection[i], i, collection);
    }
  };
  
  /* console.log([1,2].length-1) */
  const arr = [1,2,3];
  
  _.forEachRight(arr, value => console.log(value));;
  _.reduce = function(collection, callback, accumulator) {
    let memo;
    // If no accumulator is passed to reduce, set the accumulator to equal the first element of the collection
    if (accumulator === undefined) {
      memo = collection[0];
      for(let i = 1; i < collection.length; i++) {
        memo = callback(collection[i], memo);
      }
    } else {
    // Else, set memo to equal the passed accumulator
      memo = accumulator;
      for(let i = 0; i < collection.length; i++) {
        memo = callback(collection[i], memo);
      }
    }
    return memo;
  };
