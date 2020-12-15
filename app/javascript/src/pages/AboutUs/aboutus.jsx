import React from 'react';

import { Container, Card, CardDeck } from 'react-bootstrap';

import { Image } from 'cloudinary-react';

const AboutUsComponent = () => (

  <Container className="p-5">
    <Container>
      <h1>About us</h1>
      <p>
        We give you visibilty and assistance to showcase your store and implement Click & Collect
      </p>
      <div className="jumbotron text-center" style={{ backgroundColor: 'grey', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <p className="lead text-white">Our aim is to give visibility to small vendors to help them fight the Covid-19 period</p>
        <div className="my-4">
          <p className="text-white">It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
      </div>
    </Container>
    <Container>
      <h1>Our Team</h1>
      <p>
        The Best team from The Hacking Project
      </p>
    </Container>
    <Container>
      <CardDeck>
        <Card>
          <Image cloudName="dhtysnpro" publicId="sample" width="300" crop="scale" />
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
