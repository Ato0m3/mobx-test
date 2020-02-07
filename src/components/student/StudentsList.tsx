import React from "react";
import { observer } from "mobx-react";
import useStudentStore from "../../stores/StudentStore";

import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/EmojiPeople";
import DeleteIcon from "@material-ui/icons/Delete";
import useThemeStore from "../../stores/ThemeStore";

const ListWrapper = styled.div`
  width: 60%;
  margin-left: 60px;
`;
export default observer(() => {
  const store = useStudentStore();

  return (
    <ListWrapper>
      <List>
        {store.studends.map(student => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PeopleIcon></PeopleIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={student.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
});
