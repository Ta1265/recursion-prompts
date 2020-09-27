var binarySearch = function(array, target) {
  //in order to not use min and max as paremeters, im keeping track of min index(returns index not val);
  if(target < array[0] || target > array[array.length-1]) {
    return null;
  }

  var max = Math.floor(array.length * .75);
  var min = Math.floor(array.length * .25);
  if (min === max) { return array[min] === target ? min : null; }//min is 0 search ends here

  if(array[min] < target && array[max] > target){ // it lies between them

    var result = binarySearch(array.slice(min+1, max), target); //exclude current max and min
    return result !== null ? min + 1 + result : null;
  }
  if (array[min] >= target) { // it lies behind min
    max = min;
    min = 0;
    var result = binarySearch(array.slice(0, max+1), target); // include min
    return result !== null ? min + result: null;
  }
  if (array[max] <= target) { // it lies behind max
    min = max;
    var result = binarySearch(array.slice(max), target); //include max
    return result !== null ? min + result : null;
  }
};


var testarr = [0,1,2,3,4,5,6]
console.log('answers');
console.log(binarySearch(testarr, 0));
console.log(binarySearch(testarr, 1));
console.log(binarySearch(testarr, 2));
console.log(binarySearch(testarr, 3));
console.log(binarySearch(testarr, 4));
console.log(binarySearch(testarr, 5));
console.log(binarySearch(testarr, 6));
console.log(binarySearch(testarr, 7));


