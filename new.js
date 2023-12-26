const apiUrl ='https://jsonplaceholder.typicode.com/users'

async function getdata(api,cb){
    const res = await fetch(api)
    const data =  await res.json()
    cb(data)

}

function displaydata(data){

    //names
let user = data.map(user=>user.name)
console.log(user)

    console.log(data)

}
const data = getdata(apiUrl,displaydata)
console.log(data)