import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";
import loginUser from "../api/loginUser";
import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";
import { AuthContext } from "../App";



const Login = ({loginData}) => {

    const {name,setName}=useContext(AuthContext);
    const [password,setpassword]=useState("");
    const navigate = useNavigate();
    
    

    const handleSubmit =  async (e)=>{
        e.preventDefault();
        const data= await loginUser({
            name: name,
            password:password
        });
        loginData(data, name);
        
        if(data){
            navigate('/dashboard');
        }

    }


    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text"
                 placeholder="Ingrese su nombre"
                 onChange={(e)=> setName(e.target.value)}
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password"
                 placeholder="Ingrese su Contraseña"
                 onChange={(e)=>setpassword(e.target.value)}
                 ></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">Ingresar</Button>
        </Form>
    )
}

Login.propTypes ={
    loginData: PropTypes.func.isRequired,
};

export default Login;