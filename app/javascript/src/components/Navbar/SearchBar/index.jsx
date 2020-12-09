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
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          handleSearch(search)
        }
      }}
    />
  </Form>
  )
}

export default SearchBar