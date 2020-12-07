import React, { useState, useEffect } from 'react'

const ShopsCategoriesList = () => {
  const [shopsCategoriesArray, setShopsCategoriesArray] = useState([])

  useEffect( () => {
    fetch('api/v1/shops_categories')
      .then((response) => response.json())
      .then((response) => {
        response?.map( (category) => {
          setShopsCategoriesArray(previousArray => [category, ...previousArray])
        })
      })
  }, []);

  return (
  <main>
    <h4>Voici la liste des catégories</h4>

    <div>
        <div>
          { shopsCategoriesArray.map( (cat) => (
            <div key = {cat.id}>
              <p>{ cat.title }</p>
            </div>
          )
          )}
        </div>
      </div>
  </main>
  )
}

export default ShopsCategoriesList