import { useContext } from "react";
import { AuthContext } from "../App";
import AdminDash from "./AdminDash";
import RegularDash from "./RegularDash";

const DashBoard = () => {
    const {role , name} =useContext(AuthContext);
    return (
        <div>
            {role === "Admin"&& <AdminDash name={name}></AdminDash>}
            {role === "Regular"&& <RegularDash name={name}></RegularDash>}
        </div>
        
    );
}

export default DashBoard; 