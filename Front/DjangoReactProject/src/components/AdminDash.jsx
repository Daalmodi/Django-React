
import PropTypes from 'prop-types';
import getUsers from '../api/getUsers';
import { useEffect, useState } from 'react';


const AdminDash = ({name}) =>{
     const [data,setData]=useState([]);
    useEffect(() => {
        const fetchDataRegularUser = async () => {
            const response = await getUsers();
            setData(response.regular_users);
        };
        fetchDataRegularUser();
    }, []);


return(
    <div>
        <h1>Bienvenido {name} a el DASHBOARD de Administrador</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Inicio de sesión</th>
                    <th>Tiempo</th>
                    <th>Boton 1</th>
                    <th>Boton 2</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.loginDate}</td>
                        <td>{user.onlineTime}</td>
                        <td>{user.button1Counter}</td>
                        <td>{user.button2Counter}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

AdminDash.propTypes ={
    name: PropTypes.string.isRequired,
}
export default AdminDash;