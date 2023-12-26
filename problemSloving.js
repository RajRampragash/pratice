let arr = [{name:"a",age:10},{name:"b",age:30},{name:"d",age:12},{name:"f",age:1}
,{name:"r",age:45},{name:"h",age:59},{name:"c",age:99}]
 arr = arr.sort((a,b)=>{
    return a.age-b.age
})
console.log(arr)
//------------------------------------------------------------------------------------------------
 //flat array
 let array = [1,2,3,[4,5,6,[7,8,9,[10,11,12,[13,14,15]]]]]

const flat =(array)=>{
    let res=[]
    for(let val of array){
        if(Array.isArray(val)){
            res=[...res, ...flat(val)]
        }else{
            res.push(val)
        }
    }
    return  res;
}
console.log(flat(array))
//------------------------------------------------------------------------------------------------
//object grouping
let arr1 = [
    { name: "John", age: 25 , gender: "male"},
    { name: "John", age: 25 , gender: "female"},
    { name: "John", age: 25 , gender: "male"},
    { name: "John", age: 25 , gender: "female"},
]
let key = "gender"

console.log(arr1.reduce((acc,val,ind,rray)=>{
    if(acc[val[key]]){
        acc[val[key]].push(val);
    }else{
        acc[val[key]]=[val]
    }
    return acc

},{}));
//------------------------------------------------------------------------------------------------
//object merging 
const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}

console.log({...obj1,...obj2})
//------------------------------------------------------------------------------------------------
//object invention
const object ={r:1,A:2,j:3}
console.log(object)
let res = {};
for(key in object){
    res[object[key]]=key

}
console.log(res)
//------------------------------------------------------------------------------------------------
//object deep comparisen
let a = {name:"ramu",age:15,sex:"male"}
let b = {name:"ramu",sex:"male",age:15}

function compare (a,b){
    if((typeof(a)!=(typeof(b))))return false
    if(Array.isArray(a)!=Array.isArray(b)) return false
    if(Object.keys(a).length != Object.keys(b).length)return false
    for(let key of Object.keys(a)){
        if(typeof a[key]=="object"){
            let x = compare(a[key],b[key]);
            if(!x){
                return false;
            }
        }else if(a[key]!= b[key]) return false
    }
    return true
}
console.log(compare(a,b))
//------------------------------------------------------------------------------------------------
let r = new Date()
let j = r.toLocaleString()
console.log(j)