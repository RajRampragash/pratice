const apiUrl = 'https://fakestoreapi.com/products'

//async method 
async function getdata(api,cb){
    const res = await fetch(api)
    const data = await res.json();
   cb (data);
}
function displaydata(data){
   

   console.log(data)
   const withoutTit = data.map((val,ind,arr)=>{
   
   })
  console.log(withoutTit)
}
const data= getdata(apiUrl,displaydata)


//.then .catch 

const res = fetch(apiUrl).then(response => response.json())
.then(data => {
   console.log(data);
   // do something with data here
})
.catch(error => {
   console.error('Error:', error);
});