import React, { useEffect, useState } from 'react';
import axios from "axios";
import ExportFilms from './ExportFilms';
import ReadFilms from './ReadFilms';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AdminFilmList() {
  const classes = useStyles();

  const [starWarchar, setstarwarchar] = useState(null);
  useEffect(() => {
    const ApiLink ="http://localhost:3000/films/";
    // const swapi = "https://swapi.dev/api/films/"
    axios
      .get(ApiLink)
      .then((response) => {
        // console.log(response.data);
        setstarwarchar(response.data);
      })
      .catch((e) => console.log("we get error"));
  }, []);
  // console.log(starWarchar)

  return (
    <div>
      <ExportFilms starWarchar={starWarchar}/>
    
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">opening_crawl</TableCell>
            <TableCell align="right">director</TableCell>
            <TableCell align="right">producer</TableCell>
            <TableCell align="right">release_date</TableCell>
            <TableCell align="right">characters</TableCell>
            <TableCell align="right">posterLink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {starWarchar && starWarchar.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.opening_crawl}</TableCell>
              <TableCell align="right">{row.director}</TableCell>
              <TableCell align="right">{row.producer}</TableCell>
              <TableCell align="right">{row.release_date}</TableCell>
              <TableCell align="right">{row.characters}</TableCell>
              <TableCell align="right">{row.posterLink}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
      <ReadFilms starWarchar={starWarchar}/>
    
    </div>
  );
}
