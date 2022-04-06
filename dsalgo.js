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