/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Flex } from "./components/layouts/Flex";
import Accordion from "./components/standard-elements/Accordion";
import Card from "./components/standard-elements/Card";
import { useGetUserDataQuery } from "./features/api";
import theme from "./theme/theme";
import ReactJson from "react-json-view";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const { data, isLoading, isFetching } = useGetUserDataQuery("/users");

  console.log(data);
  return (
    <div
      css={css`
        height: 100%;
        padding: ${theme.padding.standard};
      `}
    >
      <Card heading="User Data API" height="100%" width="100%" m="0">
        {isLoading || isFetching ? (
          <Flex
            height="100%"
            justifySelf="center"
            alignItems="center"
            justifyContent="center"
          >
            <ClipLoader
              color={theme.colors.primaryCta}
              loading={isLoading}
              size={350}
            />
          </Flex>
        ) : (
          <>
            <Accordion
              boxShadow="small"
              heading={`GET:  ${process.env.REACT_APP_API_HOST}/users`}
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
              {data && <ReactJson src={data[0]} />}
            </Accordion>
          </>
        )}
      </Card>
    </div>
  );
}

export default App;
