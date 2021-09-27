import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {ApiLinkContext} from "../App"


const AddFilm = (props) => {
  const [FilmData, setFilmData] = useState({
    title: "",
    opening_crawl:"",
    director: "",
    producer:"",
    release_date: "",
    characters:"",
    posterLink:""
  });

  const ApiLink =useContext(ApiLinkContext);
  // const ApiLink ="http://localhost:3000/films/";
  // const ApiLink ="https://crudcrud.com/api/1e6c538576ff42efa4e80420f03d0f59/films/";
  
  const addFilm = async () => {
    const addedFilm = await axios.post(
      ApiLink,
      FilmData
    );
    console.log(addedFilm);
  };
  const handleChange = (e) => {
    return setFilmData({ ...FilmData, [e.target.id]: e.target.value });
  };
  
  return (
    <div>
      <h1> Add Film </h1>
      <label htmlFor="title">Film Title</label><br/>
      <input type="text" name="title" id="title" onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="opening_crawl">opening_crawl</label><br/>
      <input type="text" name="opening_crawl" id="opening_crawl" onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="director">Film director</label><br/>
      <input type="text" name="director" id="director" onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="producer">Film producer</label><br/>
      <input type="text" name="producer" id="producer" onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="release_date">Film release_date</label><br/>
      <input type="date" name="release_date" id="release_date" onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="characters">Film characters</label><br/>
      <input type="text" name="characters" id="characters" onChange={(e) => handleChange(e)}/><br/><br/>
      <label htmlFor="posterLink">Film posterLink</label><br/>
      <input type="text" name="posterLink" id="posterLink" onChange={(e) => handleChange(e)}/><br/><br/>

      <button onClick={()=>addFilm()}>Save New Film</button>
    </div>
  );
};
export default AddFilm;
