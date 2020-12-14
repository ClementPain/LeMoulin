import React from 'react';
import { useState } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import { update } from '../../../api/api-manager';

const UserPersoInfosUpdater = () => {
    
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")
  
  
  const uploadAvatar = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'images_le_moulin')
    setLoading(true)

    const response = await fetch("https://api.cloudinary.com/v1_1/dhtysnpro/image/upload", 
    {
      method: 'POST',
      body: data
    })

    const file = await response.json()
    console.log(file)

    update('profiles.avatar')


    setImage(file.secure_url)
    setLoading(false)
  }
    
    return(
      <div className = "Upload">
        <h1>Upload Avatar</h1>
        <input type="file" name="file" placeholder="Upload your avatar"
        onChange={uploadAvatar}/>
      </div>
    )
    
};



export default UserPersoInfosUpdater;
