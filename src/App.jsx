// import { Button, Box } from "@mui/material";

import ThemeComponent from "./components/theme/ThemeComponent";
import "./App.css";
import ButtonComp from "./components/Butttons/Button";
import AppLayout from "./components/AppLayout";
import { Button, Checkbox } from "@mui/material";
import RadioGroupExample from "./components/RadioGroup/RadioGroupExample";

// const MySpecialBox = (props) => {
//   return (
//     <Box>
//       label:{props.label} {props.children}
//     </Box>
//   );
// };
function App() {
  return (
    // <div className="App">
    //   <h2>Hey There!</h2>
    //   <h3 style={{ color: "red" }}>Hello World!</h3>
    //   {/* <Button
    //     // component="a"
    //     sx={{ bgcolor: "green" }}
    //     variant="contained"
    //     disableElevation
    //     onClick={() => console.log("Clicked Me!")}
    //   >
    //     My Button
    //   </Button>

    //   <MySpecialBox label="MY BOX">
    //     <Button variant="contained">My Special Box</Button>
    //   </MySpecialBox> */}

    //   {/* <ThemeComponent /> */}
    //   <AppLayout />
    //   <ButtonComp />
    //   <Checkbox />
    //   <Checkbox color="secondary" />
    // </div>
    <>
      {/* <ButtonComp /> */}
      <RadioGroupExample />
    </>
  );
}

export default App;
