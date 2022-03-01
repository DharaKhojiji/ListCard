import {
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import React from "react";

const CardDisplay = ({ formDatas }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "400px",
          maxHeight: "400px",
          marginTop: "35px",
          marginLeft: "450px",
          borderRadius: "2px",
          backgroundColor: "#e9e9e9",
        }}
      >
        <CardContent>
          {formDatas.map((e) => {
            console.log(e, "27");
            return (
              <div>
                <div>{e.name}</div>
                <div>{e.desc}</div>
                <div>{e.date.month}</div>
              </div>
            );
          })}

          <CardActions>
            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "15px", marginLeft: "85px" }}
            >
              View More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDisplay;
