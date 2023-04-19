import { Container, Row, Col } from "react-bootstrap";

export default function Grid () {

  return (
    <section>
      <Container className="grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2 className="text-center">Why BocaCode?</h2>
            <p>I'm sorry, but I'm not sure what you are referring to when you say "bocacode." Could you please provide more context or information so I can better understand your question and provide a helpful response?</p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center">Exciting Project?</h2>
            <p>That sounds great! I'm happy to hear that you have an exciting project in mind. Can you please provide more details about your project? Knowing more about your project will allow me to provide more specific and helpful advice.</p>
          </Col>

          <Col>
            <h2 className="text-center">Ideal Work Place?</h2>
            <p>The ideal workplace can vary depending on an individual's preferences, work style, and personal values. However, here are some common factors that people often consider when thinking about their ideal workplace</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}