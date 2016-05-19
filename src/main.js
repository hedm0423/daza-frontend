import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

import AccountRegister from './components/account/Register';
import AccountLogin from './components/account/Login';
import AccountPasswordReset from './components/account/PasswordReset';

import UserList from './components/users/UserList';
import UserDetail from './components/users/UserDetail';

import GroupList from './components/groups/GroupList';
import GroupDetail from './components/groups/GroupDetail';
import GroupMembers from './components/groups/GroupMembers';

import PostList from './components/posts/PostList';
import PostDetail from './components/posts/PostDetail';

import ArticleList from './components/articles/ArticleList';
import ArticleDetail from './components/articles/ArticleDetail';

import NotificationList from './components/notifications/NotificationList';

Vue.use(VueRouter);

// 创建一个路由器实例
const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active',
  mode: 'html5',
});

// 定义路由规则
router.map({
  // '/': {
  //   component: HomeHello,
  // },
  '/account/register': {
    component: AccountRegister,
  },
  '/account/login': {
    component: AccountLogin,
  },
  '/account/password_reset': {
    component: AccountPasswordReset,
  },
  '/users': {
    component: UserList,
  },
  '/users/:id': {
    component: UserDetail,
  },
  '/groups': {
    component: GroupList,
  },
  '/groups/:id': {
    component: GroupDetail,
  },
  '/groups/:id/members': {
    component: GroupMembers,
  },
  '/posts': {
    component: PostList,
  },
  '/posts/:id': {
    component: PostDetail,
  },
  '/articles': {
    component: ArticleList,
  },
  '/articles/:id': {
    component: ArticleDetail,
  },
  '/notifications': {
    component: NotificationList,
  },
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, 'app');
