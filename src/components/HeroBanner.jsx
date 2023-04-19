import { Container, Row, Col } from "react-bootstrap";

export default function HeroBanner () {

  return (
    <section>
      <Container fluid className="bg-danger">
        <Row>
          <Col className="text-center">
            Email: myemail@yolo.com
          </Col>
        </Row>
      </Container>
    </section>
  )
}