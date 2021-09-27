import './FilmsDetails.css';
import {useLocation} from 'react-router'
import FilmCast from './FilmCast';
import DeleteFilm from './DeleteFilm';
import {Link} from "react-router-dom"; 


function FilmsDetails(){
    const location=useLocation();
    // console.log(location)

    return (
    <div key={location.state.episode_id}  className='FilmseDetails_perent'>
      <div className='FilmsDetails'>
              <p className='FilmsDetails_title'><strong>{location.state.title}</strong></p>
              <p className='FilmsDetails_director'> Director: {location.state.director}</p>
              <p className='FilmsDetails_date'>producer : {location.state.producer}</p>
              <p className='FilmsDetails_date'>Release Date : {location.state.release_date}</p>
              {/* <p className='FilmsDetails_date'>episode_id : {location.state.episode_id}</p> */}
              <p className='FilmsDetails_date'>opening_crawl : {location.state.opening_crawl}</p> 
              <FilmCast cast={location.state.characters}/>
              <Link style={{textDecoration: 'none'}} to={{ pathname:'/UpdateFilm' , state:{...location.state}}}>
              <button type="button" class="btn-lg btn-primary ">Update Film</button>
              </Link>
              <DeleteFilm id={location.state}/>
      </div>
    </div>
    )
}
export default FilmsDetails;