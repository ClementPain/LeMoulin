import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormControl, Button } from 'react-bootstrap'

const SearchBar = () => {
  let history = useHistory()

  const [search, setSearch] = useState('')

  const handleSearch = (keyword) => {
    if (keyword.length > 0) {
      history.push({
        pathname: `/itemslist/search/${keyword}`,
        state: { keyword: keyword }
      })
      history.go(0)
    } else {
      history.push('/itemslist')
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