import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Card, Button } from 'react-bootstrap';
import './index.css';
import {useState} from "react";

const Layout: React.FC = () => {
    const [contador, setContador] = useState(1);{

    }
        function adicionarContador() {
            setContador(contador + 1);
        }

        function diminuirContador() {
            setContador(contador - 1);
        }


    return (
        <Container>
            <div className="Layout">
                <Card className="text-center">
                    <Card.Header><h1>Contador</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Clique nos botões abaixo para aumentar ou diminuir o contador</Card.Title>
                        <Card.Text>
                            <h2>{contador}</h2>
                        </Card.Text>
                        <Container>
                            <Button variant="primary" onClick={adicionarContador}><b>Aumentar</b></Button>
                            <Button style={{marginLeft: '2%'}} variant="primary" onClick={diminuirContador}><b>Diminuir</b></Button>
                        </Container>
                    </Card.Body>
                    <Card.Footer className="text-muted">Contador Web ReactJs - <a
                        href='https://github.com/kauefilgueiras'>https://github.com/kauefilgueiras</a></Card.Footer>
                </Card>
            </div>
        </Container>
    );
}


            export default Layout;