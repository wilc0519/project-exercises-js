const wordCamelCase = 'wilmerIvánLópezCarrera'

// ----------------------------------------------------

const wordStrOfArray = wordCamelCase.split('')
let newStrWord = ''
for (let i = 0; i < wordStrOfArray.length; i++) {
  if (wordStrOfArray[i] === wordStrOfArray[i].toUpperCase()) {
    newStrWord = newStrWord + ' ' + wordStrOfArray[i]
  } else {
    newStrWord += wordStrOfArray[i]
  }
}
// ----------------------------------------------------------------------
const changeArray = wordStrOfArray.map((element) => {
  if (element === element.toUpperCase()) {
    return ' ' + element
  }
  return element
})

const joinArray = changeArray.join('')

// -----------------------------------------------------------------------------

let subWord3 = ''
for (let i = 0; i < wordCamelCase.length; i++) {
  if (wordCamelCase.charAt(i) === wordCamelCase.charAt(i).toUpperCase()) {
    subWord3 = subWord3 + ' ' + wordCamelCase.charAt(i)
  } else {
    subWord3 += wordCamelCase.charAt(i)
  }
}

module.exports = { wordCamelCase, wordStrOfArray, changeArray, subWord3, newStrWord, joinArray }
