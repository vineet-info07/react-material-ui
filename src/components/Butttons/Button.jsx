/* eslint-disable no-unused-vars */
import { Button, buttonClasses } from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";

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

const CustomButton = styled(Button)(({ theme, ...ownerState }) =>
  theme.unstable_sx({
    [`&.${buttonClasses.contained}`]: {
      bgcolor: "customColors.royalBlue",
      boxShadow: (theme) => theme.shadows[10],
      color: ownerState.size === "small" ? "#fff" : "#000",
      fontSize: "2rem",
      mb: { xs: 4, sm: 3, md: 2, lg: 1, xl: 0 },
      "&:hover": { bgcolor: "#343434" },
      "&.Mui-disabled": { color: "#000" },
    },
  })
);

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
        sx={{
          color: "customColors.royalBlue",
          bgcolor: "cyan",
          boxShadow: (theme) => theme.shadows[15],
          mb: { xs: 4, sm: 3, md: 2, lg: 1, xl: 0 },
        }}
        variant="contained"
      >
        Setting custom Theme
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
      <CustomButton size="small">Custom Button</CustomButton>

      <Button size="small" variant="outlined" myCustomProp>
        My New Custom Button
      </Button>
    </>
  );
}

export default ButtonComp;
