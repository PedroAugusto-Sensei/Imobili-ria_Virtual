import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Filtros.css';

function Filtro() {


    return (
        <DropdownButton id="dropdown-basic-button" title="Filtros" drop='down-centered'>
            <Dropdown.Item href="" className='Item'>Nome A-Z</Dropdown.Item>
            <Dropdown.Item href="" className='Item'>Nome Z-A</Dropdown.Item>
            <Dropdown.Item href="" className='Item'>Menor Preço</Dropdown.Item>
            <Dropdown.Item href="" className='Item'>Maior Preço</Dropdown.Item>
        </DropdownButton>
    );
};

export default Filtro;