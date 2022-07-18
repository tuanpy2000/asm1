import React from 'react'
import { useState, useMemo, useEffect, useCallback } from 'react'
import axios from 'axios'

const SearchBox = React.memo((props) => {
  console.log('rerender searchbox')
  const handleSearchInputChange = (e) => {
    console.log(e.target.value)
    props.onSearch(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleSearchInputChange}></input>
    </div>
  )
})

export default function Demo(props) {
  console.log('rerender cha')
  const [count, setCount] = useState(0)
  const handleSearch = useCallback(
    (value) => {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=` + value)
        .then((rs) => {
          console.log(rs)
        })
        .catch((err) => {
          alert(err)
        })
    }, []
  )


  return (
    <div>
      usecallback
      <button onClick={() => setCount(count + 1)}>+</button>
      <SearchBox onSearch={handleSearch} />
    </div>
  )
}
