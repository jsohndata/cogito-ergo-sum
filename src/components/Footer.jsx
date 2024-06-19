import { Container, Row, Col } from "react-bootstrap";
import { Github } from 'react-bootstrap-icons';

export default function Footer () {

  const gitHubUrl = "https://github.com/jsohndata/cogito-ergo-sum";

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">            
            <Github 
              color="black" 
              size={50} />
            <p><a href={gitHubUrl} 
              target="_blank"
              rel="noreferrer"
              className="button-effect"><small>Code in GitHub</small></a></p>
             <p id="mozarts-ghost"><a href="https://notiempo.lol/mozartsghost/9"
              rel="noreferrer"
              alt="Click on it and press control-shift."
              title="Click on it and press control-shift.">π</a></p>
          </Col>
        </Row>
      </Container>

      <p id="mozarts-ghost"><a 
        href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=9"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
    </footer>
  )
}