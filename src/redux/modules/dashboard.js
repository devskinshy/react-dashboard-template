import {createActions, handleActions} from "redux-actions";
import produce from "immer";

const initialState = {
  desktop : {
    toggle: true,
    hover: false
  },
  mobile: {
    toggle: false
  }
};

const RESET_DESKTOP = 'dashboard/RESET_DESKTOP';
const HOVER_DESKTOP = 'dashboard/HOVER_DESKTOP';
const LEAVE_DESKTOP = 'dashboard/LEAVE_DESKTOP';
const TOGGLE_DESKTOP = 'dashboard/TOGGLE_DESKTOP';
const OPEN_MOBILE = 'dashboard/OPEN_MOBILE';
const CLOSE_MOBILE = 'dashboard/CLOSE_MOBILE';

export const {dashboard: {resetDesktop, hoverDesktop, leaveDesktop, toggleDesktop, openMobile, closeMobile}} = createActions({
  [RESET_DESKTOP]: () => {},
  [HOVER_DESKTOP]: () => {},
  [LEAVE_DESKTOP]: () => {},
  [TOGGLE_DESKTOP]: () => {},
  [OPEN_MOBILE]: () => {},
  [CLOSE_MOBILE]: () => {},
});

const dashboard = handleActions({
  [RESET_DESKTOP]: (state) => produce(state, draft => {
    draft.desktop.toggle = true;
    draft.desktop.hover = false;
  }),
  [HOVER_DESKTOP]: (state) => produce(state, draft => {
    draft.desktop.hover = true
  }),
  [LEAVE_DESKTOP]: (state) => produce(state, draft => {
    draft.desktop.hover = false
  }),
  [TOGGLE_DESKTOP]: (state) => produce(state, draft => {
    draft.desktop.toggle = !state.desktop.toggle
  }),
  [OPEN_MOBILE]: (state) => produce(state, draft => {
    draft.mobile.toggle = true
  }),
  [CLOSE_MOBILE]: (state) => produce(state, draft => {
    draft.mobile.toggle = false
  }),
}, initialState);

export default dashboard;