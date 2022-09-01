export default interface StandardProps {
  alignContent?: "center" | "flex-start" | "flex-end" | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "space-evenly"; //default is stretch
  justifySelf?: "center" | "flex-start" | "flex-end" | "baseline";
  alignSelf?: "center" | "flex-start" | "flex-end" | "baseline";
  color?: string;
  backgroundColor?: string;
  borderRadius?: string | number;
  boxShadow?: "small" | "medium" | "large" | "none";
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
  my?: string | number;
  mx?: string | number;
  m?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  pl?: string | number;
  py?: string | number;
  px?: string | number;
  p?: string | number;
  flexBasis?: string | number;
  flexGrow?: string | number;
  flexShrink?: string | number;
  flex?: string | number;
  textAlign?: string;
  justifyText?: "center" | "flex-start" | "flex-end";
  textTransformation?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: any;
  textDecoration?: string;
  lineHeight?: string | number;

  position?: "absolute" | "relative" | "fixed";
  bottom?: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  zIndex?: string | number;

  key?: any;
  id?: string;

  overflow?: "hidden" | "initial" | "visible" | "scroll" | "inherit" | "unset";
  overflowY?: "hidden" | "initial" | "visible" | "scroll" | "inherit" | "unset";
  overflowX?: "hidden" | "initial" | "visible" | "scroll" | "inherit" | "unset";
  disabled?: boolean;

  border?: string;
  borderB?: string;
  borderT?: string;

  opacity?: string;

  cursor?:
    | "pointer"
    | "default"
    | "none"
    | "progress"
    | "text"
    | "not-allowed"
    | "auto";

  display?: string;
  visibility?: string;
  transition?: string;
}
