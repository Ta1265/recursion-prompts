/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if(n < 0){
    return null ;
  }
  if(n <= 1){
    return 1;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0 ) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0 ) {
    return 0;
  }
  if (array.length === 1) {
    if(Array.isArray(array[0])){
      return arraySum(array[0]);
    }
    return array[0];
  }

  if(Array.isArray(array[0])){
    return arraySum(array[0]) + arraySum(array.slice(1));
  }
  return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.

var isEven = function(n) {
  var num = Math.abs(n);
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num-2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0) {
    return 0;
  }
  if(n > 0) {
    return n-1 + sumBelow(n-1);
  } else {
    return n+1 + sumBelow(n+1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if(x === y ) {
    return [];
  }
  (x > y) ? x -= 1 : x += 1;
  if(x === y ) {
    return [];
  }
  return [x].concat(range(x,y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  if(exp === 1) {
    return base;
  }

  if(exp < 0) { // change exp to positive recurse and put the result under 1
    return (1 / exponent(base, (exp * -1)));
  }

  if(exp > 0 && exp % 2 === 0) { //exponent is positive and even O(nlogn) math trick = y = x^n/2 = y * y
    var y = exponent(base, exp/2);
    return y * y;
  }

  return base * exponent(base, exp-1); //exponent is positive and off, take 1 off and it will hit the even case
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if ( n<1 ) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  return(powerOfTwo(n/2));

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string[0] === undefined) {
    return '';
  }
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.trim().toLowerCase()
  if ( string.length <= 1) {
    return true;
  }
  if( string[0] !== string[string.length-1] ){
    return false;
  }
  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    return -modulo(-x, y);
  }
  if(y < 0) {
    return modulo(x, -y);
  }
  if(x < y) {
    return x;
  }
  return modulo (x - y, y);
}

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 1) {
    return x;
  }
  if (y < 0) {
    return -multiply(x, -y);
  }
  return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if( y === 0) {
    return NaN;
  }
  if( x < y) {
    return 0;
  }
  if( x === y) {
    return 1;
  }
  if ( x < 0 && y > 0) {
    return -divide(-x, y);
  }
  if ( y < 0 && x > 0) {
    return -divide(x, -y);
  }
  if(x < 0 && y < 0) {
    return divide(-x, -y);
  }

  var ans = 1 + divide(x-y, y);

  return ans;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if ( x < 0 || y < 0) {
    return null;
  }
  if (x < y) { //swap them
    return gcd(y, x);
  }
  if (y !== 0) {
    return gcd(y, x % y);
  }
  return x;


};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] === undefined && str2[0] === undefined){
    return true;
  }
  if (str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1))){
    return true;
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str[0] === undefined) {
    return [];
  }
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array[0] === undefined) {
    return [];
  }
  var arr = reverseArr(array.slice(1));
  arr.push(array[0]);
  return arr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length < 1) {
    return [];
  }
  var arr = buildList(value, length-1);
  arr.push(value);
  return arr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var val = '';
  if (n < 1){
    return [];
  }
  if (n % 3 === 0 ) {
    val += 'Fizz';
  }
  if (n % 5 === 0) {
    val += 'Buzz';
  }
  if ( val === '') {
    val = n.toString();
  }
  var arr = fizzBuzz(n-1);
  arr.push(val);
  return arr;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    return countOccurrence(array.slice(1), value) + 1;
  } else {
    return countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array[0] === undefined) {
    return [];
  }
  var arr = rMap(array.slice(1), callback);
  arr.unshift(callback(array[0]));
  return arr;
};
// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count;
  (key in obj) ? count = 1 : count = 0;
  for(i in obj) {
    if(typeof obj[i] === 'object') {
      count += countKeysInObj(obj[i], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (key in obj) {
    if (obj[key] === value) {
      count++;
    }
    if(typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;

};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (obj[oldKey] !== undefined) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
  for (key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if(n < 1) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  var arr = fibonacci(n - 1);
  arr.push(arr[n - 2] + arr[n - 1]);
  return arr;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0) {
    return null;
  }
  if(n === 0) {
    return 0;
  }
  if (n === 1 || n == 2) {
    return 1;
  }
  return nthFibo(n-1) + nthFibo(n-2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if(array[0] === undefined) {
    return [];
  }
  var arr = capitalizeWords(array.slice(1));
  arr.unshift(array[0].toUpperCase());
  return arr;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if(array[0] === undefined) {
    return [];
  }
  var arr = capitalizeFirst(array.slice(1));
  arr.unshift(array[0][0].toUpperCase()+array[0].slice(1));
  return arr;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;

};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if(array === undefined) {
    return null;
  }
  var flatarr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatarr = flatarr.concat( flatten(array[i]) );
    } else {
      flatarr.push(array[i]);
    }
  }
  return flatarr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str[0] === undefined) {
    return obj;
  }
  if (obj === undefined) {
    obj = {};
  }
  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]] += 1;
  }
  return letterTally(str.slice(1), obj);

};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list[0] === undefined) {
    return list;
  }
  var i = 0;
  while (list[0] === list[i]) {
    i++;
  }
  var arr = compress(list.slice(i));
  arr.unshift(list[0]);
  return arr;

};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  console.log(array);
  if (array[0] === undefined) {
      return
  }
  array[0].push(aug);
  augmentElements(array.slice(1), aug);
  return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
//[2,0,0,0,1,4]
var minimizeZeroes = function(array) {
  if (array[0] === undefined) {
    return array;
  }
  var i = 1;
  if (array[0] === 0) {
    while (array[0] === array[i]) {
      i++;
    }
  };
  var arr = minimizeZeroes(array.slice(i));
  arr.unshift(array[0]);
  return arr;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array[0] === undefined) {
    return array;
  }
  if (array.length % 2 === 0) { //all even indexes are positive
    var val = array[0] < 0 ? -array[0] : array[0];
  } else { // odd indexes
    var val = array[0] < 0 ? array[0] : -array[0];
  }
  var arr = alternateSign(array.slice(1));
  arr.unshift(val);
  return arr;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var nums = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  if (str[0] === undefined) {
    return '';
  }
  return nums[str[0]] !== undefined ? nums[str[0]] + numToText(str.slice(1)) : str[0] + numToText(str.slice(1));

};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var count = 0;
  if(node === undefined) { node = document.documentElement; }

  if(node.tagName === tag.toUpperCase()) { count++; }

  if(node.childNodes !== undefined) {
    for(var i = 0; i < node.childNodes.length; i++) {
      count += tagCount(tag, node.childNodes[i]);
    }
  }
  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined && max === undefined) {
    min = Math.floor((array.length) / 4);
    max = Math.floor(array.length / 2) + min;
  }
  if (array[min] === target) { return min; }
  if (array[max] === target) { return max; }
  if (min >= max) { return null;}

  if (array[min] > target) {
    max = min + 1;
    min = Math.floor(min / 2) - 1; // if max is 0 sets min to inifinity
  }
  if (array[max] < target) {
    min = max - 1;
    max = Math.floor((array.length + max) / 2) + 1;
  }
  return binarySearch(array, target, min+1, max-1);

};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {

  var merge = function(arr, p, q, r) {
    var ans = [];
    var Q = q; // placeholder
    while (p < Q && q < r) {
      if(arr[p] < arr[q]) {
        ans.push(arr[p]);
        p++;
      } else {
        ans.push(arr[q]);
        q++
      }
    }
    while (p < Q) { //leftovers for uneven arrays
      ans.push(arr[p]);
      p++;
    }
    while (q < r) {
      ans.push(arr[q]);
      q++
    }
    return ans;
  };

  if(array.length === 0) { return []; }
  if(array.length === 1) { return [array[0]]; }

  var p = 0
  var r = array.length;
  var q = Math.floor(r/2);

  var left = mergeSort(array.slice(p, q));
  var right = mergeSort(array.slice(q, r+1));
  var twoSortedArrays = left.concat(right);

  return merge(twoSortedArrays, p, q, r);
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {

  if (!Array.isArray(input)) {
    var obj = {};
    for (key in input) {
      if(typeof(input[key]) === 'object' || Array.isArray(input[key])){
        obj[key] = clone(input[key]);
      } else {
        obj[key] = input[key];
      }
    }
    return obj;
  } else {
    var arr = [];
    for (var i = 0; i < input.length; i++) {
      if(typeof input[i] === 'object' || Array.isArray(input[i])) {
        arr[i] = clone(input[i]);
      } else {
        arr[i] = input[i];
      }
    }
    return arr;
  }
};
