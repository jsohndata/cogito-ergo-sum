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
             <p id="mozarts-ghost"><a href="https://system-overload-solution.web.app?ref=aef"
              rel="noreferrer"
              alt="Click on it and press control-shift."
              title="Click on it and press control-shift."
              target="_blank">π</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}