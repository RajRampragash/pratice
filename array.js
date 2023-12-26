const array = ["raj","jasmine", "varsha","abdul","jaswanth"]
console.log( array.sort()
)

// reverse the array without using the inbuilt function

let arr = [1,2,3,4,5,6,7]
const reverse=(arr,start,end)=>{
    for(end-=1;start<end;start++,end--){
        [arr[start],arr[end]]=[arr[end],arr[start]]
    }
    return arr
}
console.log(reverse(arr,0,arr.length))