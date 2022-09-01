/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "./theme";

/**
 * Function that sets all the default theme styles
 * Is overriden by values in the StandardCss file if specified
 * Allows more control when forcing some components that do not need any default themes applied to them
 * @returns void
 */
const DefaultCss = () => {
  return css`
    color: inherit;

    //MARGINS
    margin: ${theme.margins.s};
    margin-top: ${theme.margins.s};
    margin-right: ${theme.margins.s};
    margin-bottom: ${theme.margins.s};
    margin-left: ${theme.margins.s};

    //PADDING
    padding: ${theme.margins.s};
    padding-top: ${theme.margins.s};
    padding-right: ${theme.margins.s};
    padding-bottom: ${theme.margins.s};
    padding-left: ${theme.margins.s};
    //BORDER RADIUS
    border-radius: ${theme.borderRadius.normal};

    //FONTS
    font-size: ${theme.fontSizes.normal};
    font-family: "Roboto";

    //LAYOUT

    //BACKGROUND

    //POSITION

    //ALIGNMENT

    //Border
    //shadow
    box-shadow: initial;
  `;
};

export default DefaultCss;
