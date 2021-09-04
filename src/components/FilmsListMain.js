import FilmsList from "./FilmsList";
import { useState, useEffect } from "react";
import axios from "axios";

function FilmsListMain(){
    const [starWarchar, setstarwarchar] = useState(null);

    useEffect(() => {
      axios
        .get("https://swapi.dev/api/films/")
        .then((response) => {
        //   console.log(response);
          setstarwarchar(response.data.results);
        })
        .catch((e) => console.log("we get error"));
    }, []);

    return (
        <div>
        <FilmsList starWarchar={starWarchar}/>
      </div>

    )
}
export default FilmsListMain;