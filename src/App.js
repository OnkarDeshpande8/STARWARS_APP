import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FilmsListMain from "./components/FilmsListMain";
import FilmsDetails from "./components/FilmsDetails";
import AddFilm from "./components/AddFilm";
import UpdateFilm from "./components/UpdateFilm";
import AdminFilmList from "./pages/AdminFilmList";
import ExcelFiles from "./pages/ExcelFiles";
// import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();
export const ApiLinkContext = createContext("http://localhost:3000/films/");

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  // console.log(darkTheme);

  // function toggleTheme() {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  // }

  return (
    <div style={{ backgroundColor: darkTheme ? "grey" : "white" }}>
      <ThemeContext.Provider value={{darkTheme ,setDarkTheme}}>

        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand " href="/">
                  FILMOpedia
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/AddFilm">
                        Add Film
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/admin/FilmList">
                        Admin Film List
                      </a>
                    </li>                    
                    <li className="nav-item">
                      <a className="nav-link" onClick={()=>setDarkTheme((prevDarkTheme) => !prevDarkTheme)}>
                        Dark Mode
                      </a>
                    </li>
                  </ul>

                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>

            <Switch>
              <Route path="/AddFilm">
                <AddFilm />
              </Route>
              <Route path="/UpdateFilm">
                <UpdateFilm />
              </Route>
              <Route path="/FilmsDetails">
                <FilmsDetails />
              </Route>

              <Route path="/admin/FilmList">
                <AdminFilmList />
              </Route>
              <Route path="/admin/ExcelFiles">
                <ExcelFiles />
              </Route>

              <Route path="/">
                <FilmsListMain />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
