import React, { useState, useEffect } from 'react';

import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import NotCard from './NotCard';

import { find, update } from '../../api/api-manager';

const Notification = () => {
  const [notifications, setNotifications] = useState(null);
  const [newNot, setNewNot] = useState(0);
  const [updateNotList, setUpdateNotList] = useState({})

  useEffect(() => {
    find('notifications', {
      authRequired: true,
      onSuccess: (response) => {
        setNotifications([]);
        setNewNot(0);
        response.map((not) => {
          setNotifications((previousArray) => [not, ...previousArray]);
          if (!not.read) setNewNot(newNot + 1);
          console.log(not)
          console.log(newNot)
        });
      },
    })
  }, [updateNotList])

  if (!notifications) return <p>Notification</p>

  return (
    <DropdownButton
      as={ButtonGroup}
      style={{width: 250}}
      drop='up'
      variant='outline-success'
      className='btn_success_sass'
      title={`Notifications (${newNot})`}
    >
      { notifications.map((not) => (
        <div key={not.id} style={{width: 300}}><NotCard not={not} updateList={setUpdateNotList} /></div>
      ))}
    </DropdownButton>
  )
}

export default Notification;