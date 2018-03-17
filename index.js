module.exports = function (size = 10) {
  var arr = []
  for (let i = 0; i < size; i++) {
    arr.push(i*0.1 + Math.random())
  }
  return arr
}
