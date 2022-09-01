/* @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import StandardCSS from "../../../theme/standard-css";
import DefaultCss from "../../../theme/standard-default-css";
import StandardProps from "../../../theme/standard-props";

//Grid
const Grid = ({
  gridTemplateColumns,
  gridTemplateRows,
  noDefaultStyle,
  gridColumnGap,
  gridRowGap,
  children,
  addCss,
  ...styles
}: {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumnGap?: string;
  noDefaultStyle?: boolean;
  gridRowGap?: string;
  children?: any;
  addCss?: SerializedStyles;
} & StandardProps) => {
  return (
    <div
      css={css`
        -webkit-display: grid;
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        grid-template-rows: ${gridTemplateRows};
        grid-column-gap: ${gridColumnGap};
        grid-row-gap: ${gridRowGap};
        ${!noDefaultStyle && DefaultCss()}
        ${StandardCSS(styles)}
        ${addCss}
      `}
    >
      {children}
    </div>
  );
};

export default Grid;
