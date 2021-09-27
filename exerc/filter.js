const arrayNames = ['andres', 'marco', 'andrea', 'leonardo', 'sofia', 'alejandro']

const filterName = arrayNames.filter((element) => {
  return element.charAt(0) === 'a'
})

module.exports = filterName
