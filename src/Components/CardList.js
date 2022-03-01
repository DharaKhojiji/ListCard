import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import CardDisplay from "./CardDisplay";

import {
  TextField,
  CardContent,
  Card,
  Button,
  CardActions,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
const theme = createTheme({
  textField: {
    border: "2px solid green",
  },
});
const formData = [];
const CardList = (props) => {
  const [input, setInput] = useState('');
  const [descInput, setDescInput] = useState();
  const [date, setDate] = useState(new Date(""));
  const handleChange = (newValue) => {
    const newVal= newValue.getDate();
    const newYear = newValue.getYear()
    setDate(newValue);
  };
  const formHandler = (event) => {
    event.preventDefault();
    setDate("");
    setInput("");
    setDescInput("");
    formData.push({ name: input, desc: descInput, date: date });
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const descInputHandler = (e) => {
    setDescInput(e.target.value);
  };
  console.log(formData);

  return (
    <>
    <form onSubmit={formHandler}>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            maxWidth: 400,
            marginTop: "35px",
            marginLeft: "450px",
            borderRadius: "2px",
            backgroundColor: "#e9e9e9",
          }}
        >
          <CardContent>
            <p>Enter List Name </p>
            <TextField
              id="standard-basic"
              // label="Enter List"
              variant="outlined"
              onChange={inputHandler}
              value={input}
              type="text"
            ></TextField>
            <p>Enter List Details </p>
            <TextareaAutosize
              area-label="empty textarea"
              style={{ width: 200 }}
              minRows={3}
              value={descInput}
              onChange={descInputHandler}
            ></TextareaAutosize>
            <p>Enter List Date </p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <CardActions>
              <Button
                type="submit"
                sx={{ padding: "15px", marginLeft: "85px" }}
                variant="outlined"
              >
                Add
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </ThemeProvider>
    </form>

<CardDisplay formDatas={formData}/>

</>
  );
};


export default CardList;
