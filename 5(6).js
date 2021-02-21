let arr = [1, 2, 3, 4, 5, 10, 20]
let element = arr[0]
let result = arr.every(function(value){
  return value === element
})
console.log(result)