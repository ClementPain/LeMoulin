import React from 'react';

import {
  Container, Card, CardDeck, Row,
} from 'react-bootstrap';

const AboutUsComponent = () => (

  <Container className="p-5">
    <Container>
      <h2 className="text-center mb-4">Comment ça marche</h2>
      <Card>
        <Card.Header className="text-center" style={{ backgroundColor: '#45B5AA' }}>
          <Card.Title className="text-white mt-2">Vous êtes commercant?</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header className="text-center" style={{ backgroundColor: '#45B5AA' }}>
          <Card.Title className="text-white mt-2">Vous êtes client?</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text />
        </Card.Body>
      </Card>
    </Container>

    <Container className="p-5">
      <h1>Our Team</h1>
      <p>
        The Best team from The Hacking Project
      </p>
    </Container>
    <Container>
      <CardDeck>
        <Card>
          {/* <Image cloudName="dhtysnpro" publicId="sample" width="300" crop="scale" /> */}
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Brahim</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Nazanin</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Karim</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.
              {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Clément</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  </Container>

);

export default AboutUsComponent;
