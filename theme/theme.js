import { createGlobalStyle } from "styled-components";

const theme = {
  borderRadius: "5px",

  colors: {
    main: "#0000002e",
    secondary: "#ffa50066",
    grey: "#00000047",
  },
};

export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
export default theme;
