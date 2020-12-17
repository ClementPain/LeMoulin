import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { find } from '../../../../api/api-manager';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

const CommentsOnItem = ({ item }) => {
  const [listComments, setListComments] = useState(null);
  const [newComment, setNewComment] = useState(0);

  useEffect(() => {
    find(`items/${item.id}/comment_on_items`, {
      onSuccess: (response) => {
        console.log(response)
        setListComments([]);
        response?.map((comment) => setListComments((previousArray) => [...previousArray, comment]));
      }
    })
  }, [newComment]);

  if (!listComments) return <p>Chargement des commentaires...</p>

  return (
  <Container fluid>
    <Card id='comments_on_item' text='white'>
      <Card.Header as="h5" className='p-4'>Commentaires</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={7}  style={{ width: '100%', height: 400 }} className="overflow-auto">
            { listComments.map( (comment) => (
              <Row key={comment.id}>
                <CommentCard comment={comment} />
              </Row>
              ))}
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}>
            <CommentForm item_id={item.id} update_comments={setNewComment} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
  )
}

export default CommentsOnItem