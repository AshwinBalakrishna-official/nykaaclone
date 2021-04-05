import React from 'react';
import {Container,CardDeck ,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/store.css"



function Store(){
    return(
     <Container >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/fedfce7d-166d-4773-83c2-0083f31258e0.jpg" />
                <Card.Footer>
                    <small>Celebrate every shade of beauty</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/e5c2010f-2151-4584-8e31-1da445d00f5b.jpg" />
                
                <Card.Footer>
                    <small>Your Guide To Hair Care  & Styling </small>
                </Card.Footer>
            </Card>
        </CardDeck>
        
     </Container>
    ) ;
 }
 export default Store;