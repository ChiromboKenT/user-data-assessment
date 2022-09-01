/* @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import StandardProps from "../../../theme/standard-props";
import StandardCSS from "../../../theme/standard-css";
import DefaultCss from "../../../theme/standard-default-css";
import { MouseEventHandler } from "react";

//Just a very simple container, basically like a <div>
const Container = ({
  addCss,
  children,
  noDefaultStyle,
  onHover,
  onClick,
  ...styles
}: {
  noDefaultStyle?: boolean;
  children?: any;
  addCss?: SerializedStyles;
  onHover?: (state: boolean) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
} & StandardProps) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onHover && onHover(true)}
      onMouseLeave={() => onHover && onHover(false)}
      css={css`
        ${!noDefaultStyle && DefaultCss()}
        ${StandardCSS(styles)}

      ${addCss}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
