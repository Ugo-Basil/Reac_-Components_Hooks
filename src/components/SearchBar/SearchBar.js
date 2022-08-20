import './searchbar.css'

// import React, {useState} from 'react'




export default function SearchBar(props) {

  // const [term, setTerm] = useState(' ')

    function submitted(ev) {
        ev.preventDefault()
      console.log('submitted');
    //  
      
      props.addTerm(ev.target['keyword'].value)
      
    }

    function focused(ev) {
        console.log('focused')
    }

    function changed(ev) {
      console.log('onInput', ev.target.value);  
    }


    function clicked(ev) {
        // ev.preventDefault()
        console.log('clicked');
    }

  return (
      <section className='searchBar'>
        <form onSubmit={submitted}>
              <input type='text' name='keyword' className='searchText' placeholder='keyword' onFocus={focused} onInput={changed} />
        <button type='submit' className='searchBtn' name='searchBtn' onClick={clicked}>Search</button>
        
      </form>
      
      {props.term ? <p>You searched for {props.term}</p> : '' }
          
    </section>
  )
}

