//2 arrays input, arr2 must contain the squares of all elements of arr1 at the same frequency
//same([1,2,3], [4,1,9]) = true
//same([1,2,3], [1,9]) = false
//same([1,2,1], [4,4,1]) = false

function same(arr1, arr2){
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