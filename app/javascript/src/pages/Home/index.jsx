import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { setUrl } from '../../api/api-manager';

import Hero from '../../components/Jumbotron';

const Home = () => {
  const history = useHistory();

  const [search, setSearch] = useState({ location: '' });

  const handleSearch = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/shopslist',
      state: { location: search },
    });
  };

  return (
  <main>
    <Hero />

    <Container fluid>
      <Row className='mt-5 justify-content-center'>
        <h5>Trouvez les boutiques proches de chez vous</h5>
      </Row>
      <Row className='mt-5 justify-content-center w-80'>
        <Form onSubmit={(event) => handleSearch(event)}>
          <Form.Group className="text-white">
            <Form.Control
              className="p-2"
              type="text"
              placeholder="Rechercher par ville (ou code postale)..."
              value={search.location}
              onChange={(event) => setSearch({ ...search, location: event.target.value })}
              />
          </Form.Group>
          <Button type="submit" className="btn_success_sass" variant="outline-success">Chercher</Button>
        </Form>
      </Row>
    </Container>
  </main>
  )
}

export default Home;
