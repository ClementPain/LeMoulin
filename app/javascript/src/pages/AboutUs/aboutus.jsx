/* eslint-disable max-len */
import React from 'react';

import {
  Container, Card, CardDeck,
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
            Il peut créer sa boutique en ligne sur le site pour gagner en visibilité auprès de ses clients
            et augmenter ses ventes.
            Il indique sur le site les produits qu'il a en stock et reçoit une alerte (mail, alerte interne au site, sms...)
            dès qu'une commande est passée. Les stocks sont automatiquement décrémentés.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header className="text-center" style={{ backgroundColor: '#45B5AA' }}>
          <Card.Title className="text-white mt-2">Vous êtes client?</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-dark p-2">
            L'utilisateur crée un compte
            Il peut naviguer dans l'application pour rechercher des informations sur les commerces autour de chez lui.
            Il peut faire un tri par produit, type de commerce, lieu...
            Il peut commander et payer directement sur le site puis aller chercher son produit dans le magasin.
            Si besoin il peut contacter par message le commerçant pour plus d'information.
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
          <Image src={Image1} style={{ height: 200, width: 200 }} roundedCircle />
          <Card.Body>
            <Card.Title>Brahim Ouinten</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Image src={Image2} style={{ height: 200, width: 200 }} roundedCircle className="text-center" />
          <Card.Body>
            <Card.Title>Nazanin Farshad</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Image src={Image3} style={{ height: 200, width: 200 }} roundedCircle className="text-center" />
          <Card.Body>
            <Card.Title>Clement Pain</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Image src={Image4} style={{ height: 200, width: 200 }} roundedCircle className="text-center" />
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
