type Combinable = number | string

function combine(input1: Combinable, input2: number | string) {
   const result = input1 + input2
   return result
 }

 const combineAges = combine(30, 23)
 console.log(combineAges);

 const combineNames = combine('Max', 'Anna')
 console.log(combineNames);