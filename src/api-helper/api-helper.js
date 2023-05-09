import axios from 'axios'
export const getallmovie=async()=>{
   const response=await axios.get("http://localhost:3000/movie")
   .catch((err)=>console.log(err));

   if(response.status !==200){
    return console.log('no data')

   }
   const data= await response.data;
   //data hold the actual data
   return data;

} 