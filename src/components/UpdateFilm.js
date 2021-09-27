import { useState} from "react";
import axios from "axios";
import {useLocation} from 'react-router'
import {ApiLinkContext} from "../App"
import { useContext } from "react";


const UpdateFilm = () => {

  const ApiLink =useContext(ApiLinkContext)
  // const ApiLink ="http://localhost:3000/films/";
  // const ApiLink ="https://crudcrud.com/api/1e6c538576ff42efa4e80420f03d0f59/films/";

  const location=useLocation();
  console.log(location.state.id)

  const filmID = ((location.state.id !== undefined) &&location.state.id)
  const crudLink = ApiLink + filmID;
  console.log(crudLink)
  
  const [FilmData, setFilmData] = useState(location.state);
  console.log(FilmData)
  const updateFilm = async () => {
    try {
      delete FilmData._id
      console.log(FilmData)
      const updatedFilm = await axios.put(crudLink,FilmData); 
    } catch (error) {
      console.log(error)
      
    }
  };

  const handleChange = (e) => {
    return setFilmData({ ...FilmData, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <h1> Update Film </h1>
      <label htmlFor="title">Film Title</label><br/>
      <input type="text" name="title" id="title" value={FilmData.title} onChange={(e) => handleChange(e)}/><br/><br/>

      <label htmlFor="opening_crawl">opening_crawl</label><br/>
      <input type="text" name="opening_crawl" id="opening_crawl" value={FilmData.opening_crawl} onChange={(e) => handleChange(e)}/><br/><br/>

      <label htmlFor="director">Film director</label><br/>
      <input type="text" name="director" id="director" value={FilmData.director} onChange={(e) => handleChange(e)}/><br/><br/>

      <label htmlFor="producer">Film producer</label><br/>
      <input type="text" name="producer" id="producer" value={FilmData.producer}  onChange={(e) => handleChange(e)}/><br/><br/>

      <label htmlFor="release_date">Film release_date</label><br/>
      <input type="date" name="release_date" id="release_date" value={FilmData.release_date}  onChange={(e) => handleChange(e)}/><br/><br/>

      <label htmlFor="characters">Film characters</label><br/>
      <input type="text" name="characters" id="characters" value={FilmData.characters}  onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="posterLink">Film posterLink</label><br/>
      <input type="text" name="posterLink" id="posterLink" value={FilmData.posterLink}  onChange={(e) => handleChange(e)}/><br/><br/>

      <button onClick={() => updateFilm()}>Update Film</button>
    </div>
  );
};
export default UpdateFilm;
