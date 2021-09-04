import './FilmsDetails.css';
import {useLocation} from 'react-router'
import FilmCast from './FilmCast';

function FilmsDetails(){
    const location=useLocation();

    return (
    <div key={location.state.episode_id}  className='FilmseDetails_perent'>
      <div className='FilmsDetails'>
              <p className='FilmsDetails_title'><strong>{location.state.title}</strong></p>
              <p className='FilmsDetails_director'> Director: {location.state.director}</p>
              <p className='FilmsDetails_date'>producer : {location.state.producer}</p>
              <p className='FilmsDetails_date'>Release Date : {location.state.release_date}</p>
              <p className='FilmsDetails_date'>episode_id : {location.state.episode_id}</p>
              <p className='FilmsDetails_date'>opening_crawl : {location.state.opening_crawl}</p> 
              <FilmCast cast={location.state.characters}/>
      </div>
    </div>
    )
}
export default FilmsDetails;