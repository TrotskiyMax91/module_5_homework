let arr = [-5, 0, 1, 2, 5, 6, 30, null, true ];
let evenElements = arr.filter(function(currentValue, index) {
return index%2==0;
 });
let oddNumbers = arr.filter(function(currentValue, index) {
  return index%2!=0;
});                     
console.log(evenElements);
console.log(oddNumbers);