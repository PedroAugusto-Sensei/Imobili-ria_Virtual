import Dropdown from "../components/Filtros";
import Cards from "../components/Cards";
import './Home.css';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Dropdown />
            <Cards />
        </div>
    );
}

export default Home;