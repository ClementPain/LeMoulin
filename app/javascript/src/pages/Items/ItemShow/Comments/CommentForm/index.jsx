import React, {useState} from 'react';
import { Form, Button, Row } from 'react-bootstrap';

import { create } from '../../../../../api/api-manager';

const CommentForm = ({item_id, update_comments}) => {
  const [content, setContent] = useState('');

  const handleSubmit = (data, event, item_id) => {
    event.preventDefault();
    create(`items/${item_id}/comment_on_items`, {
      data: {"comment_on_item": { "content": data } },
      onSuccess: () => update_comments(1)
    })
  }

  return (
  <Form onSubmit={(event) => handleSubmit(content, event, item_id)}>
    <Form.Group>
      <Form.Label>Ajouter un commentaire</Form.Label>
      <Form.Control
        as="textarea" row={4}
        className="text-input" placeholder="J'adore !..."
        maxlength={300}
        value={content} onChange={(e) => setContent(e.target.value)}
      />
      <Row className='justify-content-center mt-5'>
        <Button type='submit'>Publier</Button>
      </Row>
    </Form.Group>
  </Form>
  )
}

export default CommentForm;