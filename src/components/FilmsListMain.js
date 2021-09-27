import FilmsList from "./FilmsList";
import { useState, useEffect } from "react";
import axios from "axios";
import {ThemeContext} from "../App"
import {ApiLinkContext} from "../App"
import { useContext } from "react";

function FilmsListMain(props) {
  const [starWarchar, setstarwarchar] = useState(null);

  const {darkTheme, setDarkTheme} = useContext(ThemeContext)
  // console.log(darkTheme);  

  const ApiLink1 = useContext(ApiLinkContext)
  useEffect(() => {
    const ApiLink =ApiLink1;
    // const ApiLink ="http://localhost:3000/films/";
    // const ApiLink ="https://crudcrud.com/api/1e6c538576ff42efa4e80420f03d0f59/films/";
    // const swapi = "https://swapi.dev/api/films/"
    axios
      .get(ApiLink)
      .then((response) => {
        // console.log(response.data);
        setstarwarchar(response.data);
      })
      .catch((e) => console.log("we get error"));
  }, []);

  return (
    <div>
      {/* <button  onClick={()=>setDarkTheme((prevDarkTheme) => !prevDarkTheme)}>Dark Mode</button>   */}
      <FilmsList starWarchar={starWarchar} />
    </div>
  );
}
export default FilmsListMain;
