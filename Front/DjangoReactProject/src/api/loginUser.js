import axios from "axios"

const loginUser = async(user)=>{
    try{
        const result = await axios.post("http://localhost:8000/users/login/",user)
        if(result.status === 200){
            
            
            return result.data;
        }
    }catch(error){
        console.log("hubo un error en la peticion de logeo "+ error );
    }
}
export default loginUser;