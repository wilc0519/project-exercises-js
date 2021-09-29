
// --------------first way--------------------
const wordCamelCase = 'wilmerIvánLópezCarrera'
const wordStrOfArray = wordCamelCase.split('')
const changeArray = wordStrOfArray.map((element) => {
  if (element === element.toUpperCase()) {
    return ' ' + element
  }
  return element
})
const newStr = changeArray.join('')

// --------------------Second way----------------------------

let newStrWord = ''
const funcForEach = wordStrOfArray.forEach((element) => {
  if (element === element.toUpperCase()) {
    newStrWord = newStrWord + ' ' + element
  } else {
    newStrWord += element
  }
})

// ----------------third way ---------------------------------------

let subWord3 = ''
for (let i = 0; i < wordCamelCase.length; i++) {
  if (wordCamelCase.charAt(i) === wordCamelCase.charAt(i).toUpperCase()) {
    subWord3 = subWord3 + ' ' + wordCamelCase.charAt(i)
  } else {
    subWord3 += wordCamelCase.charAt(i)
  }
}

module.exports = { wordCamelCase, newStr, subWord3, newStrWord, funcForEach }
