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



const ExcelFiles = () => {
  const [starWarchar, setstarwarchar] = useState(null);
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
  console.log(fileUploaded);



  useEffect(() => {
    const ApiLink = "http://localhost:3000/films/";
    // const swapi = "https://swapi.dev/api/films/"
    axios
      .get(ApiLink)
      .then((response) => {
        setstarwarchar(response.data);
      })
      .catch((e) => console.log("we get error"));
  }, []);

  return (
    <div>
      <h1>Excel files</h1>

      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Button style={{ backgroundColor: "black", color: "white" }} onClick={() => exportJS(starWarchar)}>Export Data</Button>
      </div>

      <div style={{textAlign:'center', marginTop: 50 }}>
        <input type="file" name='uplodeExcel' id='uplodeExcel' onChange={(e)=> handleUpload(e)}/>
      </div>
    </div>
  );
};
export default ExcelFiles;
