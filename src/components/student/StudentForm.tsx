import React, { useState } from "react";
import useStudentStore from "../../stores/StudentStore";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { TextField, Paper, Button } from "@material-ui/core";
import useThemeStore from "../../stores/ThemeStore";
import { observer } from "mobx-react";

const FormWrapper = styled.form`
  width: fit-content;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;

export default observer(() => {
  const store = useStudentStore();
  const theme = useThemeStore();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  function addStudentOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    store.addStudent({ name, age });
  }

  return (
    <Paper variant="outlined">
      <FormWrapper onSubmit={addStudentOnSubmit}>
        <Typography variant="h4" component="h4">
          Add a student
        </Typography>
        <Content>
          <TextField
            label="Name"
            type="txt"
            onChange={e => setName(e.target.value)}
            style={{ marginBottom: "5px" }}
          />
          <br />
          <TextField
            label="Age"
            type="number"
            onChange={e => setAge(+e.target.value)}
            style={{ marginBottom: "15px" }}
          />
        </Content>
        <Button
          variant="contained"
          style={{ backgroundColor: theme.primary, color: "white" }}
          type="submit"
        >
          ADD
        </Button>
      </FormWrapper>
    </Paper>
  );
});
