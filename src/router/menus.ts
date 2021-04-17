
export interface MenuItem {
  path:string;
  title:string;
  component:string;
  hidden?:boolean;
  requireLogin:boolean;
  children?:MenuItem[];
}

export const menus:MenuItem[] = [
  {
    path: '/app/dashboard',
    component: 'dashboard',
    title: 'Dashboard',
    hidden: false,
    requireLogin: true
  },
  {
    path: '/app/users',
    component: 'users',
    title: 'Users',
    hidden: false,
    requireLogin: true
  }
]