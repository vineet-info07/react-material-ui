import GlobalTheme from "./theme/GlobalTheme";
import { Button } from "@mui/material";

function AppLayout() {
  return (
    <GlobalTheme>
      <Button sx={{ typography: "blueTextClass" }} variant="contained">
        Global Button
      </Button>
      <Button variant="text">Global Button</Button>
    </GlobalTheme>
  );
}

export default AppLayout;
