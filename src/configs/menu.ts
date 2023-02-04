export const MENU_PATHS = {
  MY_RECORDS: '/my-records',
  CHALLENGES: '/challenges',
  NOTIFICATIONS: '/notifications',
  CHARTS: '/charts',
  TARGETS: '/targets',
  COURSES: '/courses',
  COLUMNS: '/columns',
  SETTINGS: '/settings',
} as const;

export const MENU_CONFIG = [
  {
    href: MENU_PATHS.MY_RECORDS,
    label: '自分の記録',
  },
  {
    href: MENU_PATHS.CHARTS,
    label: '体重グラフ',
  },
  {
    href: MENU_PATHS.TARGETS,
    label: '目標',
  },
  {
    href: MENU_PATHS.COURSES,
    label: '選択中のコース',
  },
  {
    href: MENU_PATHS.COLUMNS,
    label: 'コラム一覧',
  },
  {
    href: MENU_PATHS.SETTINGS,
    label: '設定',
  },
] as const;
