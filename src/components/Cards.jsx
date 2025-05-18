import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards() {
    return (
        <Card id='card'>
            <Card.Img variant="top" src="./src/assets/images/img1.jpg" id='img'/>
            <Card.Body>
                <Card.Title><h2 id='title-categoria'>Casa</h2></Card.Title>
                <Card.Text>
                    <h4 id='title-local'>São Paulo</h4>
                    <p>Casa com 3 quartos, 2 banheiros, sala e cozinha. Quintal verde amplo com piscina.</p>
                </Card.Text>
                <div id='negociar'>
                    <Button variant="primary" id='negociar-btn'>Negociar</Button>
                    <h2>R$1230,00<span id='parcela'>/mês</span></h2>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Cards;