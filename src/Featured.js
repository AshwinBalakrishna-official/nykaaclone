import React from 'react';
import {Container,CardDeck ,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/featured.css"



function Featured(){
    return(
        <div>
        <Container id="featured">
        <CardDeck >
            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/81de2ccd-c626-499e-9ed6-9dd088a5be92.jpg" />
                <Card.Title>All Fine Fragrance Mist</Card.Title>
                
                <Card.Body>
                    <p>At Rs.799</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/09c83144-636f-48ea-bc24-94d09befcd06.jpg" />
                
                <Card.Title>Get A 2-Piece Face Care Kit </Card.Title>
                
                <Card.Body>
                    <p>On Orders of Rs.3000</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/c9ae975e-2b9f-4ed5-98fc-9de37a026af5.jpg" />
                
                <Card.Title>UPTO 25% off </Card.Title>
                
            </Card>


            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/62e46939-a25f-45dd-92ab-3f78b85606de.jpg" />
                <Card.Title>Flat 10% OFF </Card.Title>
                
                <Card.Body>Free 2 cotton bags</Card.Body>
            </Card>
        </CardDeck>
        

        
     </Container>

    <Container >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/64a525d7-0cc9-4040-b2dd-605f56ec9a9c.jpg" />
                <Card.Title>Flat 10% OFF  </Card.Title>
                
                <Card.Body>
                    <p>Get 2 Cotton Free</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/05e7fa7c-b3eb-45fd-91a4-4f64c1bed761.jpg" />
                <Card.Title>Flat 20% OFF  </Card.Title>
                
                <Card.Body>
                    <p>Orders over Rs.999</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/c049a852-992f-4ee8-a67c-3703a7d6054f.jpg" />
                <Card.Title> Free Glow Up Kit</Card.Title>
                
                <Card.Body>
                    <p>Orders over Rs.2999</p>
                </Card.Body>
            </Card>


            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/6db41f68-28c2-4167-beaa-2a692ae74ddb.jpg" />
                <Card.Title>Flat 50% OFF </Card.Title>
                
                <Card.Body>
                    <p>SUN TAN BANTAN</p>
                </Card.Body>
            </Card>
        </CardDeck>



        </Container>
        </div>
    ) ;
 }
 export default Featured;