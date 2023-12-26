//find commonElements([1, 3, 4, 6, 7, 9], [-1, 3]) ➞ [3]commonElements([1, 3, 4, 6, 7, 9], [-1, 3]) ➞ [3]
//find commonElements(["apple", "banana", "cherry"], ["apple"]) ➞ ["apple"]
function findCommonElements(arr1, arr2) {
    let result = [];
    for (let i=0;i<arr1.length;i++){
        if (arr2.includes(arr1[i])){
            result.push(arr1[i]);
        }
        }
    return result;
}

console.log(findCommonElements([1, 3, 4, 6, 7, 9], [-1, 3 ]));
