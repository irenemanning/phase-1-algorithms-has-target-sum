function hasTargetSum(array, target) {
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      } 
    }
  } 
}

/* 
  Write the Big O time complexity of your function here

  quadratic 
  0(n^2)
*/

/* 
  iterate through the array 
  if the array contains two intergers that add to make the target,  return true
  else return false
*/

/*
  this is returning true if two of the numbers in the array equal the target
  my code is saying anything else is undefined :(  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("=>",hasTargetSum([4, 2, 1], 8));
}

module.exports = hasTargetSum;
