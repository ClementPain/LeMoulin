import React from 'react';

import {
  Container, Card, CardDeck, Row,
} from 'react-bootstrap';

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
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Brahim</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
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
          <Card.Footer className="text-center">
            <small className="text-muted">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Clément</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.
              {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-muted text-center">THP Next session 14</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Karim</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
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
