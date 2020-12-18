import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'cloudinary-react';

const CarouselItem = ({ item }) => (
  <>
    { item.images?.length === 0 && (
      <Image publicId="sample" cloudName="dhtysnpro" crop="scale" className="img-fluid" />
    )}
    { item.images && (
      <Carousel style={{ hight: 100 }}>
        { item.images.map((image, id) => (
          <Carousel.Item interval={1000} key={id}>
            <Image publicId={item?.images[id]} cloudName="dhtysnpro" crop="scale" className="img-fluid" />
          </Carousel.Item>
        ))}
      </Carousel>
    )}
  </>
);

export default CarouselItem;
