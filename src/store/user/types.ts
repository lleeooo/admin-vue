export interface IUserState {
    token: string; //token
    userInfo: any; //用户信息
    userMenus: any; //用户权限路由
    currRouteUrl: string; //当前页面路由url
    currMenuId: number;
    hasInitAuth: boolean; //是否首次加载路由（动态路由刷新）
}
