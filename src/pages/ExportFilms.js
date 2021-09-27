import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import XLSX from "xlsx";

const exportJS = (starWarchar) => {
  const data = starWarchar;
  const fields = Object.keys(data[0]);

  const wb = XLSX.utils.book_new(); // create a workbook
  const ws = XLSX.utils.json_to_sheet(data, { header: fields }); // take json data and create a excel sheet
  const ws1 = XLSX.utils.json_to_sheet(data, { header: fields }); // take json data and create a excel sheet

  XLSX.utils.book_append_sheet(wb, ws, "My sheet");
  XLSX.utils.book_append_sheet(wb, ws1, "My sheet1");
  XLSX.writeFile(wb, "exportedData.xlsx"); // this is the name of excel file
};


const ExportFilms = (props) => {
  return (
    <div>
      <div style={{ textAlign: "right", margin: 30 }}>
        <Button size="large" style={{ backgroundColor: "black", color: "white" }} onClick={() => exportJS(props.starWarchar)}>Export Data</Button>
      </div>
    </div>
  );
};
export default ExportFilms;
