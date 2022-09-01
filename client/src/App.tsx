/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Accordion from "./components/standard-elements/Accordion";
import Card from "./components/standard-elements/Card";
import Heading from "./components/typography/Heading";
import { useGetUserDataQuery } from "./features/api";
import theme from "./theme/theme";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const { data, isLoading, isFetching, isError } =
    useGetUserDataQuery("/users");

  console.log(data);
  return (
    <div
      css={css`
        height: 100%;
        padding: ${theme.padding.standard};
      `}
    >
      <Card heading="User Data API" height="100%" width="100%" m="0">
        <Accordion
          boxShadow="small"
          heading="Data 1"
          name="data-1"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          setIsShow={() => setIsOpen((isOpen) => !isOpen)}
          show={isOpen}
          headerStyles={{
            backgroundColor: theme.colors.headerColor,
            m: "0",
            borderRadius: `${theme.borderRadius.normal} ${theme.borderRadius.normal} 0 0`,
            p: theme.padding.m,
          }}
        >
          <Heading>My Data</Heading>
        </Accordion>
      </Card>
    </div>
  );
}

export default App;
