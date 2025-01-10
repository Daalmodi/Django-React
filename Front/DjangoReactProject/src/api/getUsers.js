import axios from "axios";

const getUsers = async ()=>{
    
    try{
        const result = await axios.get("http://localhost:8000/users/regular-users/")
        if(result.status === 200){
            return result.data;
        }
        
    }catch(error) {
        console.log("Hubo un error en la peticion "+error);
        
    }
}
export default getUsers;