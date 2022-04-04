import {createActions, handleActions} from "redux-actions";
import produce from "immer";
import {DEFAULT_SETTING_OPTIONS} from "../../configs";

const initialState = {
  toggle: false,
  ...DEFAULT_SETTING_OPTIONS
};

const OPEN_SETTING = 'setting/OPEN_SETTING';
const CLOSE_SETTING = 'setting/CLOSE_SETTING';
const CHANGE_MODE = 'setting/CHANGE_MODE';
const CHANGE_COLOR = 'setting/CHANGE_COLOR';
const CHANGE_LAYOUT = 'setting/CHANGE_LAYOUT';
const TOGGLE_STRETCH = 'setting/TOGGLE_STRETCH';
const RESET_ALL = 'setting/RESET_ALL';

export const {setting: {openSetting, closeSetting, changeMode, changeLayout, changeColor, toggleStretch, resetAll}} = createActions({
  [OPEN_SETTING]: () => {},
  [CLOSE_SETTING]: () => {},
  [CHANGE_MODE]: (mode) => mode,
  [CHANGE_LAYOUT]: (layout) => layout,
  [CHANGE_COLOR]: (color) => color,
  [TOGGLE_STRETCH]: () => {},
  [RESET_ALL]: () => {},
})

const setting = handleActions({
  [OPEN_SETTING]: (state) => produce(state, draft => {
    draft.toggle = true;
  }),
  [CLOSE_SETTING]: (state) => produce(state, draft => {
    draft.toggle = false;
  }),
  [CHANGE_MODE]: (state, {payload: mode}) => produce(state, draft => {
    draft.themeMode = mode
  }),
  [CHANGE_LAYOUT]: (state, {payload: layout}) => produce(state, draft => {
    draft.themeLayout = layout
  }),
  [CHANGE_COLOR]: (state, {payload: color}) => produce(state, draft => {
    draft.themeColorPresets = color
  }),
  [TOGGLE_STRETCH]: (state) => produce(state, draft => {
    draft.themeStretch = !state.themeStretch
  }),
  [RESET_ALL]: (state) => produce(state, draft => {
    draft.themeMode = initialState.themeMode;
    draft.themeLayout = initialState.themeLayout;
    draft.themeColorPresets = initialState.themeColorPresets;
    draft.themeStretch = initialState.themeStretch;
  })
}, initialState);

export default setting;