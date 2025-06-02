import { Button, Box } from "@mui/material";

const MySpecialBox = (props) => {
  return (
    <Box>
      label:{props.label} {props.children}
    </Box>
  );
};
function App() {
  return (
    <div>
      <h3>Hello World!</h3>
      <Button
        // component="a"
        sx={{ bgcolor: "green" }}
        variant="contained"
        disableElevation
        onClick={() => console.log("Clicked Me!")}
      >
        My Button
      </Button>

      <MySpecialBox label="MY BOX">
        <Button variant="contained">My Special Box</Button>
      </MySpecialBox>
    </div>
  );
}

export default App;
