// import { Button } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { useState } from "react";
import XLSX from "xlsx";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ReadFilms = () => {
  const classes = useStyles();
  const [fileUploaded, setFileUploaded] = useState(null);

  //read excel files
  const handleUpload = (e) => {
    e.preventDefault();
    var files = e.target.files,
      f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 0 }); // for array = { header: 1 } , for object ={ header: 0 }
      setFileUploaded(dataParse);
    };
    reader.readAsBinaryString(f);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <input
          type="file"
          name="uplodeExcel"
          id="uplodeExcel"
          onChange={(e) => handleUpload(e)}
        />
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {fileUploaded &&
                Object.keys(fileUploaded[0]).map((heading) => (
                  <TableCell align="right">{heading}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {fileUploaded &&
              fileUploaded.map((row) => (
                <TableRow>
                  {/* {Object.keys(fileUploaded[0]).map((heading1) => (
                    <TableCell align="right">{row.a}</TableCell>
                    ))} */}
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.opening_crawl}</TableCell>
                    <TableCell align="right">{row.director}</TableCell>
                    <TableCell align="right">{row.producer}</TableCell>
                    <TableCell align="right">{row.release_date}</TableCell>
                    <TableCell align="right">{row.characters}</TableCell>
                    <TableCell align="right">{row.posterLink}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ReadFilms;
