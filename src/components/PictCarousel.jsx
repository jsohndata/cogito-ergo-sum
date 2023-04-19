import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PictCarousel () {

  return (
    <section >
      <Container className="carousel-container">
        <Row>
          <Col className="p-0">
            <Carousel fade>
              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=1"
                  className="d-block w-100" 
                  alt="slide 1" />
                <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First item are great because they are the first. and I must learn to write better english.</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=2" 
                  className="d-block w-100" 
                  alt="slide 1" />
                <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First item are great because they are the first. and I must learn to write better english.</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=3"
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First item are great because they are the first. and I must learn to write better english.</p>
                </Carousel.Caption>  
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}