import Dropdown from "../components/Filtros";
import Cards from "../components/Cards";
import CarouselFadeExample from  "../components/Carrossel.jsx"

import './Home.css';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Dropdown />
            <Cards />
            <CarouselFadeExample />
        </>
    );
}

export default Home;