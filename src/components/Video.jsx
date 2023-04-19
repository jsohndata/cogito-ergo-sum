import { Container, Row, Col } from "react-bootstrap";

export default function Video () {

  return (
    <section>
      <Container className="video-container">
        <Row>
          <Col>
            <h2>Video</h2>
            <p>Bunnies are great because they were the first to Hop to the Hip, hippidy hop.</p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Pbug3PgchsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  )
}