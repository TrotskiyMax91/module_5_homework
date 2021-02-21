let arr = new Map([
    [1, 'кошка'],
    [2, 'мышка'],
    [3, 'собака'],
  ]);
  
  for(let key of arr.keys()){
    console.log('key = ' + key +', value = '+arr.get(key));
  }