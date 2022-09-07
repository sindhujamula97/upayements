import React from "react";
import { Card,Row,Col} from "react-bootstrap";
import apple from "./apple-11.jpg";

import "./style.css";

function Pdp() {
  return (
    <React.Fragment>
      <div className="pdp-container">
        <Row className="pdp-row">
          <Col md={3}>
            <Card>
              <Card.Img src={apple} className="card-img-pdp" />
            </Card>
          </Col>
          <Col md={9}>
            <h1>Iphone-11</h1>
            <h4 className="price-pdp">$529.99</h4>
          </Col>
        </Row>
        <Row>
          <hr></hr>

          <h3 className="description">Description</h3>
          <Col>
            <p>
              orem ipsum dolor sit amet. Ut dolores voluptates sit deserunt
              quasi aut amet eius et voluptas fuga eos quis assumenda qui
              consequatur sapiente! Rem consequatur sequi sed tenetur expedita
              sed delectus deleniti qui dolor ipsa. Et labore dicta et beatae
              nisi aut molestiae aliquam ab doloribus earum cum amet illum. Rem
              fuga ipsam a iste ipsam qui quam odio eos quae autem in deserunt
              voluptatum et eveniet officia est dolorum similique. Vel corporis
              tempore est doloribus laborum non voluptatum doloremque aut
              officia fugiat ex natus eius aut provident officia vel facere
              iusto? A esse veniam est suscipit omnis et quis iste et officia
              similique et rerum voluptatem et corrupti quia! Ea autem nulla qui
              temporibus repudiandae et magnam architecto sit officia dolorem.
              Ut adipisci cumque ea deleniti sapiente ut dolorem obcaecati quo
              adipisci rerum ea harum provident eum officia eligendi in labore
              minus. Cum pariatur exercitationem non fugiat quaerat sit libero
              quisquam id nulla unde qui veritatis aperiam eos reiciendis
              repellendus.
            </p>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Pdp;
