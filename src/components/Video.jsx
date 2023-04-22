import { Container, Row, Col } from "react-bootstrap";

export default function Video () {

  return (
    <section>
      <Container className="p-0 video-container">
        <Row className="justify-content-center">
          <Col sm={8} className="button-effect">
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/CAjWUrwvxs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  )
}