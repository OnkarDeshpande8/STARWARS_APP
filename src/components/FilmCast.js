import FilmCastSub from "./FIlmcastSub";
import "./FilmCast.css"

function FilmCast(props){
    // const cast = ((props.cast !== null) &&  props.cast.split(','))
    const cast =((props.cast !== null) && (props.cast.replace(/ /g,'').replace(/"/g,'').split(',')))

    return (
        <div className='FilmCast'>
        <h1>Film Cast</h1>
        <div className='CastName'>
            {/* {props.cast !== null && props.cast.map((cast1) => { */}
            {cast !== null && cast.map((cast1) => {
            return (
                <>
                <FilmCastSub cast={cast1}/>
                </>
                );
            })}
            </div>
        </div>
    );
}

export default FilmCast;