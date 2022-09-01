import { css } from "@emotion/react";
import { ChangeEventHandler, ReactNode, useRef } from "react";
import StandardProps from "../../../theme/standard-props";
import theme from "../../../theme/theme";
import { Flex } from "../../layouts/Flex";
import Container from "../../layouts/Container";
import ToggleSwitch from "../toggle-switch";
import Heading from "../../typography/Heading";

const Accordion = ({
  name,
  heading,
  children,
  headerStyles,
  show = false,
  setIsShow,
  onClick,
  ...styles
}: {
  onClick?: () => void;
  name: string;
  show: boolean;
  heading: string;
  headerStyles?: StandardProps;
  children: ReactNode | ReactNode[];
  setIsShow: ChangeEventHandler<HTMLInputElement>;
} & StandardProps) => {
  const accordionItems = useRef<any>();
  return (
    <Container noDefaultStyle m={theme.margins.standard} {...styles}>
      <div
        onClick={() => onClick && onClick()}
        style={{ cursor: `${onClick ? "pointer" : "initial"}` }}
      >
        <Flex {...headerStyles}>
          <Heading variant="card_heading" level="sub" m={0} p={0} flex="1">
            {heading}
          </Heading>
          <ToggleSwitch name={name} isOn={show} handleToggle={setIsShow} />
        </Flex>
      </div>
      <Container
        m="0"
        mb={theme.margins.standard}
        addCss={css`
          transition: height ease-in 0.3s;
        `}
        p="0"
        height={!show ? "0" : "auto"}
        overflowY={!show ? "hidden" : "initial"}
      >
        <div style={{ background: theme.colors.white }} ref={accordionItems}>
          {children}
        </div>
      </Container>
    </Container>
  );
};

export default Accordion;
