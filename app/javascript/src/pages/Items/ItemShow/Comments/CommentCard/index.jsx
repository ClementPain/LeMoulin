import React from 'react';
import { Card } from 'react-bootstrap';

const CommentCard = ({comment}) => (
  <Card className='w-100 m-2' bg='secondary' text='dark'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>{comment.content}</p>
        <footer className="blockquote-footer">
          Le fameux <cite>{comment.profile.first_name} {comment.profile.last_name}</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
)

export default CommentCard;