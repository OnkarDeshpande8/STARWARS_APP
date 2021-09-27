import { useState, useEffect } from "react";
import axios from "axios";

function FilmCastSub(props) {
  const [actor, setactor] = useState(null);
  useEffect(() => {
    axios
      .get(props.cast)
      .then((response) => {
        setactor(response.data);
      })
      .catch((e) => console.log("we get error"));
  }, []);

  let styele1 = {
    border: "5px solid black",
    padding: "10px",
    // margin: "50px",
    margin: "20px",
    hight: "200px",
    width: "300px",
  };
  return (
    <div style={styele1}>
      {actor !== null && <p>{actor.name}</p>}
    </div>
  );
}
export default FilmCastSub;
