import { createContext, useContext } from "react";
import { observable, action, computed } from "mobx";
import Theme from "../models/Theme";

const darkTheme: Theme = {
  name: "dark",
  main: "#212121",
  primary: "orange",
  secondary: "purple",
  text: "white"
};

const lightTheme: Theme = {
  name: "light",
  main: "white",
  primary: "blue",
  secondary: "red",
  text: "black"
};

class ThemeStore {
  @observable theme: Theme;

  constructor() {
    this.theme = lightTheme;
  }

  @computed
  get main() {
    return this.theme.main;
  }

  @computed
  get primary() {
    return this.theme.primary;
  }

  @computed
  get secondary() {
    return this.theme.secondary;
  }

  @computed
  get text() {
    return this.theme.text;
  }

  @action.bound
  async toogleTheme() {
    console.log("toogle");

    this.theme = this.theme.name === "dark" ? lightTheme : darkTheme;
  }
}
const themeStore = new ThemeStore();

export default function useThemeStore() {
  return useContext(createContext(themeStore));
}
