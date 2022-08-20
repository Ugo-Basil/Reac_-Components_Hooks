import './searchresults.css'
import React,{useEffect} from 'react'

export default function SearchResults(props) {

    useEffect(() => {
        console.log('initial render only');
    },[]);

    useEffect(() => {
       console.log('initial and re-render of films'); 
    }, [props.films])
  return (
    <ul className='results'>
        {
            props.films.map(film => (
                <li key={film.episode_id}>{film.title}</li>
            ))
        }
    </ul>
  )
}
