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
