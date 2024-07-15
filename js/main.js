// Requirements
// For each of the following, write at least one test case for each function.  They should all be nicely formatted. Do your development in Intellij and also see the further instructions below. If you follow those instructions you can create an html page with your JavaScript in that page and then post it to your site.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// Modify the jsfiddle on the map/filter/reduce slide as follows:
// a) multiply each element by 10;
// b) return array with all elements equal to 3;
// c) return the product of all elements;

// Row functions
function max(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num3) {
    return num2
  } else {
    return num3
  }
}

function isVowel(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(input.toLowerCase())) {
    return true
  }
  return false
}

function sum(args) {
  let sum = 0
  for (const n of args) {
    sum += n
  }
  return sum
}

function multiply(args) {
  let mul = 1
  for (const n of args) {
    mul *= n
  }
  return mul
}

function reverse(val) {
  let reversedString = ''
  for (const c of val) {
    reversedString = c + reversedString
  }
  return reversedString
}

function findLongestWord(inputArray) {
  let max = 0
  for (const word of inputArray) {
    if (word.length > max) {
      max = word.length
    }
  }
  return max
}

function filterLongWords(inputArray, minLength) {
  let outputArray = []
  for (const word of inputArray) {
    if (word.length > minLength) {
      outputArray.push(word)
    }
  }
  return outputArray
}

// Test Function
const succceedText = 'TEST SUCCEEDED'
const failedText = 'TEST FAILED'
const myTestFunction = (expectedValue, functionToTest) => {
  const actualValue = functionToTest()
  let testResult = failedText
  if (JSON.stringify(expectedValue) == JSON.stringify(actualValue)) {
    testResult = succceedText
  }
  return testResult
}

// Testing
const dataList = [
  {
    func: max,
    inputs: [10, 20],
    expectedOutput: 20,
  },
  {
    func: maxOfThree,
    inputs: [10, 30, 20],
    expectedOutput: 30,
  },
  {
    func: isVowel,
    inputs: ['c'],
    expectedOutput: false,
  },
  {
    func: isVowel,
    inputs: ['u'],
    expectedOutput: true,
  },
  {
    func: sum,
    inputs: [[10, 20, 30, 40]],
    expectedOutput: 100,
  },
  {
    func: multiply,
    inputs: [[1, 2, 5]],
    expectedOutput: 10,
  },
  {
    func: reverse,
    inputs: ['CS 472 - WAP'],
    expectedOutput: 'PAW - 274 SC',
  },
  {
    func: findLongestWord,
    inputs: [['I', 'am', 'good']],
    expectedOutput: 4,
  },
  {
    func: filterLongWords,
    inputs: [['one', 'two', 'three', 'four', 'five', 'six', 'seven'], 4],
    expectedOutput: ['three', 'seven'],
  },
]

// Test execution
dataList.forEach((data) => {
  let testOutputText = 'Expected output of '
  if (Array.isArray(data.inputs)) {
    testOutputText += data.func.name + '(' + data.inputs.join(', ') + ')'
  } else {
    testOutputText += data.func.name + '(' + data.inputs.toString() + ')'
  }
  testOutputText += ' is ' + data.expectedOutput
  testOutputText += ' : ' + myTestFunction(data.expectedOutput, function () {
    return data.func(...data.inputs)
  })

  console.log(testOutputText)
  console.assert(
    testResult === succceedText,
    'Expected ' +
      JSON.stringify(data.expectedOutput) +
      ' found ' +
      JSON.stringify(data.func(...data.inputs)),
  )
})
