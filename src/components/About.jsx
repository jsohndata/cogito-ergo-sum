import { Container, Row, Col, Image  } from "react-bootstrap";

export default function About() {

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={4} className="d-flex align-items-center">
            <Image src="/cogito-ergo-sum/images/profile.webp"
              className="rounded-circle"
              fluid
              alt="René Descartes" />            
          </Col>

          <Col lg={6}>
            <h1 className="mt-3 text-sm-center text-lg-start">Cogito Ergo Sum</h1>
            <p><em>"I think, therefore I am."</em> It was introduced by French philosopher René Descartes in 1637. The statement argues that the act of doubting one's own existence serves as proof of one's existence, making it a fundamental principle of Western philosophy and influential in the development of modern philosophy and science.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
