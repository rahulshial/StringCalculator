const addV2 = (inputString) => {

  if(inputString.length < 1) return 0     // return 0 if empty input string

  const filteredString = inputString
    .replace(/[^0-9-]/g, ',')             // Remove anything that does not look like a number
    .split(',')                           // Split values with a common delimiter
    .filter(Number)                       // return everything that looks like a number
    .filter(n => n <= 1000)               // ignore everything > 1000

  if(filteredString.length < 1) return 0  // no valid numbers in input string

  const numbers = filteredString
    .map((n) => parseInt(n, 10))          // Convert to integers

  const negatives = numbers
    .filter(n => n < 0)                   // get list of negative numbers
  if(negatives.length > 0) throw new Error('Negatives not allowed: ' + negatives)
  
  return numbers.reduce((s, n) => s + n)  // Return sum of all valid numbers
}

const addV1 = (inputString) => {
  
  if(inputString.length < 1) return 0     // return 0 if empty input string

  const number = inputString

  let filteredString = number
    .replace(/(\n)/gm,",")                 // replaces spaces in string

  let numberString = null
  if(filteredString[0] === '/') {         // if first char in string is a /
    const delimiter = filteredString[2]         // get the 3rd char which is a delimiter
    numberString = filteredString
      .replaceAll(delimiter, ',')         // if custom delimiter, replace with ,
      .split(',')                         // Split values with a common delimiter
      .slice(2)                           // Return from 4th index onwards
  } else {
    numberString = filteredString
      .split(',')
  }
  const numbers = numberString
    .map(n => {                           // create array of numbers from string
      const localNum = Number.isNaN(parseInt(n)) ? 0 : parseInt(n) // return 0 if not a number
      if(localNum > 1000) {
        return 0
      }
      if(localNum < 0) throw new Error('Negatives not allowed: ' + localNum) // Negatives not allowed
      return localNum
    })

    return numbers
    .reduce((s, n) => s + n)
}

module.exports = {
  addV1,
  addV2
}


console.log('\n**** ADD V1 ****\n')
console.log("addV1('') returns 0: ", addV1(''))
console.log("addV1('@#$%^*') returns 0: ", addV1('@#$%^*'))
console.log("addV1('1,2,5') returns 8: ", addV1('1,2,5'))
console.log("addV1('1\\n,2,3???') returns 6: ", addV1('1\n,2,3???'))
console.log("addV1('1,\\n2,4') returns 7: ", addV1('1,\n2,4'))
console.log("addV1('//;\\n1;3;4') returns 8: ", addV1('//;\n1;3;4'))
console.log("addV1('//$\\n1$2$3') returns 6: ", addV1('//$\n1$2$3'))
console.log("addV1('//@\\n2@3@8') returns 13: ", addV1('//@\n2@3@8'))
console.log("addV1('2,1001') returns 2: ", addV1('2, 1001'))
console.log("addV1('//***\\n1***2***3') returns 6: ", addV1('//***\n1***2***3'))


console.log('\n**** ADD V2 ****\n')
console.log("addV2('') returns 0: ", addV2(''))
console.log("addV2('@#$%^*') returns 0: ", addV2('@#$%^*'))
console.log("addV2('1,2,5') returns 8: ", addV2('1,2,5'))
console.log("addV2('1\\n,2,3???') returns 6: ", addV2('1\n,2,3???'))
console.log("addV2('1,\\n2,4') returns 7: ", addV2('1,\n2,4'))
console.log("addV2('//;\\n1;3;4') returns 8: ", addV2('//;\n1;3;4'))
console.log("addV2('//$\\n1$2$3') returns 6: ", addV2('//$\n1$2$3'))
console.log("addV2('//@\\n2@3@8') returns 13: ", addV2('//@\n2@3@8'))
console.log("addV2('2,1001') returns 2: ", addV2('2, 1001'))
console.log("addV2('//***\\n1***2***3') returns 6: ", addV2('//***\n1***2***3'))
console.log("addV2('//$,@\\n1$2@3') returns 6: ", addV2('//$,@\n1$2@3'))
