import React from 'react';
import './App.css';
import Header from "./Header";
import NavMenu from "./NavMenu";
import Slider from "./SlickSlider";
import Grids from "./GridLay";
import Stores from "./Store";
import Featured from "./Featured";
import Prefoot from "./PreFooter";
import Footmenu from "./FooterMenu";
import Footfeature from "./FootFeature";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Slider />
      <div>
        <img src="https://images-static.nykaa.com/tr:w-1140,c-at_max/uploads/8993c4bd-f54a-4ad0-a392-a54010fabf16.gif" alt="gif img"></img> <br/>
        <img src="https://images-static.nykaa.com/tr:w-1140,c-at_max/uploads/44ac7ada-9c30-4fc6-a3f8-6d83ec8cd8b1.jpg" alt="OFFER_BANNER"></img>
      </div>
      <Grids />
      <div >
        <img src="https://images-static.nykaa.com/tr:w-591,c-at_max/uploads/1240f469-84a6-4f6f-803c-922260d80705.jpg" alt="banner-sale"></img>
      </div>
      <h5>STORE IN FOCUS</h5>
      <Stores />
      <h5>FEATURED BRANDS</h5>
      <Featured />
      <Prefoot />
      <Footmenu />
      <Footfeature />
      <Footer />
      <p>© Created by Ashwin Balakrishna</p>

    </div>
    
  );
}

export default App;
