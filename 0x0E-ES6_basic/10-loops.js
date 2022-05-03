export default function appendToEachArrayValue(array, appendString) {
    const Array = [];
    for (const idx of array) {
      Array.push(appendString + idx);
    }
  
    return Array;
  }