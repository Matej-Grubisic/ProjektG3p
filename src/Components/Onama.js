import "./styles1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Footer from "./Footer";
import PandaTeam from "./Slike/pandateam.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Pozadina1 from "./Slike/background.jpeg";
import Community from "./Slike/community.jpg";
import PandaCare from "./Slike/pandacare.jpg";

export default function Onama() {
  return (
    <div className="App">
      <Header></Header>
      <Image src={PandaTeam} className="slika" />
      <div style={{ backgroundImage: `url(${Pozadina1})` }}>
        <Container>
          <Row>
            <Col>
              <div className="divdobar">Obitelj Panda</div>
              <div className="div1dobar">
                Od naših osnivača do suradnika diljem svijeta, više od 47.000
                pari ruku nadahnjuju bolji život kroz zajednicu i filantropsku
                podršku.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Image src={Community} className="slika"></Image>
      <div style={{ backgroundImage: `url(${Pozadina1})` }}>
        <Container>
          <Row>
            <Col>
              <div className="divdobar">IZGRADNJA ZAJEDNICA</div>
              <div className="div1dobar">
                Od nastojanja cijele zemlje do podrške našim lokalnim
                susjedstvima, vjerujemo da se pozitivne i značajne veze događaju
                samo kada idemo dalje od woka.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Image src={PandaCare} className="slika" />
      <div style={{ backgroundImage: `url(${Pozadina1})` }}>
        <Container>
          <Row>
            <Col>
              <div className="divdobar">PANDA BRIGA</div>
              <div className="div1dobar">
                U cijeloj zemlji, naša zaklada Panda Cares svakodnevno radi kako
                bi podržala zdravlje i obrazovanje mladih koji nemaju dovoljno
                usluga.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
