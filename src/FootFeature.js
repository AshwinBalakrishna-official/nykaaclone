import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faShoppingBag, faTag, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";


function Prefoot(){
    return(
     <div id="icons" >
         <Container  >
             <Row>
                 
                <Col lg={3}>
                    <Row>
                        <Col>
                        <h6><span><FontAwesomeIcon className="doticons" icon={faTag} size="2x"/></span>
                    

                       
                        1500+ BRANDS</h6>
                       
                        </Col>
                    </Row>
                
                </Col>
                 
                <Col lg={3}>
                    <Row >
                        <Col>
                        <h6><span><FontAwesomeIcon className="doticons" icon={faShippingFast} size="2x"/></span>
                        
                        FAST DELIVERY</h6>
                       
                        </Col>
                    </Row>
                </Col>

                
                <Col lg={3}>
                    <Row >
                        <Col>
                        <h6><span><FontAwesomeIcon className="doticons" icon={faShoppingBag} size="2x"/></span>
                        
                        BEST PRODUCT</h6>
                       
                        </Col>
                    </Row>
                </Col>


                <Col lg={3}>
                    <p>Show us some love ❤ on social media</p>
                    <p>
                    
                    <span><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" /></span>
                    </p>


                </Col>                
             </Row>
         </Container>    
     </div>
    ) ;
 }
 export default Prefoot;