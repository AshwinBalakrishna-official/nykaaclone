import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";


function Prefoot(){
    return(
     <div id="footer" >
         <Container  >
             <Row>
                 
                <Col lg={2}>
                    
                </Col>

                <Col lg={8}>
                    <Row>
                        <Col><a href="App.js">TERMS & CONDITIONS</a></Col>
                        <Col><a href="App.js">SHIPPING POLICY</a></Col>
                        <Col><a href="App.js">CANCELLATION POLICY</a></Col>
                        <Col><a href="App.js">PRIVACY POLICY</a></Col>
                    </Row>
                    
                    <p>© 2021 Nykaa E-Retail Pvt. Ltd. All Rights Reserved</p>
                    
                    
                </Col>
                
                <Col lg={2}>
                    
                </Col>         
             </Row>
         </Container>    
     </div>
    ) ;
 }
 export default Prefoot;