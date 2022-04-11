//2 arrays input, arr2 must contain the squares of all elements of arr1 at the same frequency
//sameSquared([1,2,3], [4,1,9]) = true
//sameSquared([1,2,3], [1,9]) = false
//sameSquared([1,2,1], [4,4,1]) = false

function sameSquared(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let isPresent = arr2.indexOf(arr1[i] ** 2)
        if(isPresent === -1){
            return false;
        }
        arr2.splice(isPresent, 1);
    }
    return true;
}

//O(n^2) time

//2 arrays input, arr2 must contain the squares of all elements of arr1 at the same frequency
//sameRefactor([1,2,3], [4,1,9]) = true
//sameRefactor([1,2,3], [1,9]) = false
//sameRefactor([1,2,1], [4,4,1]) = false

function sameRefactor(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true;
}

//O(n) time

//Given two strings, write a function to detemine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by the rearrranging the letters of antother.

//validAnagram("","")
//validAnagram('aaz','zza')
//validAnagram('anagram','nagaram')
//validAnagram('rat','car')
//validAnagram('awesome','awesom')
//validAnagram('qwerty','qeywrt')
//validAnagram('cinema','iceman')

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}


//O(n) time

//Given an array of storted integers return the first pair that adds up to zero

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//O(n^2) time


//Given an array of storted integers return the first pair that adds up to zero


function sumZeroRefactor(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }
    else if(sum > 0){
      right--;
    }
    else(
      sum++
    )
  }
}

// O(n) time


//Find the maximum sum of sub array when givin the array and length of subarray

function naxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++){
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

// O(n) time

function factorial(num){
  if(num === 1) return 1
  return num * factorial(num-1)
}