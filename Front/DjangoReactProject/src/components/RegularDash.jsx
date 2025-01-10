
import PropTypes from 'prop-types';
const RegularDash = ({name}) =>{
return(
    <div>
        <h1>Bienvenido {name} a el DASHBOARD  Regular</h1>
    </div>
);
}

RegularDash.propTypes ={
    name: PropTypes.string.isRequired,
}
export default RegularDash;