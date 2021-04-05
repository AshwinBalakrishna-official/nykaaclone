import React from 'react';
import "./css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift,faMapMarkerAlt,faMobileAlt,faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Head(){
   return(
    <div className="head">
        <Container fluid>
            <Row>
                <Col></Col>
                <Col><p><span><FontAwesomeIcon icon={faMobileAlt}/> Get it</span>|<span><FontAwesomeIcon icon={faMapMarkerAlt}/> Store & Events</span>|<span><FontAwesomeIcon icon={faGift}/> Gift Card</span>|<span><FontAwesomeIcon icon={faQuestionCircle}/> Help</span></p>
                </Col>
            </Row>
        </Container>
    </div>
   ) ;
}
export default Head;