import React from 'react';
import { useParams } from 'react-router-dom';
import pagesMap from '../../consts/pagesMapper';

const PagesContainer = () => {
  let { slug } = useParams();
  slug = slug || '';
  
  const matchedPage = pagesMap[slug];
  const { page } = matchedPage;
  
  return (
    <main>
      {page}
    </main>
    );
  };
  
  export default PagesContainer;