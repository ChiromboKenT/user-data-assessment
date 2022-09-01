/* @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import StandardProps from "../../../theme/standard-props";
import StandardCSS from "../../../theme/standard-css";
import DefaultCss from "../../../theme/standard-default-css";
import { MouseEventHandler } from "react";

export const Flex = ({
  //Here we have component specific props, and their types
  addCss,
  flexWrap,
  children,
  flexDirection,
  justifyContent,
  noDefaultStyle,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  onHover,
  onClick,
  ...styles
}: {
  children?: any;
  justifyContent?:
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-evenly"
    | "base";
  noDefaultStyle?: boolean;
  flexWrap?: "wrap" | "nowrap";
  flexDirection?: "row" | "column";
  onHover?: (state: boolean) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  //Unfortunately we'll have to add this to all components

  addCss?: SerializedStyles;
} & StandardProps) => {
  return (
    <div
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      css={css`
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: ${flexDirection};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        //And then  standard CSS
        ${!noDefaultStyle && DefaultCss()}
        ${StandardCSS(styles)}
      //Here we add additional css
      ${addCss}
      `}
    >
      {children}
    </div>
  );
};
