import React, { useState } from 'react';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import {Route, Link} from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const saved = savedList.find(el => el.title === movie.title)
    if (!saved) {
      setSavedList( [...savedList, movie] );
    } 
  };

  return (
    <div>
      <Link to='/savedList'><SavedList list={savedList} /></Link>
      <Route exact path = "/" component = {MovieList}/>
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} savedList={savedList} />}/>
    </div>
  );
};

export default App;