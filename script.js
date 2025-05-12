function firstWord(str) {
  str = str.trimStart(); // Remove leading spaces
  const spaceIndex = str.indexOf(' ');
  if (spaceIndex === -1) {
    return str;
  }
  return str.slice(0, spaceIndex);
}

// Example usage:
console.log(firstWord('see and stop'));    // Output: 'see'
console.log(firstWord(' Hello World!'));   // Output: 'Hello'
console.log(firstWord('12345'));           // Output: '12345'
console.log(firstWord(''));                // Output: ''
