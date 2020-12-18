/* eslint-disable max-len */
import React from 'react';

import {
  Container, Card, CardDeck, Row
} from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import Image1 from './Brahim.jpg';
import Image2 from './Nazanin.jpeg';
import Image3 from './Clement.png';
import Image4 from './Karim.png';

const AboutUsComponent = () => (

  <Container className="p-5">
    <Container>
      <h3 className="text-center mb-4">Comment ça marche</h3>
      <Card>
        <Card.Header className="text-center" style={{ backgroundColor: '#45B5AA' }}>
          <Card.Title className="text-white mt-2">Vous êtes commercant?</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-dark p-2">
            Créez votre boutique en ligne, ajoutez vos produits et mettez les en valeurs auprès de votre clientèle !
            Vos futurs clients peuvent ainsi découvrir les nouveautés de votre magasin et les commander en ligne.
            Vous êtes informé en tant réel de toutes les commandes et pouvez ajuster facilement vos stocks.
            Un système intuitif et efficace pour valoriser votre enseigne !
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header className="text-center" style={{ backgroundColor: '#45B5AA' }}>
          <Card.Title className="text-white mt-2">Vous êtes client?</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-dark p-2">
            Faites du shopping dans les boutiques proches de chez vous !
            Le Moulin est une plateforme en ligne destinée à valoriser les commerces de proximité
            Découvrez les nouveaux produits de votre région, commandez les et récupérez les auprès des commerçants !
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

    <Container className="p-5">
      <h3 className="text-center">Notre équipe</h3>
      <p className="text-center">
        La meilleure équipe de The Hacking Project Next
      </p>
    </Container>
    <Container>
      <CardDeck>
        <Card className="text-center">
          <Row className='justify-content-center'>
            <Image src={Image1} style={{ height: 200, width: 200 }} roundedCircle />
          </Row>
          <Card.Body>
            <Card.Title>Brahim Ouinten</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Row className='justify-content-center'>
            <Image src={Image2} style={{ height: 200, width: 200 }} roundedCircle className="text-center" />
          </Row>
          <Card.Body>
            <Card.Title>Nazanin Farshad</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Row className='justify-content-center'>
            <Image src={Image3} style={{ height: 200, width: 200 }} roundedCircle className="text-center" />
          </Row>
          <Card.Body>
            <Card.Title>Clement Pain</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Row className='justify-content-center'>
            <Image src={Image4} style={{ height: 200, width: 200 }} roundedCircle className="text-center" />
          </Row>
          <Card.Body>
            <Card.Title>Karim Fathi</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  </Container>

);

export default AboutUsComponent;
