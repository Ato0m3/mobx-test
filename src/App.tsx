import React from "react";
import StudentsList from "./components/student/StudentsList";
import StudentCounter from "./components/student/StudentCounter";
import StudentForm from "./components/student/StudentForm";
import styled from "styled-components";
import useThemeStore from "./stores/ThemeStore";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import DarkIcon from "@material-ui/icons/Brightness2";
import LightIcon from "@material-ui/icons/Brightness4";
import { observer } from "mobx-react";

const AppWrapper = styled.div<{ color: string; main: string }>`
  color: ${p => p.color};
  background-color: ${p => p.main};
  width: 100vw;
  height: 100vh;
`;

const StudentFeature = styled.div`
  margin-left: 20px;
  display: flex;
`;
const App = observer(() => {
  const theme = useThemeStore();

  return (
    <AppWrapper color={theme.text} main={theme.main}>
      <StudentFeature>
        <div>
          <StudentCounter />
          <StudentForm />
        </div>
        <StudentsList />
      </StudentFeature>
      <ToggleButtonGroup
        value={theme.theme.name}
        exclusive
        onChange={theme.toogleTheme}
        aria-label="theme handling"
      >
        <ToggleButton value="dark" aria-label="dark theme">
          <DarkIcon />
        </ToggleButton>
        <ToggleButton value="light" aria-label="light theme">
          <LightIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </AppWrapper>
  );
});

export default App;
