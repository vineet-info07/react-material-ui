# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# react-material-ui

# SX prop

- SX prop is material UI System prop.
- Which used to apply styles to each MUI component
- It is similar to style={{}} tag to the regular componenet or html element or you can define css styles.
- How ever SX props is cnonsider as superset of css.
- Meaningly support any valid css in addition to extra style functionality there regular css can't do.
- They also integrated with Material UI theme , whether it is default theme or custom theme in ways they makes apply styles throughout your application extremely easy and consistant.
- It has special shorthand properties which we can use example:

  - backgroundColor : bgcolor ,
  - margin: m,
  - marginBottom: mb,
  - marginLeft, marginRight: mx,
  - marginTop, marginBottom :my,
  - padding: p,
  - typegraphy - this property used to set multiple properties on this
  - fontSize:"h1.fontSize" -> theme.typography.h1.fontSize
  - fontSize: "h6.fontSize"
  - fontSize: 10 => fontSize: "10px"
  - width/height : [0,1] -> %,
  - width/height: 50 -> "50px"
  - width/height: "25rem"-> "25rem"
  - colo: "primary.main -> "theme.palette.primary.main
  - maxWidth:"md" -> theme.breakpoints.values["md"]
  - borderRadius: 4 -> `theme.shape.borderRadius * 4( val)`
  - boxShadow/ dropShadow : 20 -> theme.shadow[20]
  - zIndex: "modal" ->theme.zIndex["modal"]
  - zIndex: (theme) => theme.zIndex["modal"] + 1,

  # Styling Concepts Framework

  # Step 0: Identify what component you want to style

  # Step 1: Use the element inspector to find the specific DOM element containing the style you want to customize

  # Step 2: Identify the class causing the specific style

  # Step 3: Determine whether that class is on the component's root element or nested subcomponent.

  - # Step 3.1:If on a component, check if there's a shortcut with a ComponentProps prop or Component Prop

  <Autocomplete ChipProps={{... }} />
  <Autocomplete PaperComponent={{... }} />

  # Step 4:if it is on root element then add styles directly in sx prop on that component

  - # Step 4.1 : if it is on nested subcomponent then create a selector targetting that component's class and add styles there

  - # Step 4.2 : If its a state class like disabled, checked, expanded then add that class to the selector

  # Step 5:Make sure your selector follows the ampersand rule

  # TheAmpersand Rule

- If the class on the component itself then no space after the ampersand, if a class is on child element within component then include space

- sx={{"&.Mui-disabled":{...}}} (no space = on element)

- sx={{"& .MuiMenu-Paper":{...}}} (with space = inside element)
