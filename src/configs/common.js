import {generatePath} from "react-router-dom";

export const TITLE = 'Review-Pick';

export const BASE_URL = 'http://signalinsight.iptime.org:38401';

export const ROLES = {
  admin: 'A',
  manager: 'M',
  user: 'U',
};

export const DEFAULT_SETTING_OPTIONS = {
  themeMode: 'light',
  themeColorPresets: 'default',
  themeLayout: 'horizontal',
  themeStretch: false
};

const ROOTS_GLOBAL = '/';
const ROOTS_AUTH = `/auth`;
const ROOTS_DASHBOARD = `/dashboard`;

const createPath = (path, roles = Object.values(ROLES)) => ({
  path,
  link: (params) => generatePath(path, params),
  roles
});

export const PATHS = {
  global: {
    root: createPath(ROOTS_GLOBAL),
    error: createPath(`/error`),
  },
  auth: {
    root: createPath(ROOTS_AUTH),
    login: createPath(`${ROOTS_AUTH}/login`)
  },
  dashboard: {
    root: createPath(ROOTS_DASHBOARD),
    home: createPath(`${ROOTS_DASHBOARD}/home`),
    manager: {
      root: createPath(`${ROOTS_DASHBOARD}/manager`, [ROLES.manager, ROLES.admin]),
      keyword: createPath(`${ROOTS_DASHBOARD}/manager/keyword`, [ROLES.manager, ROLES.admin]),
      company: createPath(`${ROOTS_DASHBOARD}/manager/company`, [ROLES.manager, ROLES.admin]),
    },
    admin: {
      root: createPath(`${ROOTS_DASHBOARD}/admin`, [ROLES.admin]),
      account: createPath(`${ROOTS_DASHBOARD}/admin/account`, [ROLES.admin])
    }
  }
}

export const LOGIN = PATHS.auth.login.link();
export const INDEX = PATHS.dashboard.home.link();
export const ERROR = PATHS.global.error.link();
