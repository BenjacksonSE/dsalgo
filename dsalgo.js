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


// Construct a table with table[i] as the length of the longest prefix of the substring 0..i
// create a table of size equal to the length of `str`
// table[i] will store the prefix of the longest prefix of the substring str[0..i]
// the longest prefix of the substring str[0] has length
// for the substrings the following substrings, we have two cases
// case 1. the current character doesn't match the last character of the longest prefix
// if that is the case, we have to backtrack, and try find a character  that will be equal to the current character
// if we reach 0, then we couldn't find a chracter
// case 2. The last character of the longest prefix matches the current character in `str`
// if that is the case, we know that the longest prefix at position i has one more character.
// for example consider `.` be any character not contained in the set [a.c]
// str = abc....abc
// consider `i` to be the last character `c` in `str`
// maxPrefix = will be 2 (the first `c` in `str`)
// maxPrefix now will be 3
// so the max prefix for table[9] is 3
function makeTable(str) {
  
    
    var table = new Array(str.length);
    var maxPrefix = 0;
    
    table[0] = 0;
  
    
    for (var i = 1; i < str.length; i++) {
      while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        
        maxPrefix = table[maxPrefix - 1];
      }
      
      if (str.charAt(maxPrefix) === str.charAt(i)) {
        maxPrefix++;
      }
      table[i] = maxPrefix;
    }
    return table;
  }
  
// Find all the words that matches in a given string `str`
// this algorithm is based on the Knuth–Morris–Pratt algorithm. Its beauty consists in that it performs the matching in O(n)
// find the prefix table in O(n)
// `j` is the index in `word(P)`
// `i` is the index in `str(S)`
// Case 1.  S[i] == P[j] so we move to the next index in `S` and `P`
// Case 2.  `j` is equal to the length of `P`
// that means that we reached the end of `P` and thus we found a match
// Next we have to update `j` because we want to save some time
// instead of updating to j = 0 , we can jump to the last character of the longest prefix well known so far.
// j-1 means the last character of `P` because j is actually `P.length`
// e.g.
// S =  a b a b d e
// P = `a b`a b
// we will jump to `a b` and we will compare d and a in the next iteration
// a b a b `d` e
//  a b `a` b
// Case 3.
// S[i] != P[j] There's a mismatch!
// if we have found at least a character in common, do the same thing as in case 2
// otherwise, j = 0, and we can move to the next character S[i+1]function kmpMatching(str, word) {
   
    var prefixes = makeTable(word);
    var matches = [];
    
    
    var j = 0;
    var i = 0;
    while (i < str.length) {
      
      if (str.charAt(i) === word.charAt(j)) {
        i++;
        j++;
      }
      
      if (j === word.length) {
        matches.push(i-j);
        
        j = prefixes[j-1];
      }
      
      else if (str.charAt(i) !== word.charAt(j)) {
          
          if (j !== 0) {
              j = prefixes[j-1];
          } else {
              
              i++;
          }
      }
    }
  
    return matches;
  }
console.log(kmpMatching("it implies that it is very important","impo"))
output: [27]