import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";
import loginUser from "../api/loginUser";
import { useState } from "react";




const Login = () => {

    const [name,setName]=useState("");
    const [password,setpassword]=useState("");
    //const [session,setSession]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const loginData=loginUser({
            name: name,
            password:password
        });
         console.log(loginData);
         
        

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

export default Login;