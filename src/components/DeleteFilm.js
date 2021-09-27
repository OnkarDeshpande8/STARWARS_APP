import axios from "axios";

const DeleteFilm = (props) => {

  console.log(props.id)

  const filmID = (props.id.id !== null && props.id.id)
  const ApiLink ="http://localhost:3000/films/";
  // const ApiLink ="https://crudcrud.com/api/1e6c538576ff42efa4e80420f03d0f59/films/";
  const crudLink = ApiLink+filmID
  
  console.log(crudLink)
  const deleteFilm = async () => {
    const deletedFilm = await axios.delete(
        crudLink
    );
    console.log(deletedFilm);
  };
  return (
    <div>
      <button onClick={()=>deleteFilm()}>Delete Film</button>
    </div>
  );
};
export default DeleteFilm;
