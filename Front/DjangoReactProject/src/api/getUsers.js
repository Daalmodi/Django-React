import axios from "axios";

const getUsers = async ()=>{
    
    try{
        const result = await axios.get("http://127.0.0.1:8000/users/api/v1/users/")
        if(result.status === 200){
            return result.data;
        }
        
    }catch(error) {
        console.log("Hubo un error en la peticion "+error);
        
    }
}
export default getUsers;