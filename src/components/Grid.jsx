import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../components/Cards';
import './Grid.css';

function Grid() {
  return (
    <Container>
      <Row className='Row'>
        <Col className='Col'><Cards /></Col>
        <Col className='Col'><Cards /></Col>
        <Col className='Col'><Cards /></Col>
        
      </Row> 
      <Row className='Row'>
        <Col className='Col'><Cards /></Col>
        <Col className='Col'><Cards /></Col>
        <Col className='Col'><Cards /></Col>
        
      </Row> 
    </Container>
  );
}

export default Grid;
