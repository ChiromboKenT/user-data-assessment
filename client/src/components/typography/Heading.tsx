/* @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import StandardProps from "../../theme/standard-props";
import StandardCSS from "../../theme/standard-css";
import headingTypography from "../../theme/heading-typography";
import DefaultCss from "../../theme/standard-default-css";
//Note the use of the enum to avoid using string matching during rendering.
enum HeadingLevels {
  main = "main",
  sub = "sub",
  subsub = "subsub",
}
const Heading = ({
  variant = "hero_heading",
  noDefaultStyle,
  level = "main",
  addCss,
  children,
  ...styles
}: {
  variant?: keyof typeof headingTypography;
  level?: "main" | "sub" | "subsub";
  noDefaultStyle?: boolean;
  addCss?: SerializedStyles;
  children: string;
} & StandardProps) => {
  return (
    <>
      {level === HeadingLevels.main ? (
        <h1
          css={css`
            ${!noDefaultStyle && DefaultCss()}
            ${StandardCSS(styles)}

            letter-spacing : ${headingTypography[variant]["letter-spacing"]};
            line-height: ${headingTypography[variant]["line-height"]};
            text-align: ${headingTypography[variant]["text-align"]};
            font-family: ${headingTypography[variant]["font-family"]};
            font-weight: ${headingTypography[variant]["font-weight"]};
            font-size: ${headingTypography[variant]["font-size"]};

            ${addCss};
          `}
        >
          {children}
        </h1>
      ) : level === HeadingLevels.sub ? (
        <h2
          css={css`
            ${!noDefaultStyle && DefaultCss()}
            ${StandardCSS(styles)}

            letter-spacing : ${headingTypography[variant]["letter-spacing"]};
            line-height: ${headingTypography[variant]["line-height"]};
            text-align: ${headingTypography[variant]["text-align"]};
            font-family: ${headingTypography[variant]["font-family"]};
            font-weight: ${headingTypography[variant]["font-weight"]};
            font-size: ${headingTypography[variant]["font-size"]};

            ${addCss};
          `}
        >
          {children}
        </h2>
      ) : (
        level === HeadingLevels.subsub && (
          <h3
            css={css`
              ${!noDefaultStyle && DefaultCss()}
              ${StandardCSS(styles)}

              letter-spacing : ${headingTypography[variant]["letter-spacing"]};
              line-height: ${headingTypography[variant]["line-height"]};
              text-align: ${headingTypography[variant]["text-align"]};
              font-family: ${headingTypography[variant]["font-family"]};
              font-weight: ${headingTypography[variant]["font-weight"]};
              font-size: ${headingTypography[variant]["font-size"]};

              ${addCss};
            `}
          >
            {children}
          </h3>
        )
      )}
    </>
  );
};

export default Heading;
