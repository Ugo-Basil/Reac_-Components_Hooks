import './searchhistory.css'

import React from 'react'

export default function SearchHistory(props) {
  return (
      <ul>
          {props.terms.map((term) => (
              <li key={term}>{term}</li> 
          ))}
         
    </ul>
  )
}
