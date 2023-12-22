// ServiceCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardGroup from 'react-bootstrap/CardGroup';

function LearningService() {

  return (
    <CardGroup>

      {/* Card 1 */}

      <Card>
        <Card.Img variant="top" src= {require('./polarIce.jpg')}/>
        <Card.Body>
          <Card.Title>Melting Polar Ice Caps</Card.Title>
          <Card.Text>
            Rising global temperatures are melting polar ice caps, contributing to sea-level rise and endangering coastal communities.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 hours ago</small>
        </Card.Footer>
      </Card>

      {/* Card 2 */}

      <Card>
        <Card.Img variant="top" src= {require('./GreenHouse.jpg')} />
        <Card.Body>
          <Card.Title>Greenhouse Gas Emissions</Card.Title>
          <Card.Text>
            Increased greenhouse gas emissions are driving climate change, disrupting weather patterns and ecosystems worldwide.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 15 mins ago</small>
        </Card.Footer>
      </Card>

      {/* Card 3 */}

      <Card>
        <Card.Img variant="top" src= {require('./Oceanacidification.jpg')}/>
        <Card.Body>
          <Card.Title>Ocean Acidification</Card.Title>
          <Card.Text>
             Ocean acidification, a consequence of climate change, poses a significant threat to marine life and biodiversity.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default LearningService;



