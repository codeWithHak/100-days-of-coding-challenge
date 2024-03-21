/*

Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

*/

let laptopSet1 = [1200,1000,1400]
let laptopSet2 = [1100,1300,1500]
let laptopSet3 = [...laptopSet1,...laptopSet2].sort()
console.log(laptopSet3);

export{}
