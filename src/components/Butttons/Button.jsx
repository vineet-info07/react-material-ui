/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Without using material UI Theme
// const MyStyledButton = styled(Button)({
//   color: "red",
//   backgroundColor: "blue",
//   borderRadius: 10,
//   padding: 8,
// });

// With material UI Theme

const MyStyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  padding: 8,
}));

//By Creating a reusdable component
const MyReusableButton = (props) => {
  return (
    <Button
      sx={{
        color: props.color,
        bgcolor: props.color === "#FFF" ? "#000" : "blue",
      }}
    >
      {props.children}
    </Button>
  );
};

const blueTextClass = {
  color: "blue",
  bgcolor: "red",
  borderRadius: 10,
};

function ButtonComp() {
  return (
    <>
      <Button sx={{ ...blueTextClass }} variant="contained">
        My New Button
      </Button>

      <Button
        // component="a"
        disabled
        variant="contained"
        sx={{
          "&.Mui-disabled": {
            color: "red",
          },
        }}
        onClick={() => console.log("Clicked Me!")}
      >
        My Button
      </Button>
      <MyStyledButton>Styled Button</MyStyledButton>
      <MyReusableButton color="#FFF">Reusable!</MyReusableButton>
    </>
  );
}

export default ButtonComp;
