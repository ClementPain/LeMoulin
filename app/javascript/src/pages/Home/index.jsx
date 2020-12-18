import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Hero from '../../components/Jumbotron';

const Home = () => {
  const history = useHistory();
  const [alert, setAlert] = useState(history.location.state?.alertPrivateRoute ? history.location.state.alertPrivateRoute : false)

  const [search, setSearch] = useState({ location: '' });

  const handleSearch = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/shopslist',
      state: { location: search },
    });
  };

  useEffect( () => {
    window.setTimeout(()=>{
      setAlert(false)
    }, 2000)
  }, [])

  return (
  <main>
    <Alert variant='danger' show={alert} >
      Vous n'avez pas accès à cette page
    </Alert>
    <Hero />

    <Container fluid>
      <Row className='mt-5 justify-content-center'>
        <h5>Trouvez les boutiques proches de chez vous</h5>
      </Row>
      <Row className='mt-5 justify-content-center'>
        <Col sm={8}>
          <Form onSubmit={(event) => handleSearch(event)}   >
            <Form.Group className="text-white">
              <Form.Control
                className="p-2"
                type="text"
                placeholder="Rechercher par ville (ou code postale)..."
                value={search.location}
                onChange={(event) => setSearch({ ...search, location: event.target.value })}
                />
            </Form.Group>
            <Row className='justify-content-center'>
              <Button
                type="submit"
                className="btn_success_sass" variant="outline-success"
                >
                Chercher
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </main>
  )
}

export default Home;
