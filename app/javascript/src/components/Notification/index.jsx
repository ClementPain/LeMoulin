import React, { useState, useEffect } from 'react';

import { DropdownButton, ButtonGroup } from 'react-bootstrap';
import NotCard from './NotCard';

import { find } from '../../api/api-manager';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [newNot, setNewNot] = useState(0);
  const [updateNot, setUpdateNot] = useState([])

  useEffect(() => {
    find('notifications', {
      authRequired: true,
      onSuccess: (response) => {
        setNotifications([]);
        let nb = 0;
        response.map((not) => {
          setNotifications((previousArray) => [not, ...previousArray]);
          if (!not.read) nb++;
        });
        setNewNot(nb);
      },
    })
  }, [updateNot])

  return (
    <DropdownButton
      as={ButtonGroup}
      style={{width: 250}}
      drop='up'
      variant='outline-success'
      className='btn_success_sass'
      title={`Notifications (${newNot})`}
    >
      <div style={{width: 300, maxHeight: 400}} className="overflow-auto">
        { notifications?.length > 0 && notifications.map((not) => (
          <div key={not.id}>
            <NotCard not={not} updateNots={setUpdateNot} />
          </div>
        ))}
      </div>
    </DropdownButton>
  )
}

export default Notification;