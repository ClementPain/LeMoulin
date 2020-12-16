import React from 'react';
import { Image } from 'cloudinary-react';

const ItemImage = ({item}) => (
  <>
    { item.images && (
      <Image publicId={item?.images[0]} cloudName="dhtysnpro" crop="scale" className='img-fluid' />
    )}
    { item.images?.length === 0 && (
      <Image publicId='sample' cloudName="dhtysnpro" crop="scale" className='img-fluid' />
    )}
  </>
)

export default ItemImage