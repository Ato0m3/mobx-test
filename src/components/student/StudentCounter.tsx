import React from "react";
import { observer } from "mobx-react";
import useStudentStore from "../../stores/StudentStore";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Paper, CircularProgress } from "@material-ui/core";
import PeoplesIcon from "@material-ui/icons/People";
import useThemeStore from "../../stores/ThemeStore";

const CounterWrapper = styled(Paper)`
  padding: 10px;
  margin: 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
`;

export default observer(() => {
  const store = useStudentStore();
  const theme = useThemeStore();

  return (
    <CounterWrapper>
      {store.loading ? (
        <CircularProgress style={{ color: theme.secondary }} />
      ) : (
        <>
          <Content>
            <Typography>
              {store.studends.length}{" "}
              <PeoplesIcon style={{ color: theme.secondary }}></PeoplesIcon>
            </Typography>
            <Typography>Free places : {store.freePlaces}</Typography>
          </Content>
        </>
      )}
    </CounterWrapper>
  );
});
