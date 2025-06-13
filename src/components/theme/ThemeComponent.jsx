import { Button } from "@mui/material";
import { useState } from "react";

function ThemeComponent() {
  const [open, setOpen] = useState(false);
  return (
    <Button
      // sx={{
      //   color: "#000",
      //   borderColor: (theme) => theme.typography.h1.color,
      //   bgcolor: "orange",
      //   // typography: "h6",
      //   // fontSize: "h3.fontSize",
      //   width: 1,
      //   maxWidth: "md",
      //   borderRadius: "8px",
      //   boxShadow: 4,
      //   // zIndex: "modal",
      //   zIndex: (theme) => theme.zIndex["modal"] + 1,
      // }}
      onClick={() => setOpen(!open)}
      // sx={(theme) => ({
      //   // ...theme.typography.h1,
      //   ...theme.typography.myCustomProperties,
      //   color: "#000",
      //   borderColor: (theme) => theme.typography.h1.color,
      //   // typography: "h6",
      //   // fontSize: "h3.fontSize",
      //   width: 1,
      //   maxWidth: "md",
      //   borderWidth: "2px",
      //   borderStyle: "solid",
      //   borderRadius: "8px",
      //   boxShadow: 4,
      //   bgcolor: open ? "red" : "green",
      //   // zIndex: "modal",
      //   zIndex: (theme) => theme.zIndex["modal"] + 1,
      // })}

      sx={[
        {
          color: "#000",
          borderColor: (theme) => theme.typography.h1.color,
          // typography: "h6",
          // fontSize: "h3.fontSize",
          width: 1,
          maxWidth: "md",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "8px",
          boxShadow: 4,
          bgcolor: { xs: "green", sm: "red" },
          // zIndex: "modal",
          zIndex: (theme) => theme.zIndex["modal"] + 1,
          "&:hover": {
            bgcolor: "cyan",
          },
          "& > span": {
            color: "brown",
          },
        },
        open && {
          bgcolor: "orange",
          fontSize: "2rem",
        },
      ]}
      variant="contained"
    >
      My Button &nbsp;<span>Click ME</span>
    </Button>
  );
}

export default ThemeComponent;
