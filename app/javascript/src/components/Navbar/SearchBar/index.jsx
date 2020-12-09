import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (keyword) => {
    if (keyword.length > 0) {
      history.push(`/items/${keyword}`)
    } else {
      history.push('/items')
    }
  }

  return (
  <Form inline>
    <FormControl
      type="text"
      placeholder="Rechercher un produit"
      className="mr-sm-2"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
    <Button
      variant="outline-success"
      onClick={() => handleSearch(search)}
    >
      OK
    </Button>
  </Form>
  )
}

export default SearchBar