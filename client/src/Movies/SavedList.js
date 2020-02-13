import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = (props) => {
 
console.log(props)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <Link to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link>
        ))}
        <Link to='/' className="home-button">Home</Link>
        
      
      </div>
    );
  }
export default SavedList