import './Header.css';

function Header() {
    return (
        <div id='header'>
            <h1>Home</h1>
            <div id='nav_bar'>
                <button>Meus Anúncios</button>
                <button>Imóveis observados</button>
                <button>Chat</button>
                <button>Vender</button>
            </div>
        </div>
    )
}

export default Header;