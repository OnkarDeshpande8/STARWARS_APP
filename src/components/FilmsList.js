import './FilmsList.css'
import {Link} from "react-router-dom";

function FilmsList(props) {
  return (
    <div className='FilmsList_perent'>
      {props.starWarchar !== null &&
        props.starWarchar.map((char) => {
          return (
            <Link style={{textDecoration: 'none'}} to={{ pathname:'/FilmsDetails' , state:{...char}}}>
            <div  key={char.episode_id} className='FilmsList'>
              {/* <img id='poster' src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/star-wars-episode-iv-a-new-hope-et00065559-21-11-2017-12-04-14.jpg" alt='movie poster'></img> */}
              {/* <img classname='poster' src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-balkan-line-et00312484-14-08-2021-06-49-05.jpg" alt='movie poster' style={{padding: "5px",width: "150px"}}></img> */}
              <img id='poster' src={char.posterLink} alt='movie poster'></img>
              <p className='FilmsList_title'><strong>{char.title}</strong></p>
              <p className='FilmsList_director'><b> Director : </b> {char.director}</p>
              <p className='FilmsList_date'><b>Release Date : </b> {char.release_date}</p>
            </div>
            </Link>
          );
        })}
    </div>
    
  );
}
export default FilmsList;
