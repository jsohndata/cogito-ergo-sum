import { Container, Row, Col } from "react-bootstrap";

export default function Grid () {

  return (
    <section>
      <Container className="grid-container">
        <Row className="g-5">
          <Col sm={12} md={4}>
            <h2 className="text-center">Why BocaCode?</h2>
            <p>Being a software engineer allows individuals to harness the power of technology and use it to create innovative solutions to complex problems in order to develop new ways to make people's lives easier and more efficient.</p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center">Exciting Project?</h2>
            <p>Pursuit of knowledge and understanding was essential to human happiness and flourishing. I value the practical application of scientific knowledge in improving human life.</p>
          </Col>

          <Col>
            <h2 className="text-center">Ideal Work Place?</h2>
            <p>An environment where intellectual inquiry, encourages ongoing learning and growth, and fosters a culture of creativity and collaboration.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}