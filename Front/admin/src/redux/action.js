// import axios from "axios";

export const LIGHT = "LIGHT";
export const DARK = "DARK";
export const TOGGLE = "TOGGLE";

export const act_themeLight = () => {
  return {
    type: LIGHT,
  };
};
export const act_themeDark = () => {
  return {
    type: DARK,
  };
};
export const act_themeTogle = () => {
  return {
    type: TOGGLE,
  };
};
