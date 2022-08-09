import { createGlobalStyle } from "styled-components";

const theme = {
  borderRadius: "5px",

  colors: {
    main: "#02b6fb",
    secondary: "#ffa50066",
    secondaryBold: "#ffa500",
    grey: "#00000047",
  },
};

export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
export default theme;
