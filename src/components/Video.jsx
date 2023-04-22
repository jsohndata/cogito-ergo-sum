import { Container, Row, Col } from "react-bootstrap";

export default function Video () {

  return (
    <section>
      <Container className="video-container">
        <Row>
          <Col>
            <p>Bunnies are great because they were the first to Hop to the Hip, hippidy hop.</p>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/CAjWUrwvxs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  )
}