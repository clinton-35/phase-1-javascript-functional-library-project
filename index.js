function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
    // If it is, loop through each element of the array
    for (let i = 0; i < collection.length; i++) {
    // Call the callback function with the current element as an argument
    callback(collection[i]);
    }
    } else {
    // If the collection is not an array, assume it is an object
    // Loop through each property of the object
    for (let key in collection) {
    // Call the callback function with the current value of the property as an argument
    callback(collection[key]);
    }
    }
    // Return the original collection
    return collection;
}
function myMap(collection, callback) {
    // Create a new array to hold the transformed values
    const newArray = [];
        
    // Iterate over each value in the collection
    for (let i = 0; i < collection.length; i++) {
        // Call the callback function with the current value and store the result
        const result = callback(collection[i]);
          
        // Add the result to the new array
        newArray.push(result);
    }
        
    // Return the new array
    return newArray;
}
function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    // If no start value is provided, use the first element of the collection as the start value
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  
    return acc;
}
function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
    return undefined;
}
function myFilter(collection, predicate) {
    const filtered = [];
    for (const value of collection) {
      if (predicate(value)) {
        filtered.push(value);
      }
    }
    return filtered;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  function myFirst(array, n = 1) {
    if (n <= 0) {
      return []
    } else if (n > array.length) {
      return array
    } else if (n === 1) {
      return array[0]
    } else {
      return array.slice(0, n)
    }
  }
  function myLast(array, n=1) {
    if(n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }
  function mySortBy(array, callback) {
    // create a copy of the original array
    const newArray = [...array];
    // sort the new array using the callback function
    newArray.sort((a, b) => callback(a) - callback(b));
    // return the sorted array
    return newArray;
  }
  

