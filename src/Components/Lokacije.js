import "./styles1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer.js";
import Container from "react-bootstrap/Container";
import Pozadina1 from "./Slike/background.jpeg";
import { useState, useEffect, useRef } from "react";
import Forma from "./Forma";

export default function Lokacije() {
  const [drzava1, postaviDrzavu] = useState(" ");
  const counter = useRef();

  const dodaj1 = (drzava1, counter) => {
    postaviDrzavu(drzava1, counter);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.6370936082767!2d-74.43032696750818!3d40.54960621330056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b8149cc40f0d%3A0x9b6182e8671661b8!2sPanda%20Express!5e0!3m2!1sen!2shr!4v1653133334301!5m2!1sen!2shr"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid style={{ backgroundImage: `url(${Pozadina1})` }}>
        <div className="divdobar">
          Ovo je jedna on naših najpoznatijih lokacija
        </div>
        <div className="div1dobar">
          Naši restorani su većinom nalaze u Americi, ali nebrini te jer uvijek
          tražimo nova mjesta za proširenje, ako želite da Panda Express dođe u
          vašu državu molimo kliknite botun ispod ovoga teksta
        </div>
        <Forma dodaj={dodaj1} />
        <div className="div1dobar">
          Država koju si izabrao:
          <br />
          {drzava1} <br />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
