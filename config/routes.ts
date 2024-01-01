export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './user/Login' },
      { path: '/user/register', component: './user/Register' }
    ],
  },
  { path: '/welcome', icon: 'smile', component: './Welcome', name: '欢迎' },
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage' },
      { component: './404' },
    ],
  },
  { path: '/tableList', name: '查询表格', icon: 'table', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
