import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function RadioGroupExample() {
  const [value, setValue] = useState("");
  return (
    <>
      <h3>Start editing to see some magic happen!</h3>
      <FormControl disabled>
        <RadioGroup
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{
            "& .MuiFormControlLabel-label": {
              color: "red",
              fontFamily: "verdana",
              fontSize: "1.5rem",
            },
            "& .MuiRadio-root": {
              "&.Mui-checked": {
                color: "red",
              },
              "&.Mui-disabled": {
                color: "#343434",
              },
            },
          }}
        >
          <FormControlLabel
            value="first"
            labelPlacement="end"
            control={<Radio size="small" color="secondary" />}
            label="My value"
          />
          <FormControlLabel
            value="second"
            control={<Radio size="small" color="secondary" />}
            label="My value"
          />
          <FormControlLabel
            value="third"
            control={<Radio size="small" color="secondary" />}
            label="My value"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RadioGroupExample;
