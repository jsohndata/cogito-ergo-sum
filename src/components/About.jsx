import { Col, Container, Row } from "react-bootstrap";

export default function About () {

  return(
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img src="https://picsum.photos/300/300"
             className="rounded-circle"
             alt="Profile" />
          </Col>

          <Col>
            <h1 className="mt-3">Your Name</h1>
            <p>If you enjoy using big fonts, you're not alone! There are many reasons why someone might prefer larger text when reading or writing. For example, larger fonts can make text easier to read, especially for people with visual impairments or those who struggle with reading small text. Additionally, big fonts can help draw attention to important information, making it easier to spot and understand.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}