import "./styles1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Slika from "./Slike/wokfiredshrimp.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Pozadina1 from "./Slike/background.jpeg";
import FamilyMeal from "./Slike/familymeal.jpg";
import Bowl from "./Slike/bowl.jpg";
import Plate from "./Slike/plate.jpg";
import BigPlate from "./Slike/bigplate.jpg";
import AlaCarte from "./Slike/alacarte.jpg";
import Appetizer from "./Slike/appetizer.jpg";
import Sokovi from "./Slike/sokovi.jpg";
import Catering from "./Slike/catering.jpg";
import Panda from "./Slike/Pandaexpress.png";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";

export default function Naslovna() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="App">
      <div ref={ref}>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">
              <strong>Oprostite!</strong>{" "}
            </Popover.Header>
            <Popover.Body>
              Trenutno je nemoguće naručivati, molim vas vratite se kasnije.
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
      <Header></Header>
      <div style={{ backgroundImage: `url(${Pozadina1})` }}>
        <Container fluid>
          <Row className="row1" fluid>
            <Col md={4} className="col">
              <Image src={Slika} className="slika" />
            </Col>
            <Col md={8}>
              <div className="wok">Wok-Fired Shrimp</div>
              <div className="wok">se vratio!</div>
              <br />
              <div className="tekstwok">
                Isprobajte ovaj favorit s vrhunskim škampima i svježe narezanim
                povrćem samo ograničeno vrijeme!
              </div>
              <br />
              <br />
              <Button
                variant="outline-danger"
                style={{ height: "60px", width: "150px" }}
              >
                <Link to="/Narucite" className="div1">
                  <p className="div2">Uzmite sada</p>
                </Link>
              </Button>{" "}
              <Button
                variant="outline-light"
                style={{ height: "60px", width: "200px" }}
                onClick={handleClick}
              >
                Počnite novu narudžbu!
              </Button>
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="colovi" xs={4} md={4}>
              <Image src={FamilyMeal} className="slika"></Image>
              <div className="divovi1">Obiteljska jela</div>
              <div className="divovi">3 predjela i 2 glavna jela!</div>
            </Col>
            <Col className="colovi" xs={4} md={4}>
              <Image src={Bowl} className="slika"></Image>
              <div className="divovi1">Zdjela</div>
              <div className="divovi">1 predjelo i 1 glavno jelo!</div>
            </Col>
            <Col className="colovi" xs={4} md={4}>
              <Image src={Plate} className="slika"></Image>
              <div className="divovi1">Plata</div>
              <div className="divovi">1 predjelo i 2 glavna jela!</div>
            </Col>

            <Col className="colovi" xs={4} md={4}>
              <Image src={BigPlate} className="slika"></Image>
              <div className="divovi1">Velika plata</div>
              <div className="divovi">1 predjelo i 3 glavna jela</div>
            </Col>
            <Col className="colovi" xs={4} md={4}>
              <Image src={Panda} className="slika"></Image>
            </Col>
            <Col className="colovi" xs={4} md={4}>
              <Image src={AlaCarte} className="slika"></Image>
              <div className="divovi1">A La Carte</div>
              <div className="divovi">Posebno glavna jela i predjela!</div>
            </Col>

            <Col className="colovi" xs={4} md={4}>
              <Image src={Appetizer} className="slika"></Image>
              <div className="divovi1">Ekstra</div>
              <div className="divovi">Malo ekstra uz vaše jelo!</div>
            </Col>
            <Col className="colovi" xs={4} md={4}>
              <Image src={Sokovi} className="slika"></Image>
              <div className="divovi1">Sokovi</div>
              <div className="divovi">
                Dodajte osvježavajuće piće uz vašu narudžbu!
              </div>
            </Col>
            <Col className="colovi" xs={4} md={4}>
              <Image src={Catering} className="slika"></Image>
              <div className="divovi1">Catering</div>
              <div className="divovi">Velike narudžbe za velike događaje</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
