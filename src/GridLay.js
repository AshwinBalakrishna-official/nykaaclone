import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";


function GridLay(){
    return(
     <div id="Grid" >
         <Container  >
             <Row>
                 <Col lg={6}>
                    <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/65845b87-3588-467c-9b0c-e5910584bd42.jpg" alt="ponds offer"></img>
                 </Col>
                 <Col lg={6}>
                 <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/dac23e92-c0c5-4acf-a678-8bdc0ceb82f1.jpg" alt="Charlette offer"></img>
                 </Col>
             </Row>
         </Container>

        
         <Container  >
             <Row>
                 <Col lg={6}>
                    <img src="https://images-static.nykaa.com/tr:w-289,c-at_max/uploads/db0aea2c-9e9b-4371-8125-9d2d346debaa.jpg" alt="ponds offer"></img>
                 </Col>
                 <Col lg={6}>
                 <img src="https://images-static.nykaa.com/tr:w-289,c-at_max/uploads/3e072ea2-8c72-4126-9115-2d50af1d4924.gif" alt="Charlette offer"></img>
                 </Col>
             </Row>
         </Container>

        
     </div>
    ) ;
 }
 export default GridLay;