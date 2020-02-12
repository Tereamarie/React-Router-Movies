import React from 'react';
import { Link, NavLink } from "react-router-dom";


const SavedList = props => {
    
  return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id} className='link'>
            <span key={movie.id} className="saved-movie">
              {movie.title}
            </span>
          </NavLink>
        ))}
        <Link to="/" className="home-button link">
          Home
        </Link>
      </div>
    );
}

export default SavedList;
