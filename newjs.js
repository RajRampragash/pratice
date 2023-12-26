const input  = [4, 6, 2, 8, 9, 2, 6, 7, 6]
//output = { 6: 3,2: 2}
const output={}
input.forEach((element)=>{
    output[element]= (output[element]||0)+1
    
})
console.log(output)
const res = {}
for (key in output){
    if(output[key]>1){
        res[key]=output[key]
    }
}
console.log(res)