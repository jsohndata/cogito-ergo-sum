import { Container, Row, Col } from "react-bootstrap";

export default function Quote () {

  return (
    <section>
      <Container className="quote-container my-5 py-5">
        <Row className="justify-content-center ">
          <Col sm={8} className="text-center">
           <p><q>The mind is not a vessel to be filled, but a fire to be kindled.</q></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}