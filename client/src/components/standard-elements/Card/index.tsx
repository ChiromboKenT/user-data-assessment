import StandardProps from "../../../theme/standard-props";
import theme from "../../../theme/theme";
import Container from "../../layouts/Container";

const Card = ({
  heading,
  children,
  ...styles
}: {
  children?: any;
  heading?: string;
} & StandardProps) => (
  <Container
    boxShadow="small"
    backgroundColor="white"
    p={theme.padding.standard}
    m={theme.margins.standard}
    borderRadius={theme.borderRadius.normal}
    {...styles}
  >
    {/* {heading && (
    //   <Heading variant="card_heading" level="sub" m={0} p={0}>
    //     {heading}
    //   </Heading>
    )} */}
    {children}
  </Container>
);

export default Card;
