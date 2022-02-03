import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Auto() {
  return (
    <div className="App">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["apple", "orange"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}
