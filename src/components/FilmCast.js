import FilmCastSub from "./FIlmcastSub";
import "./FilmCast.css"

function FilmCast(props){

    return (
        <div className='FilmCast'>
        <h1>Film Cast</h1>
        <div className='CastName'>{props.cast !== null && props.cast.map((cast) => {
            return (
                <FilmCastSub cast={cast}/>
                );
            })}
            </div>
        </div>
    );
}

export default FilmCast;