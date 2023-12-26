const apiUrl = 'https://fakestoreapi.com/products'

async function getData(api, cb){
    const res = await fetch(api)
    const data = await res.json()
    cb (data);
}

function displaydata(data) {
    console.log(data) 
    //inside the function we using the map and all other function
    //  const withoutTit = data.map((val,ind,arr)=>{
    //     let obj = {...val}
    //     delete obj['title']
    //     return obj;
    //  })
    // console.log(withoutTit)
    // //filter
    // const price = withoutTit.filter((val,ind,arr)=>{
    //     if(val.price <=1000 )return val
    // })
    // console.log(price)
    // //reduce
    // const sumPrice = price.reduce((accumulator,currentVal)=> accumulator + currentVal.price ,0)
    // console.log(sumPrice)
    

}


const data = getData(apiUrl,displaydata )

console.log(data) 


